<script lang="ts">
	import { stateUi } from 'state-shared';

	import { i18nDerived } from '../../i18n/i18nDerived';

	const value = $derived(`${stateUi.freeSpinCounterCurrent} / ${stateUi.freeSpinCounterTotal}`);
</script>

<div class="hud-fs-counter" aria-live="polite">
	<span class="hud-fs-counter__title">{i18nDerived.freeSpins}</span>
	<span class="hud-fs-counter__value">{value}</span>
</div>

<style lang="scss">
	.hud-fs-counter {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.15rem;
		margin-top: 0.35rem;
		padding: 0.45rem 0.65rem;
		border-radius: 0.55rem;
		border: 1px solid rgba(255, 255, 255, 0.18);
		background: rgba(12, 14, 20, 0.72);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
		pointer-events: none;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
	}

	.hud-fs-counter__title {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.1;
	}

	.hud-fs-counter__value {
		font-size: 1.05rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		color: #fff;
		line-height: 1.15;
		font-variant-numeric: tabular-nums;
	}
</style>
