import type { SoundEffectName } from './sound';

/** Scales music player volume (0–1). Applied on load and before each music play. */
export const MUSIC_VOLUME_SCALE = 0.4;

/** Sprite loop length for sfx_bigwin_coinloop (ms). Keep in sync with game_audio_sprite_mp3.json. */
export const COIN_LOOP_DURATION_MS = 470;

/** Per-clip volume on the once channel (multiplied into sprite config at load). */
export const MUSIC_LIKE_SFX_VOLUME: Partial<Record<SoundEffectName, number>> = {
	jng_intro_fs: MUSIC_VOLUME_SCALE * 0.7,
};
