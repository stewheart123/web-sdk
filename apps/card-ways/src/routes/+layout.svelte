<script lang="ts">
	import { type Snippet } from 'svelte';
	import { base } from '$app/paths';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoaderBase, LoaderStakeEngine } from 'components-shared';
	import { toAbsoluteAssetUrl } from 'pixi-svelte';
	import Game from '../components/Game.svelte';
	import InitializeLocale from '../components/InitializeLocale.svelte';
	import { setContext } from '../game/context';
	import { stateSplash } from '../game/stateSplash.svelte';

	type Props = { children: Snippet };

	const props: Props = $props();

	// Static files live in /static and are copied to the build root, not under _app/.
	const loaderUrlStakeEngine = toAbsoluteAssetUrl(`${base}/stake-engine-loader.gif`);
	const loaderUrlStudio = toAbsoluteAssetUrl(
		`${base}/assets/sprites/studio/DirtyDegenCasino-Logo.png`,
	);

	// Parent controls dismiss; timeout is a safety fallback only.
	const STUDIO_LOADER_TIMEOUT_MS = 2_147_483_647;
	const STUDIO_LOADER_MAX_WIDTH = 400;
	const STUDIO_LOADER_BACKGROUND = '#041721';
	const MIN_STUDIO_VISIBLE_MS = 1000;

	let studioShownAt = $state<number | null>(null);

	const handleStakeEngineComplete = () => {
		stateSplash.showStudioLoader = true;
		studioShownAt = Date.now();
	};

	// Keep studio up for at least 1s, then hand off once Pixi LoadingScreen is ready.
	$effect(() => {
		if (!stateSplash.showStudioLoader || studioShownAt === null) return;
		if (!stateSplash.loadingScreenReady) return;

		const remaining = Math.max(0, MIN_STUDIO_VISIBLE_MS - (Date.now() - studioShownAt));
		const id = setTimeout(() => {
			stateSplash.showStudioLoader = false;
		}, remaining);

		return () => clearTimeout(id);
	});

	setContext();
</script>

<GlobalStyle>
	<Authenticate>
		<InitializeLocale>
			<Game />
		</InitializeLocale>
	</Authenticate>
</GlobalStyle>

<LoaderStakeEngine src={loaderUrlStakeEngine} oncomplete={handleStakeEngineComplete} />

{#if stateSplash.showStudioLoader}
	<LoaderBase
		src={loaderUrlStudio}
		maxWidth={STUDIO_LOADER_MAX_WIDTH}
		backgroundColor={STUDIO_LOADER_BACKGROUND}
		timeout={STUDIO_LOADER_TIMEOUT_MS}
	/>
{/if}

{@render props.children()}
