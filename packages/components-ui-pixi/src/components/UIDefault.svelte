<script lang="ts">
	import type { Snippet } from 'svelte';

	import { EnableSpaceHold } from 'components-shared';

	import BettingControlsLockSync from './BettingControlsLockSync.svelte';
	import UiFadeContainer from './UiFadeContainer.svelte';
	import LayoutUnified from './LayoutUnified.svelte';
	import LabelBalance from './LabelBalance.svelte';
	import LabelWin from './LabelWin.svelte';
	import LabelBet from './LabelBet.svelte';
	import ButtonGameRules from './ButtonGameRules.svelte';
	import ButtonBuyBonus from './ButtonBuyBonus.svelte';
	import ButtonBet from './ButtonBet.svelte';
	import ButtonTurbo from './ButtonTurbo.svelte';
	import ButtonAutoSpin from './ButtonAutoSpin.svelte';
	import ButtonIncrease from './ButtonIncrease.svelte';
	import ButtonDecrease from './ButtonDecrease.svelte';
	import ButtonMenu from './ButtonMenu.svelte';
	import ButtonSoundSwitch from './ButtonSoundSwitch.svelte';
	import ButtonMusicSwitch from './ButtonMusicSwitch.svelte';

	type Props = {
		gameName: Snippet;
		logo: Snippet;
	};

	const props: Props = $props();
</script>

<EnableSpaceHold />
<BettingControlsLockSync />

<UiFadeContainer>
	<LayoutUnified>
		{#snippet gameName()}
			{@render props.gameName()}
		{/snippet}

		{#snippet logo()}
			{@render props.logo()}
		{/snippet}

		{#snippet amountBalance(labelProps)}
			<LabelBalance {...labelProps} />
		{/snippet}

		{#snippet amountWin(labelProps)}
			<LabelWin {...labelProps} />
		{/snippet}

		{#snippet amountBet(labelProps)}
			<LabelBet {...labelProps} />
		{/snippet}

		{#snippet buttonBuyBonus(buttonProps)}
			<ButtonBuyBonus {...buttonProps} />
		{/snippet}

		{#snippet buttonBet(buttonProps)}
			<ButtonBet {...buttonProps} />
		{/snippet}

		{#snippet buttonTurbo(buttonProps)}
			<ButtonTurbo {...buttonProps} />
		{/snippet}

		{#snippet buttonAutoSpin(buttonProps)}
			<ButtonAutoSpin {...buttonProps} />
		{/snippet}

		{#snippet buttonIncrease(buttonProps)}
			<ButtonIncrease {...buttonProps} />
		{/snippet}

		{#snippet buttonDecrease(buttonProps)}
			<ButtonDecrease {...buttonProps} />
		{/snippet}

		{#snippet buttonMenu(buttonProps)}
			<ButtonMenu {...buttonProps} />
		{/snippet}

		{#snippet buttonGameRules(buttonProps)}
			<ButtonGameRules {...buttonProps} />
		{/snippet}

		{#snippet buttonSoundSwitch(buttonProps)}
			<ButtonSoundSwitch {...buttonProps} />
		{/snippet}

		{#snippet buttonMusicSwitch(buttonProps)}
			<ButtonMusicSwitch {...buttonProps} />
		{/snippet}
	</LayoutUnified>
</UiFadeContainer>
