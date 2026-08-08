<script lang="ts">
	import type { Snippet } from 'svelte';

	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';

	import HudPanel from './HudPanel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();

	$effect(() => {
		if (stateModal.modal?.name === 'payTable') {
			stateModal.modal = { name: 'gameInfo' };
		}
	});
</script>

{#if stateModal.modal?.name === 'payTable'}
	<HudPanel
		title={i18nDerived.payTable}
		zIndex={zIndex.modal}
		onclose={() => (stateModal.modal = null)}
	>
		<span>ADD YOUR PAY TABLE</span>
		{@render props.children()}
	</HudPanel>
{/if}
