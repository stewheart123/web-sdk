<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
</script>

<div class="base-button-content">
	{@render props.children()}
</div>

<style lang="scss">
	.base-button-content {
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 0 0.1rem;
		box-sizing: border-box;
	}
</style>
