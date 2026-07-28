import { base } from '$app/paths';
import { toAbsoluteAssetUrl } from 'pixi-svelte';

export const CINZEL_FONT_FAMILY = 'Cinzel';

const cinzelUrl = () =>
	toAbsoluteAssetUrl(`${base}/assets/fonts/cinzel/Cinzel-SemiBold.ttf`);

let preloadPromise: Promise<void> | null = null;

/** Load Cinzel SemiBold once and register it with document.fonts for Pixi Text. */
export const preloadCinzelFont = (): Promise<void> => {
	if (preloadPromise) return preloadPromise;

	preloadPromise = (async () => {
		if (typeof document === 'undefined' || !document.fonts) return;

		const alreadyLoaded = [...document.fonts].some(
			(face) => face.family === CINZEL_FONT_FAMILY && String(face.weight) === '600',
		);
		if (alreadyLoaded) return;

		const face = new FontFace(CINZEL_FONT_FAMILY, `url(${cinzelUrl()})`, {
			weight: '600',
			style: 'normal',
		});
		await face.load();
		document.fonts.add(face);
		await document.fonts.load(`600 1em "${CINZEL_FONT_FAMILY}"`);
	})();

	return preloadPromise;
};
