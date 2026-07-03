<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import { getContext } from '../context';
	import { isBettingControlsLocked } from '../bettingControlsLocked';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE, UI_COLORS } from '../constants';
	import { getUiFontScale, getUiFontWeight, type UiLayoutType } from '../uiLayoutConfig';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const controlsLocked = $derived(isBettingControlsLocked(context.stateXstateDerived.isIdle));
	const disabled = $derived(controlsLocked || !stateBetDerived.isBetCostAvailable());
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
	const layoutType = $derived(context.stateLayoutDerived.layoutType() as UiLayoutType);
	const fontSize = $derived(
		UI_BASE_FONT_SIZE * 0.9 * getUiFontScale(layoutType),
	);
	const fontWeight = $derived(getUiFontWeight(layoutType));
</script>

<ButtonBetProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="Space" {disabled} {onpress} />
		<Button {...props} {sizes} {onpress} {disabled}>
			{#snippet children({ center, hovered })}
				<Container {...center}>
					<UiSprite
						key="bet"
						variant="button"
						width={sizes.width}
						height={sizes.height}
						anchor={0.5}
						{...disabled || ['spin_disabled', 'stop_disabled'].includes(key)
							? {
									backgroundColor: UI_COLORS.disabled,
									backgroundAlpha: UI_COLORS.disabledAlpha,
								}
							: {}}
					/>
					<Text
						anchor={0.5}
						text={['spin_default', 'spin_disabled'].includes(key)
							? i18nDerived.bet()
							: i18nDerived.stop()}
						style={{
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 200,
							fontFamily: 'proxima-nova',
							fontWeight,
							fontSize,
							fill: 0xffffff,
						}}
					/>
				</Container>
			{/snippet}
		</Button>
	{/snippet}
</ButtonBetProvider>
