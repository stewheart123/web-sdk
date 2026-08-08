<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { onMount, type Snippet } from 'svelte';
	import { OnHotkey } from 'components-shared';
	import { getContextLayout } from 'utils-layout';
	import { waitForTimeout } from 'utils-shared/wait';

	type Props = {
		title: string;
		zIndex: number;
		onclose: () => void;
		children: Snippet;
		footer?: Snippet;
	};

	const props: Props = $props();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
	const isSheet = $derived(layoutType === 'portrait' || layoutType === 'tablet');
	const mode = $derived(isSheet ? 'sheet' : 'drawer');

	let interactReady = $state(false);

	onMount(async () => {
		await waitForTimeout(280);
		interactReady = true;
	});

	const close = () => {
		if (!interactReady) return;
		props.onclose();
	};
</script>

<OnHotkey hotkey="Escape" onpress={close} />

<div class="hud-panel" class:hud-panel--ready={interactReady} data-mode={mode} style:z-index={props.zIndex}>
	<button type="button" class="hud-panel__backdrop" aria-label="Close" onclick={close} transition:fade={{ duration: 200 }}
	></button>

	<div
		class="hud-panel__surface"
		role="dialog"
		aria-modal="true"
		aria-label={props.title}
		transition:fly={{
			duration: 280,
			x: isSheet ? 0 : 48,
			y: isSheet ? 48 : 0,
			opacity: 1,
		}}
	>
		<header class="hud-panel__header">
			<h2 class="hud-panel__title">{props.title}</h2>
			<button type="button" class="hud-panel__close" data-test="close-button" onclick={close}>
				×
			</button>
		</header>

		<div class="hud-panel__body scrollY scroll-micro">
			{@render props.children()}
		</div>

		{#if props.footer}
			<footer class="hud-panel__footer">
				{@render props.footer()}
			</footer>
		{/if}
	</div>
</div>

<style lang="scss">
	.hud-panel {
		position: fixed;
		inset: 0;
		font-family: 'Noto Sans KR', system-ui, sans-serif;
		color: #fff;
		touch-action: manipulation;
		pointer-events: none;

		&--ready {
			pointer-events: auto;
		}

		&__backdrop {
			appearance: none;
			border: none;
			padding: 0;
			position: absolute;
			inset: 0;
			background: rgba(0, 0, 0, 0.45);
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			cursor: pointer;
		}

		&__surface {
			position: absolute;
			display: flex;
			flex-direction: column;
			background: #1a1d24;
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
			min-height: 0;
			pointer-events: auto;
		}

		&[data-mode='sheet'] .hud-panel__surface {
			inset: 0;
			border-radius: 0;
			width: 100%;
			height: 100%;
		}

		&[data-mode='drawer'] .hud-panel__surface {
			top: 0;
			right: 0;
			bottom: 0;
			width: min(36.5rem, 62vw);
			border-radius: 0.2rem 0 0 0.2rem;
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			padding: 1rem 1rem 0.75rem;
			flex-shrink: 0;
		}

		&__title {
			margin: 0;
			font-size: 0.95rem;
			font-weight: 600;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			color: rgba(255, 255, 255, 0.72);
		}

		&__close {
			appearance: none;
			border: none;
			background: transparent;
			color: #fff;
			font-size: 1.75rem;
			line-height: 1;
			width: 2.25rem;
			height: 2.25rem;
			cursor: pointer;
			padding: 0;
		}

		&__body {
			flex: 1 1 auto;
			min-height: 0;
			padding: 0.5rem 1rem 1rem;
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}

		&__footer {
			flex-shrink: 0;
			padding: 0.75rem 1rem max(1rem, env(safe-area-inset-bottom));
			border-top: 1px solid rgba(255, 255, 255, 0.08);
		}
	}
</style>
