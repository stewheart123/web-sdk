<script lang="ts">
	import type { Snippet } from 'svelte';
	import { stateUi } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import HudBuyBonus from './HudBuyBonus.svelte';
	import HudMenu from './HudMenu.svelte';
	import HudMenuPanel from './HudMenuPanel.svelte';
	import HudBalance from './HudBalance.svelte';
	import HudBet from './HudBet.svelte';
	import HudBetIcon from './HudBetIcon.svelte';
	import HudSpinButton from './HudSpinButton.svelte';
	import HudTurbo from './HudTurbo.svelte';
	import HudAutoSpin from './HudAutoSpin.svelte';
	import HudWinFloat from './HudWinFloat.svelte';
	import HudSoundIcon from './HudSoundIcon.svelte';
	import HudClock from './HudClock.svelte';
	import HudFreeSpinCounter from './HudFreeSpinCounter.svelte';

	type Props = {
		gameName?: Snippet;
	};

	const props: Props = $props();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
	const isBottomLayout = $derived(layoutType === 'portrait' || layoutType === 'tablet');
	const isMobileLandscape = $derived(layoutType === 'landscape');
	const chromeMode = $derived(isBottomLayout ? 'bottom' : 'rail');
</script>

<div class="hud-chrome" data-layout={layoutType} data-mode={chromeMode}>
	<!-- Top left: name + clock (+ balance on bottom layouts, then free spins) -->
	<div class="hud-chrome__top-left">
		{#if props.gameName}
			{@render props.gameName()}
		{/if}
		<HudClock />
		{#if isBottomLayout}
			<HudBalance />
		{/if}
		{#if stateUi.freeSpinCounterShow}
			<HudFreeSpinCounter />
		{/if}
	</div>

	<!-- Top right -->
	<div class="hud-chrome__top-right">
		{#if isBottomLayout}
			<div class="hud-chrome__top-actions">
				<div class="hud-chrome__menu-slot">
					<HudMenu />
					<HudMenuPanel anchor="top" />
				</div>
			</div>
			<HudBet />
		{:else}
			<div class="hud-chrome__top-actions">
				<HudSoundIcon />
				<div class="hud-chrome__menu-slot">
					<HudMenu />
					<HudMenuPanel anchor="top" />
				</div>
			</div>
		{/if}
	</div>

	<!-- Bottom left -->
	<div class="hud-chrome__bottom-left">
		{#if isBottomLayout}
			<div class="hud-chrome__left-cluster">
				<div class="hud-chrome__bonus-slot">
					<HudBuyBonus />
				</div>
				<div class="hud-chrome__left-row">
					<HudSoundIcon />
					<HudAutoSpin />
					<HudTurbo />
				</div>
			</div>
		{:else}
			<HudBalance />
		{/if}
	</div>

	<!-- Mobile landscape: bonus + auto/turbo on left (keeps right rail clear of sound/menu) -->
	{#if isMobileLandscape}
		<div class="hud-chrome__left-controls">
			<HudBuyBonus />
			<div class="hud-chrome__rail-pair">
				<HudAutoSpin />
				<HudTurbo />
			</div>
		</div>
	{/if}

	<!-- Bottom right -->
	<div class="hud-chrome__bottom-right">
		{#if isBottomLayout}
			<HudBetIcon />
		{:else}
			<HudBet />
		{/if}
	</div>

	<!-- Portrait/tablet: centered spin -->
	{#if isBottomLayout}
		<div class="hud-chrome__bottom-center">
			<HudWinFloat />
			<HudSpinButton />
		</div>
	{/if}

	<!-- Landscape/desktop: right rail -->
	{#if !isBottomLayout}
		<div class="hud-chrome__right-rail">
			{#if !isMobileLandscape}
				<HudBuyBonus />
				<div class="hud-chrome__rail-pair">
					<HudAutoSpin />
					<HudTurbo />
				</div>
			{/if}
			<HudBetIcon />
			<div class="hud-chrome__rail-spin">
				<HudWinFloat />
				<HudSpinButton />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.hud-chrome {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		padding: max(0.65rem, env(safe-area-inset-top)) max(0.85rem, env(safe-area-inset-right))
			max(0.75rem, env(safe-area-inset-bottom)) max(0.85rem, env(safe-area-inset-left));

		&::before {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: min(28vh, 12rem);
			background: linear-gradient(
				to top,
				rgba(0, 0, 0, 0.5) 0%,
				rgba(0, 0, 0, 0.22) 45%,
				rgba(0, 0, 0, 0) 100%
			);
			pointer-events: none;
			z-index: 0;
		}

		&__top-left,
		&__top-right,
		&__bottom-left,
		&__bottom-right,
		&__bottom-center,
		&__left-controls,
		&__right-rail {
			position: absolute;
			pointer-events: none;
			z-index: 1;

			:global(button),
			:global(.hud-label) {
				pointer-events: auto;
			}
		}

		&__top-left {
			top: max(0.65rem, env(safe-area-inset-top));
			left: max(0.85rem, env(safe-area-inset-left));
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
			pointer-events: none;
		}

		&__top-right {
			top: max(0.65rem, env(safe-area-inset-top));
			right: max(0.85rem, env(safe-area-inset-right));
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 0.2rem;
			/* Above rail/bonus so the open menu (SFX/music/info) is not covered */
			z-index: 5;
		}

		&__top-actions {
			display: flex;
			align-items: center;
			gap: 0.55rem;
			pointer-events: auto;
		}

		&__bottom-left {
			bottom: max(0.75rem, env(safe-area-inset-bottom));
			left: max(0.85rem, env(safe-area-inset-left));
		}

		&__bottom-right {
			bottom: max(0.75rem, env(safe-area-inset-bottom));
			right: max(0.85rem, env(safe-area-inset-right));
		}

		&__bottom-center {
			bottom: max(0.55rem, env(safe-area-inset-bottom));
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.35rem;
			pointer-events: auto;
		}

		&__left-cluster {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.45rem;
			pointer-events: auto;
		}

		&__bonus-slot {
			margin-left: 0.15rem;
		}

		&__left-row {
			display: flex;
			align-items: center;
			gap: 0.45rem;
		}

		&__menu-slot {
			position: relative;
			pointer-events: auto;
		}

		&__left-controls {
			left: max(0.85rem, env(safe-area-inset-left));
			bottom: max(4.5rem, calc(env(safe-area-inset-bottom) + 3.5rem));
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.55rem;
			pointer-events: auto;

			:global(.hud-btn--md) {
				width: 3.35rem;
				height: 3.35rem;
				font-size: 1.4rem;
			}
		}

		&__right-rail {
			top: 50%;
			right: max(0.75rem, env(safe-area-inset-right));
			transform: translateY(-50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.85rem;
			pointer-events: auto;
		}

		&__rail-pair {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.4rem;
		}

		&__rail-spin {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.35rem;
			margin-top: 1.15rem;
		}

		&[data-mode='rail'] {
			.hud-chrome__right-rail {
				top: auto;
				bottom: max(4.5rem, calc(env(safe-area-inset-bottom) + 3.5rem));
				transform: none;
			}

			.hud-chrome__rail-spin :global(.hud-btn--lg) {
				width: 6rem;
				height: 6rem;
				font-size: 3rem;
			}
		}

		&[data-layout='portrait'],
		&[data-layout='tablet'] {
			.hud-chrome__bottom-center :global(.hud-btn--lg) {
				width: 6.35rem;
				height: 6.35rem;
				font-size: 2.5rem;
			}
		}
	}
</style>
