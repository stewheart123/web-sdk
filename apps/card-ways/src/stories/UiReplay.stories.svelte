<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'COMPONENTS/<HtmlUI replay>',
		component: Game,
	});
</script>

<script lang="ts">
	import { StoryGameTemplate } from 'components-storybook';

	import Game from '../components/Game.svelte';
	import StoryUiIdle from './StoryUiIdle.svelte';
	import { setContext } from '../game/context';

	setContext();
</script>

<Story name="replay HUD">
	<StoryGameTemplate skipLoadingScreen={true} action={async () => {}}>
		<StoryUiIdle uiMode="replay" betAmount={1} winAmount={12.5}>
			<Game />
		</StoryUiIdle>
	</StoryGameTemplate>
</Story>

<Story name="replay HUD (free spins)">
	<StoryGameTemplate skipLoadingScreen={true} action={async () => {}}>
		<StoryUiIdle
			uiMode="replay"
			betAmount={2}
			winAmount={48.75}
			freeSpinCounterShow={true}
			freeSpinCounterCurrent={3}
			freeSpinCounterTotal={10}
		>
			<Game />
		</StoryUiIdle>
	</StoryGameTemplate>
</Story>

<Story name="replay HUD (menu open)">
	<StoryGameTemplate skipLoadingScreen={true} action={async () => {}}>
		<StoryUiIdle uiMode="replay" betAmount={1} winAmount={5} menuOpen={true}>
			<Game />
		</StoryUiIdle>
	</StoryGameTemplate>
</Story>

<Story name="replay finished">
	<StoryGameTemplate skipLoadingScreen={true} action={async () => {}}>
		<StoryUiIdle uiMode="replay" betAmount={1} winAmount={12.5} replayFinished={true}>
			<Game />
		</StoryUiIdle>
	</StoryGameTemplate>
</Story>
