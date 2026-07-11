<script lang="ts">
	import { Container } from 'pixi-svelte';
	import type { ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import UiCircularButton from './UiCircularButton.svelte';
	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import { getContext } from '../context';
	import { canCancelAutoplay, isBettingControlsLocked } from '../bettingControlsLocked';
	import { UI_BASE_SIZE } from '../constants';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const controlsLocked = $derived(isBettingControlsLocked(context.stateXstateDerived.isIdle));
	const disabled = $derived(
		(controlsLocked && !canCancelAutoplay()) ||
			(!stateBetDerived.isBetCostAvailable() && !canCancelAutoplay()),
	);
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
</script>

<ButtonBetProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="Space" {disabled} {onpress} />
		<UiCircularButton
			{...props}
			skin="spin"
			{sizes}
			{onpress}
			{disabled}
			active={false}
			fallbackText={['spin_default', 'spin_disabled'].includes(key)
				? i18nDerived.bet
				: i18nDerived.stop}
		/>
	{/snippet}
</ButtonBetProvider>
