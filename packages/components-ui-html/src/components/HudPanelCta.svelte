<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		onclick?: () => void;
		disabled?: boolean;
		variant?: 'primary' | 'danger';
	};

	const { children, onclick, disabled = false, variant = 'danger' }: Props = $props();
</script>

<button
	type="button"
	class="hud-panel-cta hud-panel-cta--{variant}"
	data-test="confirm-button"
	{disabled}
	{onclick}
>
	{@render children()}
</button>

<style lang="scss">
	.hud-panel-cta {
		appearance: none;
		border: none;
		width: 100%;
		border-radius: 0rem;
		padding: 0.95rem 1rem;
		font: inherit;
		font-size: 1rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		cursor: pointer;
		color: #fff;

		&:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}

		&--danger {
			background: #ff1a628c;
		}

		&--primary {
			background: #2563eb;
		}
	}
</style>
