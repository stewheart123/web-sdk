<script lang="ts">
	import { DEFAULT_VOLUME_VALUE, stateSound } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudIcon from './HudIcon.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const active = $derived(stateSound.volumeValueSoundEffect > 0);

	const onToggle = () => {
		stateSound.volumeValueSoundEffect =
			stateSound.volumeValueSoundEffect === 0 ? DEFAULT_VOLUME_VALUE : 0;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
	};
</script>

<button type="button" class="hud-menu-row" class:hud-menu-row--active={active} onclick={onToggle}>
	<span class="hud-menu-row__icon">
		<HudIcon name={active ? 'sound' : 'soundOff'} />
	</span>
	<span>{i18nDerived.sound}</span>
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

		&--active {
			background: rgba(94, 234, 212, 0.18);
		}

		&__icon {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 999px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			background: rgba(0, 0, 0, 0.35);
			font-size: 0.95rem;
			color: #fff;
		}
	}
</style>
