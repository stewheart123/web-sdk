<script lang="ts">
	import type { Snippet } from 'svelte';
	import { waitForResolve } from 'utils-shared/wait';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import type { EmitterEventHud } from '../../types';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();

	let show = $state(true);
	let oncomplete = $state(() => {});

	eventEmitter.subscribeOnMount({
		uiShow: async () => {
			if (show === false) {
				show = true;
				await waitForResolve((resolve) => (oncomplete = resolve));
			}
		},
		uiHide: async () => {
			if (show === true) {
				show = false;
				await waitForResolve((resolve) => (oncomplete = resolve));
			}
		},
	});
</script>

<div
	class="hud-fade"
	class:hud-fade--hidden={!show}
	aria-hidden={!show}
	ontransitionend={() => oncomplete()}
>
	{@render props.children()}
</div>

<style lang="scss">
	.hud-fade {
		opacity: 1;
		pointer-events: auto;
		transition: opacity 0.25s ease;

		&--hidden {
			opacity: 0;
			pointer-events: none;
		}
	}
</style>
