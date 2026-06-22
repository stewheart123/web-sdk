import type { LayoutType } from './boardLayoutConfig';

export type LogoLayoutSettings = {
	width: number;
	x: number;
	y: number;
};

export const LOGO_LAYOUT_BY_TYPE: Record<LayoutType, LogoLayoutSettings> = {
	desktop: { width: 100, x: -130, y: 30 },
	landscape: { width: 100, x: -130, y: 30 },
	portrait: { width: 100, x: 0, y: 8 },
	tablet: { width: 100, x: -130, y: 30 },
};

export const getLogoLayoutSettings = (layoutType: LayoutType) =>
	LOGO_LAYOUT_BY_TYPE[layoutType];
