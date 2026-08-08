<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		ariaLabel: string;
		disabled?: boolean;
		active?: boolean;
		variant?: 'icon' | 'spin' | 'bonus' | 'text';
		size?: 'sm' | 'md' | 'lg';
		onclick?: () => void;
		children?: Snippet;
	};

	const {
		ariaLabel,
		disabled = false,
		active = false,
		variant = 'icon',
		size = 'md',
		onclick,
		children,
	}: Props = $props();
</script>

<button
	type="button"
	class="hud-btn hud-btn--{variant} hud-btn--{size}"
	class:hud-btn--active={active}
	class:hud-btn--disabled={disabled}
	aria-label={ariaLabel}
	disabled={disabled}
	{onclick}
>
	{#if children}
		{@render children()}
	{:else}
		<span class="hud-btn__label">{ariaLabel}</span>
	{/if}
</button>

<style lang="scss">
	.hud-btn {
		appearance: none;
		border: 1.5px solid rgba(255, 255, 255, 0.85);
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		user-select: none;
		touch-action: manipulation;
		font-family: inherit;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: #fff;
		background: transparent;
		box-shadow: none;
		transition:
			transform 0.12s ease,
			opacity 0.12s ease,
			border-color 0.12s ease,
			background 0.12s ease;

		&:not(:disabled):active {
			transform: scale(0.96);
		}

		&--disabled,
		&:disabled {
			opacity: 0.4;
			cursor: not-allowed;
			transform: none;
		}

		&--active:not(.hud-btn--bonus) {
			border-color: #fff;
			background: rgba(255, 255, 255, 0.14);
		}

		&--icon {
			border-radius: 999px;
		}

		&--spin {
			border-radius: 999px;
			border-width: 3px;
			border-color: rgba(255, 255, 255, 0.95);
		}

		&--bonus {
			border-radius: 999px;
			border-color: #f87171;
			border-width: 2px;
		}

		&--bonus.hud-btn--active {
			border-color: #f87171;
			background: rgba(248, 113, 113, 0.16);
			box-shadow: 0 0 10px rgba(248, 113, 113, 0.45);
		}

		&--text {
			border-radius: 10px;
			border: 1px solid rgba(255, 255, 255, 0.25);
			background: rgba(20, 22, 28, 0.55);
			padding: 0.55rem 1rem;
			font-size: 0.85rem;
			width: auto;
			height: auto;
			min-width: 8rem;
		}

		&--sm:not(.hud-btn--text) {
			width: 2.35rem;
			height: 2.35rem;
			font-size: 1.05rem;
		}

		&--md:not(.hud-btn--text) {
			width: 2.75rem;
			height: 2.75rem;
			font-size: 1.15rem;
		}

		&--lg:not(.hud-btn--text) {
			width: 6.5rem;
			height: 6.5rem;
			font-size: 2.6rem;
		}

		&__label {
			max-width: 90%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
