<script lang="ts">
	import { stateUi } from 'state-shared';

	import HudSoundSwitch from './HudSoundSwitch.svelte';
	import HudMusicSwitch from './HudMusicSwitch.svelte';
	import HudGameRules from './HudGameRules.svelte';
</script>

{#if stateUi.menuOpen}
	<button
		type="button"
		class="hud-menu-overlay"
		aria-label="Close menu"
		onclick={() => (stateUi.menuOpen = false)}
	></button>

	<div class="hud-menu-panel" role="dialog" aria-modal="true">
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
		z-index: 1;
		cursor: pointer;
	}

	.hud-menu-panel {
		position: absolute;
		left: 0.75rem;
		bottom: calc(100% + 0.5rem);
		z-index: 2;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		min-width: 10rem;
		padding: 0.55rem;
		border-radius: 14px;
		background: rgba(18, 20, 26, 0.94);
		border: 1px solid rgba(255, 255, 255, 0.12);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
	}
</style>
