import type { LayoutType } from './boardLayoutConfig';

export type BonusTransitionLayoutSettings = {
	/** Fraction of canvas width (0.5 = center). */
	xRatio: number;
	/** Fraction of canvas height. */
	yRatio: number;
	/** Target spine height = canvas.height * heightScale. */
	heightScale: number;
	anchor?: number;
	scale?: number;
};

export const BONUS_TRANSITION_LAYOUT_BY_TYPE: Record<LayoutType, BonusTransitionLayoutSettings> = {
	desktop: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
	landscape: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
	portrait: { xRatio: 0.5, yRatio: 0.48, heightScale: 1.9 },
	tablet: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.75 },
};

export const getBonusTransitionLayoutSettings = (layoutType: LayoutType) =>
	BONUS_TRANSITION_LAYOUT_BY_TYPE[layoutType];
