<script lang="ts">
	import { onMount } from 'svelte';

	import type { LoadedAudio } from 'pixi-svelte';

	import { sound, type SoundName } from '../game/sound';

	onMount(() => {
		let destroyed = false;
		let destroySound: (() => void) | undefined;

		void (async () => {
			const gameAudioSprite = (await fetch(
				new URL('../../assets/audio/game_audio_sprite_mp3.json', import.meta.url),
			).then((response) => response.json())) as LoadedAudio<SoundName>;

			if (destroyed) return;

			const loadedAudio: LoadedAudio<SoundName> = {
				...gameAudioSprite,
				src: new URL('../../assets/audio/game_audio_sprite.mp3', import.meta.url).href,
			};

			console.warn('[sound] loaded sprite keys:', Object.keys(loadedAudio.sprite));
			const { destroy } = sound.load(loadedAudio);
			destroySound = destroy;

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
	sound.volumeEffect();
</script>
