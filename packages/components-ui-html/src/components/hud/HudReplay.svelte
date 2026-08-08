<script lang="ts">
	import type { Snippet } from 'svelte';
	import { EnableSpaceHold } from 'components-shared';
	import { stateUi } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import BettingControlsLockSync from './BettingControlsLockSync.svelte';
	import ReplayStateSync from './ReplayStateSync.svelte';
	import HudFade from './HudFade.svelte';
	import HudBet from './HudBet.svelte';
	import HudWin from './HudWin.svelte';
	import HudMenu from './HudMenu.svelte';
	import HudMenuPanel from './HudMenuPanel.svelte';
	import HudSoundIcon from './HudSoundIcon.svelte';
	import HudClock from './HudClock.svelte';
	import HudBalance from './HudBalance.svelte';
	import HudFreeSpinCounter from './HudFreeSpinCounter.svelte';

	type Props = {
		gameName?: Snippet;
	};

	const props: Props = $props();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
	const isBottomLayout = $derived(layoutType === 'portrait' || layoutType === 'tablet');
</script>

<EnableSpaceHold />
<BettingControlsLockSync />
<ReplayStateSync />

<HudFade>
	<div class="hud-replay" data-layout={layoutType}>
		<div class="hud-replay__top-left">
			{#if props.gameName}
				{@render props.gameName()}
			{/if}
			<HudClock />
			{#if !isBottomLayout && stateUi.freeSpinCounterShow}
				<HudFreeSpinCounter />
			{/if}
		</div>

		<div class="hud-replay__top-right">
			<div class="hud-replay__top-actions">
				<HudSoundIcon />
				<div class="hud-replay__menu">
					<HudMenu />
					<HudMenuPanel anchor="top" />
				</div>
			</div>
		</div>

		{#if isBottomLayout}
			<div class="hud-replay__top-stats">
				<div class="hud-replay__top-stats-start">
					<HudBalance />
					{#if stateUi.freeSpinCounterShow}
						<HudFreeSpinCounter />
					{/if}
				</div>
				<HudBet />
			</div>
		{/if}

		<div class="hud-replay__bottom-left">
			{#if !isBottomLayout}
				<HudBalance />
			{/if}
		</div>

		<div class="hud-replay__bottom-right">
			{#if isBottomLayout}
				<HudWin />
			{:else}
				<div class="hud-replay__labels">
					<HudWin />
					<HudBet />
				</div>
			{/if}
		</div>
	</div>
</HudFade>

<style lang="scss">
	.hud-replay {
		position: fixed;
		inset: 0;
		pointer-events: none;
		padding: 0.65rem 0.85rem;

		&__top-left,
		&__top-right,
		&__top-stats,
		&__bottom-left,
		&__bottom-right {
			position: absolute;
			pointer-events: none;

			:global(button),
			:global(.hud-label) {
				pointer-events: auto;
			}
		}

		&__top-left {
			top: 0.65rem;
			left: 0.85rem;
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
		}

		&__top-right {
			top: 0.65rem;
			right: 0.85rem;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 0.2rem;
		}

		&__top-actions {
			display: flex;
			align-items: center;
			gap: 0.55rem;
			pointer-events: auto;
		}

		&__top-stats {
			top: calc(0.65rem + 2.35rem + 0.5rem);
			left: 0.85rem;
			right: 0.85rem;
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			gap: 0.75rem;
			pointer-events: none;
		}

		&__top-stats-start {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
			min-width: 0;
		}

		&__bottom-left {
			bottom: 0.75rem;
			left: 0.85rem;
		}

		&__bottom-right {
			bottom: 0.75rem;
			right: 0.85rem;
		}

		&__menu {
			position: relative;
			pointer-events: auto;
		}

		&__labels {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 0.35rem;
		}
	}
</style>
