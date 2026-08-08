<script lang="ts">
	type Props = {
		label: string;
		value: string;
		disabled?: boolean;
		variant?: 'default' | 'win' | 'inline';
		onclick?: () => void;
	};

	const {
		label,
		value,
		disabled = false,
		variant = 'inline',
		onclick,
	}: Props = $props();

	const interactive = $derived(typeof onclick === 'function');
</script>

{#if interactive}
	<button
		type="button"
		class="hud-label hud-label--{variant}"
		class:hud-label--disabled={disabled}
		disabled={disabled}
		{onclick}
	>
		<span class="hud-label__caption">{label}:</span>
		<span class="hud-label__value">{value}</span>
	</button>
{:else}
	<div class="hud-label hud-label--{variant}">
		<span class="hud-label__caption">{label}:</span>
		<span class="hud-label__value">{value}</span>
	</div>
{/if}

<style lang="scss">
	.hud-label {
		appearance: none;
		border: none;
		background: transparent;
		color: #fff;
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
		padding: 0;
		font-family: inherit;
		text-align: left;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);

		&--inline {
			flex-direction: row;
			min-width: 0;
		}

		&--win {
			flex-direction: column;
			align-items: center;
			gap: 0.1rem;

			.hud-label__value {
				color: #fde68a;
			}
		}

		&--default {
			flex-direction: column;
			align-items: center;
		}

		&--disabled,
		&:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}

		&:not(:disabled) {
			cursor: inherit;
		}

		&:is(button):not(:disabled) {
			cursor: pointer;
		}

		&__caption {
			font-size: 0.85rem;
			font-weight: 500;
			opacity: 0.9;
			white-space: nowrap;
			text-transform: none;
			letter-spacing: 0;
		}

		&__value {
			font-size: 0.85rem;
			font-weight: 700;
			line-height: 1.1;
			white-space: nowrap;
			font-variant-numeric: tabular-nums;
		}
	}
</style>
