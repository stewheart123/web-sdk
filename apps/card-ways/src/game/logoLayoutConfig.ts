import type { LayoutType } from './boardLayoutConfig';

export type LogoAlign = 'topRight' | 'topCenter';

export type LogoLayoutSettings = {
	width: number;
	x: number;
	y: number;
	align?: LogoAlign;
};

/** Matches the inset used by shared UI layout logo containers. */
export const LOGO_UI_RIGHT_INSET = 20;

export const LOGO_LAYOUT_BY_TYPE: Record<LayoutType, LogoLayoutSettings> = {
	desktop: { width: 100, x: -130, y: 30, align: 'topRight' },
	landscape: { width: 100, x: 0, y: 30, align: 'topCenter' },
	portrait: { width: 80, x: -40, y: 40, align: 'topCenter' },
	tablet: { width: 100, x: -130, y: 30, align: 'topRight' },
};

export const getLogoLayoutSettings = (layoutType: LayoutType) =>
	LOGO_LAYOUT_BY_TYPE[layoutType];
