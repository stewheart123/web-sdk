<script lang="ts">
	import { onMount } from 'svelte';

	import type { LoadedAudio } from 'pixi-svelte';
	import { stateSoundDerived } from 'state-shared';

	import { LOOP_SFX_VOLUME, MUSIC_LIKE_SFX_VOLUME, MUSIC_VOLUME_SCALE } from '../game/audioConfig';
	import { sound, type SoundName } from '../game/sound';

	const applyMusicVolume = () => {
		sound.players?.music?.volume(stateSoundDerived.volumeMusic() * MUSIC_VOLUME_SCALE);
	};

	const withClipVolumeScales = (audio: LoadedAudio<SoundName>): LoadedAudio<SoundName> => {
		const config = { ...audio.config };

		for (const scales of [MUSIC_LIKE_SFX_VOLUME, LOOP_SFX_VOLUME]) {
			for (const [name, scale] of Object.entries(scales)) {
				const clipConfig = config[name as SoundName];
				if (!clipConfig || scale === undefined) continue;
				config[name as SoundName] = { volume: clipConfig.volume * scale };
			}
		}

		return { ...audio, config };
	};

	onMount(() => {
		let destroyed = false;
		let destroySound: (() => void) | undefined;

		void (async () => {
			const gameAudioSprite = (await fetch(
				new URL('../../assets/audio/game_audio_sprite_mp3.json', import.meta.url),
			).then((response) => response.json())) as LoadedAudio<SoundName>;

			if (destroyed) return;

			const loadedAudio = withClipVolumeScales({
				...gameAudioSprite,
				src: new URL('../../assets/audio/game_audio_sprite.mp3', import.meta.url).href,
			});

			console.warn('[sound] loaded sprite keys:', Object.keys(loadedAudio.sprite));
			const { destroy } = sound.load(loadedAudio);
			destroySound = destroy;
			applyMusicVolume();

			const howl = sound.players?.music?.howl;
			howl?.on('load', () => console.warn('[sound] howl loaded'));
			howl?.on('loaderror', (_id, error) => console.warn('[sound] howl loaderror:', error));
		})();

		return () => {
			destroyed = true;
			destroySound?.();
		};
	});

	sound.enableEffect();

	$effect(() => {
		stateSoundDerived.volumeMusic();
		applyMusicVolume();
	});

	$effect(() => {
		sound.players?.loop?.volume(stateSoundDerived.volumeSoundEffect());
	});

	$effect(() => {
		sound.players?.once?.volume(stateSoundDerived.volumeSoundEffect());
	});
</script>
