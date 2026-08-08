<script lang="ts">
	import { stateUi } from 'state-shared';

	import HudSoundSwitch from './HudSoundSwitch.svelte';
	import HudMusicSwitch from './HudMusicSwitch.svelte';
	import HudGameRules from './HudGameRules.svelte';

	type Props = {
		anchor?: 'bottom' | 'top';
	};

	const { anchor = 'bottom' }: Props = $props();
</script>

{#if stateUi.menuOpen}
	<button
		type="button"
		class="hud-menu-overlay"
		aria-label="Close menu"
		onclick={() => (stateUi.menuOpen = false)}
	></button>

	<div class="hud-menu-panel hud-menu-panel--{anchor}" role="dialog" aria-modal="true">
		<HudSoundSwitch />
		<HudMusicSwitch />
		<HudGameRules />
	</div>
{/if}

<style lang="scss">
	.hud-menu-overlay {
		appearance: none;
		border: none;
		padding: 0;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.45);
		z-index: 4;
		cursor: pointer;
	}

	.hud-menu-panel {
		position: absolute;
		z-index: 5;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		min-width: 10rem;
		padding: 0.55rem;
		border-radius: 14px;
		background: rgba(18, 20, 26, 0.94);
		border: 1px solid rgba(255, 255, 255, 0.12);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);

		&--bottom {
			right: 0;
			bottom: calc(100% + 0.5rem);
		}

		&--top {
			right: 0;
			top: calc(100% + 0.5rem);
		}
	}
</style>
