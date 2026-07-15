<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'APPROVAL/largeWinAmount',
	});
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import {
		StoryGameTemplate,
		StoryLocale,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import {
		largeWinCases,
		playWinAmountCase,
		seedWinAmountCase,
		type WinAmountCase,
	} from './winAmountStoryUtils';

	setContext();

	onMount(() => seedWinAmountCase(largeWinCases[0]));
</script>

{#snippet template(args: TemplateArgs<WinAmountCase>)}
	<StoryGameTemplate
		skipLoadingScreen={true}
		action={async () => {
			await playWinAmountCase(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>
{/snippet}

<Story
	name="NGN 262k normal win"
	exportName="NgnNormalWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: largeWinCases[0],
	})}
	{template}
/>

<Story
	name="USD 1 million normal win"
	exportName="UsdOneMillionNormalWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: largeWinCases[1],
	})}
	{template}
/>

<Story
	name="USD 12.3 million normal win"
	exportName="UsdLargeNormalWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: largeWinCases[2],
	})}
	{template}
/>

<Story
	name="NGN 262k big win"
	exportName="NgnBigWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: largeWinCases[3],
	})}
	{template}
/>

<Story
	name="NOK 557k legendary win"
	exportName="NokLegendaryWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: largeWinCases[4],
	})}
	{template}
/>

<Story
	name="IDR large normal win"
	exportName="IdrLargeNormalWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: largeWinCases[5],
	})}
	{template}
/>
