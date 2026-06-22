import type { LayoutType } from './boardLayoutConfig';
import { SYMBOL_SIZE } from './constants';

export type ModifierLayoutSettings = {
	slabWidth: number;
	slabHeight: number;
	cardHeight: number;
	cardWindowY: number;
	/** Card-only vertical offset inside the mask window. Negative moves the card up. */
	cardYOffset: number;
	cardWindowWidth: number;
	cardWindowHeight: number;
	scrollDistance: number;
	scrollDuration: number;
};

const BASE_MODIFIER_LAYOUT: ModifierLayoutSettings = {
	slabWidth: SYMBOL_SIZE,
	slabHeight: SYMBOL_SIZE * 1.45,
	cardHeight: SYMBOL_SIZE * 0.95,
	cardWindowY: SYMBOL_SIZE * 0.15,
	cardYOffset: SYMBOL_SIZE * -0.45,
	cardWindowWidth: SYMBOL_SIZE * 1,
	cardWindowHeight: SYMBOL_SIZE * 1.1,
	scrollDistance: SYMBOL_SIZE,
	scrollDuration: 333,
};

export const MODIFIER_LAYOUT_BY_TYPE: Record<LayoutType, ModifierLayoutSettings> = {
	desktop: BASE_MODIFIER_LAYOUT,
	landscape: BASE_MODIFIER_LAYOUT,
	portrait: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE * 0.95 },
	tablet: BASE_MODIFIER_LAYOUT,
};

export const getModifierLayoutSettings = (layoutType: LayoutType) =>
	MODIFIER_LAYOUT_BY_TYPE[layoutType];
