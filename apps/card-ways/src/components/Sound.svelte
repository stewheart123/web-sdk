<script lang="ts" module>
	import { sound, type MusicName, type SoundEffectName, type SoundName } from '../game/sound';

	export type EmitterEventSound =
		| { type: 'soundMusic'; name: MusicName }
		| { type: 'soundOnce'; name: SoundEffectName; forcePlay?: boolean }
		| { type: 'soundLoop'; name: SoundEffectName }
		| { type: 'soundStop'; name: SoundName; afterCurrentLoop?: boolean }
		| { type: 'soundFade'; name: SoundName; from: number; to: number; duration: number }
		| { type: 'soundScatterCounterIncrease' }
		| { type: 'soundScatterCounterClear' };
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Howler } from 'howler';

	import { waitForTimeout } from 'utils-shared/wait';
	import { SECOND } from 'constants-shared/time';
	import { stateBet, stateSoundDerived } from 'state-shared';

	import { COIN_LOOP_DURATION_MS, MUSIC_VOLUME_SCALE } from '../game/audioConfig';
	import { getContext } from '../game/context';

	const context = getContext();

	const COIN_LOOP_SOUND = 'sfx_bigwin_coinloop' as const;
	let coinLoopStartedAt: number | null = null;
	let coinLoopStopTimeout: ReturnType<typeof setTimeout> | null = null;

	const clearCoinLoopStopTimeout = () => {
		if (coinLoopStopTimeout !== null) {
			clearTimeout(coinLoopStopTimeout);
			coinLoopStopTimeout = null;
		}
	};

	const stopSound = (name: SoundName, afterCurrentLoop = false) => {
		if (name === COIN_LOOP_SOUND && afterCurrentLoop && coinLoopStartedAt !== null) {
			clearCoinLoopStopTimeout();
			const elapsed = performance.now() - coinLoopStartedAt;
			const remaining = COIN_LOOP_DURATION_MS - (elapsed % COIN_LOOP_DURATION_MS);
			coinLoopStopTimeout = setTimeout(() => {
				coinLoopStopTimeout = null;
				coinLoopStartedAt = null;
				sound.stop({ name: COIN_LOOP_SOUND });
			}, remaining);
			return;
		}

		clearCoinLoopStopTimeout();
		if (name === COIN_LOOP_SOUND) coinLoopStartedAt = null;
		sound.stop({ name });
	};

	const warnPlay = (
		player: 'music' | 'loop' | 'once',
		name: SoundName,
		opts?: { forcePlay?: boolean },
	) => {
		console.warn(`[sound] ${player}:`, name, opts ?? '');
	};

	const playMusic = (name: MusicName) => {
		const musicVolume = stateSoundDerived.volumeMusic() * MUSIC_VOLUME_SCALE;
		sound.players?.music?.volume(musicVolume);

		if (musicVolume === 0) {
			return;
		}

		sound.players?.music?.stop({ name });
		warnPlay('music', name);
		sound.players.music.play({ name });
	};

	const playSoundOnce = (name: SoundEffectName, forcePlay?: boolean) => {
		const volume = stateSoundDerived.volumeSoundEffect();
		sound.players?.once?.volume(volume);

		if (volume === 0) {
			return;
		}

		warnPlay('once', name, { forcePlay });
		sound.players.once.play({ name, forcePlay });
	};

	const playSoundLoop = (name: SoundEffectName) => {
		const volume = stateSoundDerived.volumeSoundEffect();
		sound.players?.loop?.volume(volume);

		if (volume === 0) {
			return;
		}

		if (name === COIN_LOOP_SOUND) {
			clearCoinLoopStopTimeout();
			coinLoopStartedAt = performance.now();
		}

		warnPlay('loop', name);
		sound.players.loop.play({ name });
	};

	let lastScaledMusicVolume = stateSoundDerived.volumeMusic() * MUSIC_VOLUME_SCALE;

	const getAmbientMusic = (): MusicName => {
		if (stateBet.activeBetModeKey === 'SUPERSPIN' || context.stateGame.gameType === 'freegame') {
			return 'bgm_freespin';
		}

		return 'bgm_main';
	};

	$effect(() => {
		const scaledMusicVolume = stateSoundDerived.volumeMusic() * MUSIC_VOLUME_SCALE;

		if (lastScaledMusicVolume === 0 && scaledMusicVolume > 0) {
			playMusic(getAmbientMusic());
		}

		lastScaledMusicVolume = scaledMusicVolume;
	});

	context.eventEmitter.subscribeOnMount({
		// ui
		soundBetMode: async ({ betModeKey }) => {
			if (betModeKey === 'SUPERSPIN') {
				// check if SUPERSPIN, when changing the bet mode.
				playSoundOnce('sfx_winlevel_end');
				await waitForTimeout(SECOND);
				playMusic('bgm_freespin');
			} else {
				playMusic('bgm_main');
			}
		},
		soundPressGeneral: () => {
			playSoundOnce('sfx_btn_general');
		},
		soundPressBet: () => {
			playSoundOnce('sfx_btn_spin');
		},
		// scatterCounter
		soundScatterCounterIncrease: () => (context.stateGame.scatterCounter = context.stateGame.scatterCounter + 1), // prettier-ignore
		soundScatterCounterClear: () => (context.stateGame.scatterCounter = 0),
		// game
		soundMusic: ({ name }) => playMusic(name),
		soundLoop: ({ name }) => {
			playSoundLoop(name);
		},
		soundOnce: ({ name, forcePlay }) => {
			playSoundOnce(name, forcePlay);
		},
		soundStop: ({ name, afterCurrentLoop }) => {
			console.warn('[sound] stop:', name, afterCurrentLoop ? '(after loop)' : '');
			stopSound(name, afterCurrentLoop);
		},
		soundFade: async ({ name, duration, from, to }) => {
			console.warn('[sound] fade:', name, { duration, from, to });
			await sound.fade({ name, duration, from, to });
		},
	});

	onMount(async () => {
		await Howler.ctx.resume();

		if (stateBet.activeBetModeKey === 'SUPERSPIN') {
			// check if SUPERSPIN, when resume bet and the bet is a super spin.
			playMusic('bgm_freespin');
		} else {
			playMusic('bgm_main');

			//How to control volume per soundfile(use fade)
			// sound.players.music.fade({ name: 'bgm_main', from: 0, to: 1, duration: 2000 });

			//How to control rate per soundfile
			// sound.players.music.rate({ rate: 2, name: 'bgm_main'}); // change play back rate(1: default, 0: slow, 1+ fasterm and higher pitch )
		}
	});
</script>
