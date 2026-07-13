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
	import { stateBet } from 'state-shared';
	import {
		bookEventAmountToCurrencyString,
		bookEventAmountToNormalisedAmount,
	} from 'utils-shared/amount';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { playBookEvent } from '../game/utils';

	setContext();

	const MIN_BET = 0.1;

	type SubCentCase = {
		label: string;
		bookAmount: number;
		winLevel: number;
	};

	const subCentCases: SubCentCase[] = [
		{ label: '1 book unit (0.1 cent at min bet)', bookAmount: 1, winLevel: 2 },
		{ label: '4 book units (0.4 cent at min bet)', bookAmount: 4, winLevel: 2 },
		{ label: '5 book units (0.5 cent at min bet)', bookAmount: 5, winLevel: 2 },
		{ label: '10 book units (exactly 1 cent)', bookAmount: 10, winLevel: 2 },
	];

	const seedMinBet = () => {
		stateBet.betAmount = MIN_BET;
		stateBet.wageredBetAmount = MIN_BET;
		stateBet.winBookEventAmount = 0;
		stateBet.currency = 'USD';
	};

	const logCase = (testCase: SubCentCase) => {
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

	const playSubCentWin = async (testCase: SubCentCase) => {
		seedMinBet();
		const preview = logCase(testCase);

		await playBookEvent(
			{
				index: 0,
				type: 'setWin',
				amount: testCase.bookAmount,
				winLevel: testCase.winLevel,
			},
			{ bookEvents: [] },
		);

		return preview;
	};

	onMount(seedMinBet);
</script>

{#snippet template(args: TemplateArgs<SubCentCase>)}
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

	<div class="hud">
		<strong>Sub-cent payout test</strong>
		<p>Bet locked to ${MIN_BET.toFixed(2)} (typical minimum). Click Action to play setWin.</p>
		<p>Check the win popup and bottom WIN label. Console logs expected vs displayed.</p>
		{#if args.data}
			<ul>
				<li>Case: {args.data.label}</li>
				<li>Book amount: {args.data.bookAmount}</li>
				<li>
					Actual: ${bookEventAmountToNormalisedAmount(args.data.bookAmount).toFixed(6)}
				</li>
				<li>Displayed now: {bookEventAmountToCurrencyString(args.data.bookAmount)}</li>
			</ul>
		{/if}
	</div>
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

<style lang="scss">
	.hud {
		position: absolute;
		top: 48px;
		left: 0;
		z-index: 999;
		max-width: 420px;
		padding: 8px 12px;
		background: rgba(0, 0, 0, 0.82);
		color: #fff;
		font-size: 13px;
		line-height: 1.4;
		pointer-events: none;

		p {
			margin: 4px 0;
		}

		ul {
			margin: 6px 0 0;
			padding-left: 18px;
		}
	}
</style>
