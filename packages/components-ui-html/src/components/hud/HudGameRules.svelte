<script lang="ts">
	import { stateModal, stateUi } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();

	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = false;
		stateModal.modal = { name: 'gameInfo' };
	};
</script>

<button type="button" class="hud-menu-row" onclick={onpress}>
	<span class="hud-menu-row__icon">i</span>
	<span>{i18nDerived.info}</span>
</button>

<style lang="scss">
	.hud-menu-row {
		appearance: none;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.65rem;
		border: none;
		border-radius: 10px;
		padding: 0.65rem 0.75rem;
		background: rgba(255, 255, 255, 0.06);
		color: #fff;
		font: inherit;
		font-weight: 600;
		font-size: 0.85rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		cursor: pointer;

		&__icon {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 999px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			background: rgba(0, 0, 0, 0.35);
			font-size: 0.7rem;
		}
	}
</style>
