<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as PIXI from 'pixi.js';

	import { getContextApp } from '../context.svelte';
	import { applyNearestScaleModeToBitmapFont } from '../bitmapFontUtils';
	import { getProcessed } from '../assetLoad';
	import { loadFontBundle, loadSpineBundle, toAbsoluteAssetUrl } from '../resolvedAssetLoad';
	import type { FontSrc, LoadedAssets, RawAsset, RawSprites, SpineSrc, SpritesSrc } from '../types';

	type Props = { children: Snippet };

	const props: Props = $props();
	const context = getContextApp();

	let preLoaded = $state(false);

	const assetNameList = $derived(
		context.stateApp.assets
			? Object.keys(context.stateApp.assets).filter(
					(key) => Boolean(context.stateApp.assets?.[key].preload) === false,
				)
			: [],
	);

	const preAssetNameList = $derived(
		context.stateApp.assets
			? Object.keys(context.stateApp.assets).filter(
					(key) => context.stateApp.assets?.[key].preload === true,
				)
			: [],
	);

	let counter = 0;

	const onProgress = (value: number) => {
		if (preLoaded && value === 1) {
			counter = counter + 1;
			const ratio = counter / assetNameList.length;
			context.stateApp.loadingProgress = ratio * 100;
		}
	};

	const isFontSrc = (src: string | SpritesSrc | SpineSrc | FontSrc): src is FontSrc =>
		typeof src === 'object' && src !== null && 'xml' in src && 'image' in src;

	const isSpineSrc = (
		src: string | SpritesSrc | SpineSrc | FontSrc,
	): src is SpineSrc & Record<string, string | number | undefined> =>
		typeof src === 'object' && src !== null && 'atlas' in src && 'skeleton' in src;

	const isSpritesSrc = (src: string | SpritesSrc | SpineSrc | FontSrc): src is SpritesSrc =>
		typeof src === 'object' && src !== null && 'json' in src && 'image' in src;

	const loadSpritesheet = async (src: SpritesSrc): Promise<RawSprites> => {
		const imageUrl = toAbsoluteAssetUrl(src.image);
		const jsonUrl = toAbsoluteAssetUrl(src.json);
		const texture = await PIXI.Assets.load<PIXI.Texture>(imageUrl);
		const response = await fetch(jsonUrl);
		if (!response.ok) {
			throw new Error(`Failed to load spritesheet json: ${jsonUrl}`);
		}
		const data = await response.json();
		const spritesheet = new PIXI.Spritesheet(texture, data);
		await spritesheet.parse();
		return { textures: spritesheet.textures };
	};

	const loadAsset = async ({
		key,
		type,
		src,
	}: {
		key: string;
		type: string;
		src: string | SpritesSrc | SpineSrc | FontSrc;
	}) => {
		if (type === 'sprites' && isSpritesSrc(src)) {
			const rawAsset = await loadSpritesheet(src);
			return getProcessed({ key, rawAsset, type, src });
		}

		if (type === 'spine' && isSpineSrc(src)) {
			const rawAsset = await loadSpineBundle(src, onProgress);
			return getProcessed({ key, rawAsset, type, src });
		}

		if (type === 'font') {
			const rawAsset = await loadFontBundle(
				isFontSrc(src) ? src : (src as string),
				onProgress,
			);
			applyNearestScaleModeToBitmapFont(rawAsset);
			return getProcessed({ key, rawAsset, type, src });
		}

		const rawAsset = await PIXI.Assets.load<RawAsset>(toAbsoluteAssetUrl(src as string), onProgress);
		return getProcessed({ key, rawAsset, type, src });
	};

	const loadAssets = async (nameList: string[]) => {
		const loadedAssetsArray = await Promise.all(
			nameList.map(async (key) => {
				try {
					const { type, src } = context.stateApp.assets![key];
					return await loadAsset({ key, type, src });
				} catch (error) {
					console.error(error);
				}
			}),
		);

		return loadedAssetsArray.reduce(
			(acc, cur) => ({
				...acc,
				...cur,
			}),
			{} as LoadedAssets,
		);
	};

	$effect(() => {
		if (!preLoaded) {
			(async () => {
				if (preAssetNameList.length > 0) {
					const preLoadedAssets = await loadAssets(preAssetNameList);
					if (preLoadedAssets) context.stateApp.loadedAssets = preLoadedAssets;
				}
				preLoaded = true;
			})();
		}
	});

	$effect(() => {
		if (!context.stateApp.loaded && preLoaded) {
			(async () => {
				if (assetNameList.length > 0) {
					const postLoadedAssets = await loadAssets(assetNameList);
					if (postLoadedAssets)
						context.stateApp.loadedAssets = {
							...context.stateApp.loadedAssets,
							...postLoadedAssets,
						};
				}
				context.stateApp.loaded = true;
			})();
		}
	});
</script>

{#if preLoaded}
	{@render props.children()}
{/if}
