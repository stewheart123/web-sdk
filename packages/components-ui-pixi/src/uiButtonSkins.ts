export type UiCircularButtonSkin = 'spin' | 'bonus_buy' | 'autoplay' | 'turbo';

export type UiButtonSkinState = {
	hovered: boolean;
	pressed: boolean;
	active: boolean;
	disabled: boolean;
};

export const getUiButtonSkinFrame = (
	skin: UiCircularButtonSkin,
	state: UiButtonSkinState,
): string => {
	const useHover = !state.disabled && (state.hovered || state.pressed || state.active);
	const suffix = useHover ? 'interact_hover' : 'active';
	return `${skin}_${suffix}.png`;
};

export const getUiButtonSkinActiveFrame = (skin: UiCircularButtonSkin): string =>
	`${skin}_active.png`;

/** Spine atlas rotate:90 frames — Pixi spritesheet un-rotate needs a 180° correction. */
export const UI_BUTTON_ROTATED_FRAMES = new Set([
	'autoplay_active.png',
	'bonus_buy_active.png',
	'bonus_buy_interact_hover.png',
	'spin_interact_hover.png',
	'turbo_active.png',
]);

export const getUiButtonSkinRotation = (frameKey: string): number =>
	UI_BUTTON_ROTATED_FRAMES.has(frameKey) ? Math.PI : 0;

export const UI_BESPOKE_ICON_KEYS = {
	sfx: 'sfxIconSm',
	music: 'musicIconSm',
	menu: 'burgerIconSm',
	info: 'infoIconSm',
} as const;

export const UI_AUDIO_ICON_KEYS = {
	sfx: UI_BESPOKE_ICON_KEYS.sfx,
	music: UI_BESPOKE_ICON_KEYS.music,
} as const;
