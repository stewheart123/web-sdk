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
