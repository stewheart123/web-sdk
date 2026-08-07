<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		ariaLabel: string;
		disabled?: boolean;
		active?: boolean;
		variant?: 'circle' | 'spin' | 'buy' | 'menu' | 'text';
		size?: 'sm' | 'md' | 'lg';
		onclick?: () => void;
		children?: Snippet;
	};

	const {
		ariaLabel,
		disabled = false,
		active = false,
		variant = 'circle',
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
		border: none;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		user-select: none;
		touch-action: manipulation;
		font-family: inherit;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: #fff;
		background: linear-gradient(180deg, #3a3f4a 0%, #1c1f26 100%);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.12),
			0 4px 12px rgba(0, 0, 0, 0.35);
		transition:
			transform 0.12s ease,
			opacity 0.12s ease,
			box-shadow 0.12s ease;

		&:not(:disabled):active {
			transform: scale(0.96);
		}

		&--disabled,
		&:disabled {
			opacity: 0.45;
			cursor: not-allowed;
			transform: none;
		}

		&--active {
			box-shadow:
				inset 0 0 0 2px #5eead4,
				0 4px 12px rgba(0, 0, 0, 0.35);
		}

		&--circle {
			border-radius: 999px;
		}

		&--spin {
			border-radius: 999px;
			background: linear-gradient(180deg, #4ade80 0%, #15803d 100%);
			text-transform: uppercase;
		}

		&--buy {
			border-radius: 999px;
			background: linear-gradient(180deg, #fbbf24 0%, #b45309 100%);
			text-transform: uppercase;
			font-size: 0.65rem;
			line-height: 1.1;
			padding: 0.35rem;
			text-align: center;
		}

		&--menu {
			border-radius: 12px;
		}

		&--text {
			border-radius: 10px;
			background: rgba(20, 22, 28, 0.72);
			border: 1px solid rgba(255, 255, 255, 0.18);
			box-shadow: none;
			padding: 0.55rem 1rem;
			font-size: 0.85rem;
			width: auto;
			height: auto;
			min-width: 8rem;
		}

		&--sm:not(.hud-btn--text) {
			width: 2.5rem;
			height: 2.5rem;
			font-size: 0.65rem;
		}

		&--md:not(.hud-btn--text) {
			width: 3.25rem;
			height: 3.25rem;
			font-size: 0.7rem;
		}

		&--lg:not(.hud-btn--text) {
			width: 5.25rem;
			height: 5.25rem;
			font-size: 0.95rem;
		}

		&__label {
			max-width: 90%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
