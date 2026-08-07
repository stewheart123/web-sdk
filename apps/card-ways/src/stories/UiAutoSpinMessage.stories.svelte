<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'COMPONENTS/<UiAutoSpinMessage>',
		component: Game,
	});
</script>

<script lang="ts">
	import { StoryGameTemplate } from 'components-storybook';
	import { GlobalStyle } from 'components-ui-html';
	import { stateModal } from 'state-shared';

	import Game from '../components/Game.svelte';
	import StoryUiIdle from './StoryUiIdle.svelte';
	import { setContext } from '../game/context';

	setContext();
</script>

{#snippet modalStory(action: () => void)}
	<StoryGameTemplate skipLoadingScreen={true} action={async () => action()}>
		<GlobalStyle>
			<StoryUiIdle>
				<Game />
			</StoryUiIdle>
		</GlobalStyle>
	</StoryGameTemplate>
{/snippet}

<Story name="insufficient funds (use language toolbar)">
	{@render modalStory(() => {
		stateModal.modal = { name: 'autoSpinMessage', message: 'insufficientFunds' };
	})}
</Story>

<Story name="loss limit reached (use language toolbar)">
	{@render modalStory(() => {
		stateModal.modal = { name: 'autoSpinMessage', message: 'lossLimitReached' };
	})}
</Story>

<Story name="single win limit reached (use language toolbar)">
	{@render modalStory(() => {
		stateModal.modal = { name: 'autoSpinMessage', message: 'singleWinLimitReached' };
	})}
</Story>
