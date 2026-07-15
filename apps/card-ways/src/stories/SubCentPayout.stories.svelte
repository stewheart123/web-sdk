<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'APPROVAL/subCentPayout',
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
	import { bookEventAmountToCurrencyString, bookEventAmountToNormalisedAmount } from 'utils-shared/amount';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import {
		MIN_BET,
		playWinAmountCase,
		seedWinAmountCase,
		type WinAmountCase,
	} from './winAmountStoryUtils';

	setContext();

	const subCentCases: WinAmountCase[] = [
		{ label: '1 book unit (0.1 cent at min bet)', bookAmount: 1, winLevel: 2 },
		{ label: '4 book units (0.4 cent at min bet)', bookAmount: 4, winLevel: 2 },
		{ label: '5 book units (0.5 cent at min bet)', bookAmount: 5, winLevel: 2 },
		{ label: '10 book units (exactly 1 cent)', bookAmount: 10, winLevel: 2 },
	];

	const logCase = (testCase: WinAmountCase) => {
		seedWinAmountCase(testCase);
		const actual = bookEventAmountToNormalisedAmount(testCase.bookAmount);
		const displayed = bookEventAmountToCurrencyString(testCase.bookAmount);
		const passes = actual > 0 && displayed !== bookEventAmountToCurrencyString(0);

		console.group(`[sub-cent test] ${testCase.label}`);
		console.log('Bet:', MIN_BET);
		console.log('Book amount:', testCase.bookAmount);
		console.log('Actual payout ($):', actual);
		console.log('Displayed:', displayed);
		console.log('Pass (non-zero win not shown as $0.00):', passes ? 'YES' : 'NO');
		console.groupEnd();

		return { actual, displayed, passes };
	};

	const playSubCentWin = async (testCase: WinAmountCase) => {
		logCase(testCase);
		await playWinAmountCase(testCase);
	};

	onMount(() => seedWinAmountCase(subCentCases[0]));
</script>

{#snippet template(args: TemplateArgs<WinAmountCase>)}
	<StoryGameTemplate
		skipLoadingScreen={true}
		action={async () => {
			await playSubCentWin(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>
{/snippet}

<Story
	name="book amount 1 (0.1 cent)"
	exportName="BookAmount1"
	args={templateArgs({
		skipLoadingScreen: true,
		data: subCentCases[0],
	})}
	{template}
/>

<Story
	name="book amount 4 (0.4 cent)"
	exportName="BookAmount4"
	args={templateArgs({
		skipLoadingScreen: true,
		data: subCentCases[1],
	})}
	{template}
/>

<Story
	name="book amount 5 (0.5 cent)"
	exportName="BookAmount5"
	args={templateArgs({
		skipLoadingScreen: true,
		data: subCentCases[2],
	})}
	{template}
/>

<Story
	name="book amount 10 (1 cent)"
	exportName="BookAmount10"
	args={templateArgs({
		skipLoadingScreen: true,
		data: subCentCases[3],
	})}
	{template}
/>
