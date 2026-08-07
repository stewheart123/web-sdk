<script lang="ts">
	import { getContextLayout } from 'utils-layout';

	import HudBuyBonus from './HudBuyBonus.svelte';
	import HudMenu from './HudMenu.svelte';
	import HudMenuPanel from './HudMenuPanel.svelte';
	import HudBalance from './HudBalance.svelte';
	import HudBet from './HudBet.svelte';
	import HudSpinButton from './HudSpinButton.svelte';
	import HudTurbo from './HudTurbo.svelte';
	import HudAutoSpin from './HudAutoSpin.svelte';
	import HudWinFloat from './HudWinFloat.svelte';

	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
</script>

<div class="hud-bar" data-layout={layoutType}>
	<div class="hud-bar__inner">
		<div class="hud-bar__menu-slot">
			<HudMenu />
			<HudMenuPanel />
		</div>

		<div class="hud-bar__buy">
			<HudBuyBonus />
		</div>

		<div class="hud-bar__cluster">
			<HudWinFloat />

			<div class="hud-bar__row">
				<HudBalance />
				<HudBet />

				<div class="hud-bar__spin">
					<HudSpinButton />
				</div>

				<div class="hud-bar__side">
					<HudTurbo />
					<HudAutoSpin />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hud-bar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		pointer-events: none;
		padding: 0.75rem 0.85rem max(0.85rem, env(safe-area-inset-bottom));

		&__inner {
			pointer-events: auto;
			display: grid;
			grid-template-columns: auto auto 1fr;
			align-items: end;
			gap: 0.65rem;
			max-width: 56rem;
			margin: 0 auto;
		}

		&__menu-slot {
			position: relative;
			align-self: end;
		}

		&__buy {
			align-self: end;
		}

		&__cluster {
			position: relative;
			justify-self: stretch;
			min-width: 0;
		}

		&__row {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 0.55rem;
			padding: 0.55rem 0.7rem;
			border-radius: 1.25rem;
			background: linear-gradient(
				180deg,
				rgba(28, 32, 40, 0.88) 0%,
				rgba(10, 12, 16, 0.92) 100%
			);
			border: 1px solid rgba(255, 255, 255, 0.1);
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
			backdrop-filter: blur(8px);
		}

		&__spin {
			flex: 0 0 auto;
			margin: 0 0.15rem;
		}

		&__side {
			display: flex;
			flex-direction: column;
			gap: 0.35rem;
		}

		&[data-layout='portrait'],
		&[data-layout='landscape'] {
			.hud-bar__inner {
				grid-template-columns: auto 1fr;
				grid-template-areas:
					'buy cluster'
					'menu cluster';
			}

			.hud-bar__buy {
				grid-area: buy;
			}

			.hud-bar__menu-slot {
				grid-area: menu;
			}

			.hud-bar__cluster {
				grid-area: cluster;
			}

			.hud-bar__row {
				justify-content: space-between;
				padding: 0.45rem 0.55rem;
			}
		}

		&[data-layout='portrait'] {
			.hud-bar__row {
				flex-wrap: wrap;
				justify-content: center;
			}
		}
	}
</style>
