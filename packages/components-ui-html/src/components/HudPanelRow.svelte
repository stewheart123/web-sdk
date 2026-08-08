<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		selected?: boolean;
		disabled?: boolean;
		onclick?: () => void;
		children: Snippet;
	};

	const { selected = false, disabled = false, onclick, children }: Props = $props();
</script>

<button
	type="button"
	class="hud-panel-row"
	class:hud-panel-row--selected={selected}
	{disabled}
	{onclick}
>
	{@render children()}
</button>

<style lang="scss">
	.hud-panel-row {
		appearance: none;
		width: 100%;
		border: none;
		border-radius: 0.55rem;
		padding: 0.85rem 1rem;
		background: #12151cd4;
		color: #fff;
		font: inherit;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		cursor: pointer;
		border: 1px solid #ffffff30;

		&:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}

		&--selected {
			background: #fff;
			color: #111;
		}
	}
</style>
