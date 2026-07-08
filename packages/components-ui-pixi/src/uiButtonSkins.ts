export type UiCircularButtonSkin = 'spin' | 'bonus_buy' | 'autoplay' | 'turbo';

export type UiButtonSkinState = {
	hovered: boolean;
	pressed: boolean;
	active: boolean;
	disabled: boolean;
};

const SKIN_FRAME_PREFIX: Record<UiCircularButtonSkin, string> = {
	spin: 'spin_button',
	bonus_buy: 'bonus_buy',
	autoplay: 'autoplay',
	turbo: 'turbo',
};

export const getUiButtonSkinFrame = (
	skin: UiCircularButtonSkin,
	state: UiButtonSkinState,
): string => {
	const useHover = !state.disabled && (state.hovered || state.pressed || state.active);
	const suffix = useHover ? 'interact_hover' : 'active';
	return `${SKIN_FRAME_PREFIX[skin]}_${suffix}.png`;
};

export const getUiButtonSkinActiveFrame = (skin: UiCircularButtonSkin): string =>
	`${SKIN_FRAME_PREFIX[skin]}_active.png`;

export const getUiButtonSkinRotation = (_frameKey: string): number => 0;

export const UI_BESPOKE_ICON_KEYS = {
	sfx: 'sfx-icon.png',
	music: 'music-icon.png',
	menu: 'burger-icon.png',
	info: 'info-icon.png',
} as const;

export const UI_AUDIO_ICON_KEYS = {
	sfx: UI_BESPOKE_ICON_KEYS.sfx,
	music: UI_BESPOKE_ICON_KEYS.music,
} as const;
