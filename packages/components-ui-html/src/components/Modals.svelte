<script lang="ts">
	import type { Snippet } from 'svelte';

	import ModalError from './ModalError.svelte';
	import ModalBetMenu from './ModalBetMenu.svelte';
	import ModalBuyBonus from './ModalBuyBonus.svelte';
	import ModalBuyBonusConfirm from './ModalBuyBonusConfirm.svelte';
	import ModalAutoSpin from './ModalAutoSpin.svelte';
	import ModalAutoSpinMessage from './ModalAutoSpinMessage.svelte';
	import ModalPayTable from './ModalPayTable.svelte';
	import ModalGameRules from './ModalGameRules.svelte';
	import ModalGameInfo from './ModalGameInfo.svelte';
	import ModalSettings from './ModalSettings.svelte';
	import GameRuleContent from './GameRuleContent.svelte';

	type Props = {
		version: Snippet;
	};

	const props: Props = $props();
</script>

<ModalError />
<ModalBetMenu />
<ModalBuyBonus />
<ModalBuyBonusConfirm />
<ModalAutoSpin />
<ModalAutoSpinMessage />
<ModalPayTable>
	{@render props.version()}
</ModalPayTable>
<ModalGameRules>
	{@render props.version()}
</ModalGameRules>
<ModalGameInfo>
	{#snippet payTable()}
		<GameRuleContent section="payTable" />
	{/snippet}
	{#snippet gameRules()}
		<GameRuleContent section="gameRules" />
	{/snippet}
	{#snippet version()}
		{@render props.version()}
	{/snippet}
</ModalGameInfo>
<ModalSettings />

