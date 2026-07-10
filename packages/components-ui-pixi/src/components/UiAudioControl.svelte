<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { DEFAULT_VOLUME_VALUE } from 'state-shared';

	import UiMenuButton from './UiMenuButton.svelte';
	import { getContext } from '../context';
	import { UI_MENU_TOGGLE_SIZES } from '../uiLayoutConfig';

	type Props = Partial<Omit<ButtonProps, 'children'>> & {
		label: string;
		value: number;
		iconKey?: string;
	};

	let { label, value = $bindable(), iconKey, anchor: _anchor, ..._buttonProps }: Props = $props();

	const context = getContext();
	const active = $derived(value > 0);

	const onToggle = () => {
		value = value === 0 ? DEFAULT_VOLUME_VALUE : 0;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
	};
</script>

<UiMenuButton
	anchor={0.5}
	sizes={UI_MENU_TOGGLE_SIZES}
	{active}
	onpress={onToggle}
	{label}
	{iconKey}
	iconTint={0xffffff}
	variant="light"
/>
