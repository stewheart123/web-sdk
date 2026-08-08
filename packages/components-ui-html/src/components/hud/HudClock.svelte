<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

	const reactiveDate = new SvelteDate();
	const clock = $derived(
		reactiveDate.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		}),
	);

	$effect(() => {
		const interval = setInterval(() => {
			reactiveDate.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<span class="hud-clock">{clock}</span>

<style lang="scss">
	.hud-clock {
		color: #fff;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		font-size: 0.9rem;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
		pointer-events: none;
		opacity: 0.95;
	}
</style>
