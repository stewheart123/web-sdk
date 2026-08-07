<script lang="ts">
	type Props = {
		label: string;
		value: string;
		bordered?: boolean;
		disabled?: boolean;
		variant?: 'default' | 'win';
		onclick?: () => void;
	};

	const {
		label,
		value,
		bordered = false,
		disabled = false,
		variant = 'default',
		onclick,
	}: Props = $props();

	const interactive = $derived(typeof onclick === 'function');
</script>

{#if interactive}
	<button
		type="button"
		class="hud-label"
		class:hud-label--bordered={bordered}
		class:hud-label--win={variant === 'win'}
		class:hud-label--disabled={disabled}
		disabled={disabled}
		{onclick}
	>
		<span class="hud-label__caption">{label}</span>
		<span class="hud-label__value">{value}</span>
	</button>
{:else}
	<div
		class="hud-label"
		class:hud-label--bordered={bordered}
		class:hud-label--win={variant === 'win'}
	>
		<span class="hud-label__caption">{label}</span>
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.15rem;
		min-width: 4.5rem;
		padding: 0.35rem 0.5rem;
		font-family: inherit;
		text-align: center;

		&--bordered {
			border-radius: 10px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			background: rgba(12, 14, 18, 0.45);
			cursor: pointer;

			&:not(:disabled):hover {
				border-color: rgba(255, 255, 255, 0.4);
			}
		}

		&--win {
			.hud-label__value {
				color: #fde68a;
			}
		}

		&--disabled,
		&:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}

		&__caption {
			font-size: 0.65rem;
			font-weight: 600;
			letter-spacing: 0.06em;
			text-transform: uppercase;
			opacity: 0.75;
			white-space: nowrap;
		}

		&__value {
			font-size: 0.95rem;
			font-weight: 700;
			line-height: 1.1;
			white-space: nowrap;
			font-variant-numeric: tabular-nums;
		}
	}
</style>
