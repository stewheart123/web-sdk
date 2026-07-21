<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';

	import { Container, type ContainerProps } from 'pixi-svelte';

	type Props = ContainerProps & {
		show: boolean;
		persistent?: boolean;
		duration?: number;
		/** Delay before fade-in only (ms). Fade-out starts immediately. */
		delay?: number;
		oncomplete?: () => void;
	};

	const { show, persistent, duration, delay = 0, oncomplete, children, ...restProps }: Props = $props();
	const alpha = new Tween(show ? 1 : 0, { duration, delay });

	$effect(() => {
		alpha
			.set(show ? 1 : 0, { duration, delay: show ? delay : 0 })
			.then(() => oncomplete?.());
	});

	onMount(async () => {
		if (show) {
			await alpha.set(0, { duration: 0 });
			await alpha.set(1, { duration, delay });
			oncomplete?.();
		}
	});
</script>

{#if alpha.current > 0 || persistent}
	<Container {...restProps} alpha={alpha.current}>
		{@render children()}
	</Container>
{/if}
