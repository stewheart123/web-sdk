<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'COMPONENTS/<HtmlUI replay>',
		component: Game,
		args: {
			balance: 1000,
			betAmount: 1,
			winAmount: 12.5,
			freeSpinCounterShow: false,
			freeSpinCounterCurrent: 0,
			freeSpinCounterTotal: 0,
			menuOpen: false,
			replayFinished: false,
		},
		argTypes: {
			balance: { control: { type: 'number', min: 0 }, description: 'Player balance' },
			betAmount: { control: { type: 'number', min: 0 }, description: 'Bet amount label' },
			winAmount: { control: { type: 'number', min: 0 }, description: 'Win amount label' },
			freeSpinCounterShow: { control: 'boolean', description: 'Show free-spin counter' },
			freeSpinCounterCurrent: {
				control: { type: 'number', min: 0 },
				description: 'Current free-spin index',
			},
			freeSpinCounterTotal: {
				control: { type: 'number', min: 0 },
				description: 'Total free spins',
			},
			menuOpen: { control: 'boolean', description: 'Open the HUD menu panel' },
			replayFinished: {
				control: 'boolean',
				description: 'Show the Play Again overlay',
			},
		},
		parameters: {
			controls: {
				include: [
					'balance',
					'betAmount',
					'winAmount',
					'freeSpinCounterShow',
					'freeSpinCounterCurrent',
					'freeSpinCounterTotal',
					'menuOpen',
					'replayFinished',
				],
			},
		},
	});
</script>

<script lang="ts">
	import { StoryGameTemplate } from 'components-storybook';

	import Game from '../components/Game.svelte';
	import StoryUiIdle from './StoryUiIdle.svelte';
	import { setContext } from '../game/context';

	setContext();

	type ReplayStoryArgs = {
		balance: number;
		betAmount: number;
		winAmount: number;
		freeSpinCounterShow: boolean;
		freeSpinCounterCurrent: number;
		freeSpinCounterTotal: number;
		menuOpen: boolean;
		replayFinished: boolean;
	};
</script>

{#snippet template(args: ReplayStoryArgs)}
	<StoryGameTemplate skipLoadingScreen={true} action={async () => {}}>
		<StoryUiIdle
			uiMode="replay"
			balance={args.balance}
			betAmount={args.betAmount}
			winAmount={args.winAmount}
			freeSpinCounterShow={args.freeSpinCounterShow}
			freeSpinCounterCurrent={args.freeSpinCounterCurrent}
			freeSpinCounterTotal={args.freeSpinCounterTotal}
			menuOpen={args.menuOpen}
			replayFinished={args.replayFinished}
		>
			<Game />
		</StoryUiIdle>
	</StoryGameTemplate>
{/snippet}

<Story name="replay HUD" {template} />

<Story
	name="replay HUD (free spins)"
	args={{
		betAmount: 2,
		winAmount: 48.75,
		freeSpinCounterShow: true,
		freeSpinCounterCurrent: 3,
		freeSpinCounterTotal: 10,
	}}
	{template}
/>

<Story
	name="replay HUD (menu open)"
	args={{
		betAmount: 1,
		winAmount: 5,
		menuOpen: true,
	}}
	{template}
/>

<Story
	name="replay finished"
	args={{
		betAmount: 1,
		winAmount: 12.5,
		replayFinished: true,
	}}
	{template}
/>
