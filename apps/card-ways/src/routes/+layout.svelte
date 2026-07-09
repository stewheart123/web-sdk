<script lang="ts">
	import { type Snippet } from 'svelte';
	import { base } from '$app/paths';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoaderStakeEngine, LoaderExample } from 'components-shared';
	import { toAbsoluteAssetUrl } from 'pixi-svelte';
	import Game from '../components/Game.svelte';
	import InitializeLocale from '../components/InitializeLocale.svelte';
	import { setContext } from '../game/context';

	type Props = { children: Snippet };

	const props: Props = $props();

	let showYourLoader = $state(false);

	// Static files live in /static and are copied to the build root, not under _app/.
	const loaderUrlStakeEngine = toAbsoluteAssetUrl(`${base}/stake-engine-loader.gif`);
	const loaderUrl = toAbsoluteAssetUrl(`${base}/loader.gif`);

	setContext();
</script>

<GlobalStyle>
	<Authenticate>
		<InitializeLocale>
			<Game />
		</InitializeLocale>
	</Authenticate>
</GlobalStyle>

<LoaderStakeEngine src={loaderUrlStakeEngine} oncomplete={() => (showYourLoader = true)} />

{#if showYourLoader}
	<LoaderExample src={loaderUrl} />
	<!-- Served from apps/card-ways/static/ -->
{/if}

{@render props.children()}