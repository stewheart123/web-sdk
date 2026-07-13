<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'APPROVAL/zeroWinEndRound',
	});
</script>

<script lang="ts">
	import {
		StoryGameTemplate,
		StoryLocale,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { playBet } from '../game/utils';
	import books from './data/base_books';

	setContext();

	type BookCase = {
		label: string;
		bookIndex: number;
		expectEndRound: boolean;
	};

	const cases: BookCase[] = [
		{
			label: 'Zero-win base spin (payoutMultiplier: 0)',
			bookIndex: 0,
			expectEndRound: false,
		},
		{
			label: 'Winning spin with bonus (payoutMultiplier > 0)',
			bookIndex: 1,
			expectEndRound: true,
		},
	];

	const logExpectation = (testCase: BookCase) => {
		const book = books[testCase.bookIndex];
		console.group(`[zero-win end-round test] ${testCase.label}`);
		console.log('Book index:', testCase.bookIndex);
		console.log('payoutMultiplier:', book.payoutMultiplier);
		console.log('Expected bet type:', testCase.expectEndRound ? 'singleRoundWin' : 'noWin');
		console.log(
			'Expected on staging:',
			testCase.expectEndRound
				? 'POST /wallet/end-round SHOULD appear in Network tab'
				: 'POST /wallet/end-round should NOT appear',
		);
		console.log(
			'Console on staging:',
			testCase.expectEndRound
				? '[RGS] bet classified as bonusWin or singleRoundWin → [RGS] POST /wallet/end-round (timing depends on bet type)'
				: '[RGS] bet classified as noWin → no end-round log',
		);
		console.groupEnd();
	};

	const playBook = async (testCase: BookCase) => {
		const book = books[testCase.bookIndex];
		logExpectation(testCase);
		await playBet({ ...book, state: book.events });
	};
</script>

{#snippet template(args: TemplateArgs<BookCase>)}
	{@const book = books[args.data.bookIndex]}
	<StoryGameTemplate
		skipLoadingScreen={true}
		action={async () => {
			await playBook(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>

	<div class="hud">
		<strong>Zero-win end-round test</strong>
		<p>Storybook replays math books only — it does not call the RGS.</p>
		<p>Use staging + DevTools Network tab to verify the real API calls.</p>
		<ul>
			<li>Case: {args.data.label}</li>
			<li>Book index: {args.data.bookIndex}</li>
			<li>payoutMultiplier: {book.payoutMultiplier}</li>
			<li>
				Staging expectation:
				{args.data.expectEndRound
					? 'end-round SHOULD be sent'
					: 'end-round should NOT be sent'}
			</li>
		</ul>
	</div>
{/snippet}

<Story
	name="zero win (no end-round)"
	exportName="ZeroWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: cases[0],
	})}
	{template}
/>

<Story
	name="winning spin (end-round expected)"
	exportName="WinningSpin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: cases[1],
	})}
	{template}
/>

<style lang="scss">
	.hud {
		position: absolute;
		top: 48px;
		left: 0;
		z-index: 999;
		max-width: 460px;
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
