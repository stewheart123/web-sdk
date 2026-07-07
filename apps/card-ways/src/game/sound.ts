import { createSound } from 'utils-sound';

export type MusicName = 'bgm_main' | 'bgm_freespin' | 'bgm_winlevel_all';

export type SoundEffectName =
	| 'jng_intro_fs'
	| 'sfx_bigwin_coinloop'
	| 'sfx_btn_general'
	| 'sfx_btn_spin'
	| 'sfx_fs_respins'
	| 'sfx_multiplier_combine'
	| 'sfx_multiplier_explosion'
	| 'sfx_multiplier_landing'
	| 'sfx_multiplier_reset'
	| 'sfx_multiplier_up'
	| 'sfx_multiplier_update'
	| 'sfx_multiplier_win'
	| 'sfx_reel_stop'
	| 'sfx_royals_landing'
	| 'sfx_scatter_reveal'
	| 'sfx_scatter_stop'
	| 'sfx_scatter_win'
	| 'sfx_superfreespin'
	| 'sfx_symbols_landing'
	| 'sfx_wild_explode'
	| 'sfx_winlevel_end'
	| 'sfx_youwon_panel';

export type SoundName = MusicName | SoundEffectName;

const sound = createSound<SoundName>();

export { sound };
