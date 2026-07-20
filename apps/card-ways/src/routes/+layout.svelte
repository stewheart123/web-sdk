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

	// Parent controls dismiss when LoadingScreen mounts; timeout is a safety fallback only.
	const STUDIO_LOADER_TIMEOUT_MS = 2_147_483_647;
	const STUDIO_LOADER_MAX_WIDTH = 400;
	const STUDIO_LOADER_BACKGROUND = '#000000';

	setContext();
</script>

<GlobalStyle>
	<Authenticate>
		<InitializeLocale>
			<Game />
		</InitializeLocale>
	</Authenticate>
</GlobalStyle>

<LoaderStakeEngine
	src={loaderUrlStakeEngine}
	oncomplete={() => (stateSplash.showStudioLoader = true)}
/>

{#if stateSplash.showStudioLoader}
	<LoaderBase
		src={loaderUrlStudio}
		maxWidth={STUDIO_LOADER_MAX_WIDTH}
		backgroundColor={STUDIO_LOADER_BACKGROUND}
		timeout={STUDIO_LOADER_TIMEOUT_MS}
	/>
{/if}

{@render props.children()}
