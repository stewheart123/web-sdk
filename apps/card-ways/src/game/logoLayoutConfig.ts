import type { LayoutType } from './boardLayoutConfig';

export type LogoLayoutSettings = {
	width: number;
	x: number;
	y: number;
};

export const LOGO_LAYOUT_BY_TYPE: Record<LayoutType, LogoLayoutSettings> = {
	desktop: { width: 140, x: 0, y: 0 },
	landscape: { width: 120, x: 0, y: 0 },
	portrait: { width: 100, x: 0, y: 8 },
	tablet: { width: 110, x: 0, y: 0 },
};

export const getLogoLayoutSettings = (layoutType: LayoutType) =>
	LOGO_LAYOUT_BY_TYPE[layoutType];
