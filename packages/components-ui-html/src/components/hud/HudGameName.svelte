<script lang="ts">
	type Props = {
		name: string;
	};

	const props: Props = $props();
</script>

<span class="hud-game-name__title">{props.name}</span>

<style lang="scss">
	.hud-game-name__title {
		color: #fff;
		font-weight: 600;
		letter-spacing: 0.04em;
		font-size: 1rem;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
		pointer-events: none;
		white-space: nowrap;
	}
</style>
