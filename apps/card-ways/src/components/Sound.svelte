<script lang="ts" module>
	import { sound, type MusicName, type SoundEffectName, type SoundName } from '../game/sound';

	export type EmitterEventSound =
		| { type: 'soundMusic'; name: MusicName }
		| { type: 'soundOnce'; name: SoundEffectName; forcePlay?: boolean }
		| { type: 'soundLoop'; name: SoundEffectName }
		| { type: 'soundStop'; name: SoundName }
		| { type: 'soundFade'; name: SoundName; from: number; to: number; duration: number }
		| { type: 'soundScatterCounterIncrease' }
		| { type: 'soundScatterCounterClear' };
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import { waitForTimeout } from 'utils-shared/wait';
	import { SECOND } from 'constants-shared/time';
	import { stateBet } from 'state-shared';

	import { getContext } from '../game/context';

	const context = getContext();

	const warnPlay = (
		player: 'music' | 'loop' | 'once',
		name: SoundName,
		opts?: { forcePlay?: boolean },
	) => {
		console.warn(`[sound] ${player}:`, name, opts ?? '');
	};

	context.eventEmitter.subscribeOnMount({
		// ui
		soundBetMode: async ({ betModeKey }) => {
			if (betModeKey === 'SUPERSPIN') {
				// check if SUPERSPIN, when changing the bet mode.
				warnPlay('once', 'sfx_winlevel_end');
				sound.players.once.play({ name: 'sfx_winlevel_end' });
				await waitForTimeout(SECOND);
				warnPlay('music', 'bgm_freespin');
				sound.players.music.play({ name: 'bgm_freespin' });
			} else {
				warnPlay('music', 'bgm_main');
				sound.players.music.play({ name: 'bgm_main' });
			}
		},
		soundPressGeneral: () => {
			warnPlay('once', 'sfx_btn_general');
			sound.players.once.play({ name: 'sfx_btn_general' });
		},
		soundPressBet: () => {
			warnPlay('once', 'sfx_btn_spin');
			sound.players.once.play({ name: 'sfx_btn_spin' });
		},
		// scatterCounter
		soundScatterCounterIncrease: () => (context.stateGame.scatterCounter = context.stateGame.scatterCounter + 1), // prettier-ignore
		soundScatterCounterClear: () => (context.stateGame.scatterCounter = 0),
		// game
		soundMusic: ({ name }) => {
			warnPlay('music', name);
			sound.players.music.play({ name });
		},
		soundLoop: ({ name }) => {
			warnPlay('loop', name);
			sound.players.loop.play({ name });
		},
		soundOnce: ({ name, forcePlay }) => {
			warnPlay('once', name, { forcePlay });
			sound.players.once.play({ name, forcePlay });
		},
		soundStop: ({ name }) => {
			console.warn('[sound] stop:', name);
			sound.stop({ name });
		},
		soundFade: async ({ name, duration, from, to }) => {
			console.warn('[sound] fade:', name, { duration, from, to });
			await sound.fade({ name, duration, from, to });
		},
	});

	onMount(() => {
		if (stateBet.activeBetModeKey === 'SUPERSPIN') {
			// check if SUPERSPIN, when resume bet and the bet is a super spin.
			warnPlay('music', 'bgm_freespin');
			sound.players.music.play({ name: 'bgm_freespin' });
		} else {
			warnPlay('music', 'bgm_main');
			sound.players.music.play({ name: 'bgm_main' });

			//How to control volume per soundfile(use fade)
			// sound.players.music.fade({ name: 'bgm_main', from: 0, to: 1, duration: 2000 });

			//How to control rate per soundfile
			// sound.players.music.rate({ rate: 2, name: 'bgm_main'}); // change play back rate(1: default, 0: slow, 1+ fasterm and higher pitch )
		}
	});
</script>
