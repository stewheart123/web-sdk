<script lang="ts">
	import type { Snippet } from 'svelte';
	import { EnableSpaceHold } from 'components-shared';

	import BettingControlsLockSync from './BettingControlsLockSync.svelte';
	import ReplayStateSync from './ReplayStateSync.svelte';
	import HudFade from './HudFade.svelte';
	import HudBet from './HudBet.svelte';
	import HudWin from './HudWin.svelte';
	import HudMenu from './HudMenu.svelte';
	import HudMenuPanel from './HudMenuPanel.svelte';

	type Props = {
		gameName?: Snippet;
	};

	const props: Props = $props();
</script>

<EnableSpaceHold />
<BettingControlsLockSync />
<ReplayStateSync />

{#if props.gameName}
	{@render props.gameName()}
{/if}

<HudFade>
	<div class="hud-replay-chrome">
		<div class="hud-replay-chrome__labels">
			<HudWin />
			<HudBet />
		</div>
		<div class="hud-replay-chrome__menu">
			<HudMenu />
			<HudMenuPanel />
		</div>
	</div>
</HudFade>

<style lang="scss">
	.hud-replay-chrome {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		pointer-events: none;
		padding: 0.75rem 0.85rem max(0.85rem, env(safe-area-inset-bottom));
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;

		&__labels {
			pointer-events: auto;
			display: flex;
			flex-direction: column;
			gap: 0.35rem;
			padding: 0.55rem 0.75rem;
			border-radius: 1rem;
			background: rgba(12, 14, 18, 0.75);
			border: 1px solid rgba(255, 255, 255, 0.1);
		}

		&__menu {
			pointer-events: auto;
			position: relative;
		}
	}
</style>
