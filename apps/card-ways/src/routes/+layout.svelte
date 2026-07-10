<script lang="ts">
	import { type Snippet } from 'svelte';
	import { base } from '$app/paths';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoaderStakeEngine } from 'components-shared';
	import { toAbsoluteAssetUrl } from 'pixi-svelte';
	import Game from '../components/Game.svelte';
	import InitializeLocale from '../components/InitializeLocale.svelte';
	import { setContext } from '../game/context';

	type Props = { children: Snippet };

	const props: Props = $props();

	// Static files live in /static and are copied to the build root, not under _app/.
	const loaderUrlStakeEngine = toAbsoluteAssetUrl(`${base}/stake-engine-loader.gif`);

	setContext();
</script>

<GlobalStyle>
	<Authenticate>
		<InitializeLocale>
			<Game />
		</InitializeLocale>
	</Authenticate>
</GlobalStyle>

<LoaderStakeEngine src={loaderUrlStakeEngine} />

{@render props.children()}