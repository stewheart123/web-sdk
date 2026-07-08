<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'COMPONENTS/<GameInfo>',
	});
</script>

<script lang="ts">
	import { StoryGameTemplate } from 'components-storybook';
	import { stateModal } from 'state-shared';

	import Game from '../components/Game.svelte';
	import StoryUiIdle from './StoryUiIdle.svelte';
	import { setContext } from '../game/context';

	setContext();
</script>

<Story name="info modal (use language toolbar)">
	<StoryGameTemplate
		skipLoadingScreen={true}
		action={async () => {
			stateModal.modal = { name: 'gameInfo' };
		}}
	>
		<StoryUiIdle>
			<Game />
		</StoryUiIdle>
	</StoryGameTemplate>
</Story>
