<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: Snippet;
		description: Snippet;
		price: Snippet;
		button: Snippet;
	};

	const props: Props = $props();
</script>

<div class="bonus-card">
	<div class="bonus-card__info">
		{@render props.title()}
		{@render props.description()}
		{@render props.price()}
	</div>
	<div class="bonus-card__action">
		{@render props.button()}
	</div>
</div>

<style lang="scss">
	.bonus-card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
		box-sizing: border-box;
		padding: 1rem;
		border-radius: 0.75rem;
		background: #12151c;
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.bonus-card__info {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.bonus-card__action {
		width: 100%;
	}
</style>
