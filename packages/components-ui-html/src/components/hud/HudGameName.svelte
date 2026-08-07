<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';
	import { getContextLayout } from 'utils-layout';

	type Props = {
		name: string;
	};

	const props: Props = $props();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());

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

<div class="hud-game-name" data-layout={layoutType}>
	<span class="hud-game-name__clock">{clock}</span>
	<span class="hud-game-name__title">{props.name}</span>
</div>

<style lang="scss">
	.hud-game-name {
		position: fixed;
		top: 0.75rem;
		left: 0.85rem;
		z-index: 1;
		display: flex;
		align-items: baseline;
		gap: 0.4rem;
		color: #fff;
		font-weight: 600;
		pointer-events: none;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
		font-size: 0.9rem;

		&[data-layout='desktop'] {
			font-size: 1.05rem;
		}

		&__clock {
			opacity: 0.85;
		}

		&__title {
			letter-spacing: 0.04em;
		}
	}
</style>
