<script lang="ts">
	import { restartReplay } from 'components-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	const onpress = () => {
		if (!stateXstateDerived.isIdle) return;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		restartReplay({
			eventEmitter,
			isIdle: stateXstateDerived.isIdle,
		});
	};
</script>

<div class="hud-replay">
	<HudButton
		ariaLabel={i18nDerived.playAgain}
		variant="text"
		size="md"
		onclick={onpress}
	>
		<span>{i18nDerived.playAgain}</span>
	</HudButton>
</div>

<style lang="scss">
	.hud-replay {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		z-index: 1;

		:global(.hud-btn) {
			pointer-events: auto;
			width: auto;
			min-width: 10rem;
			height: auto;
		}
	}
</style>
