<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
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
		/** Bound so children menus can dismiss through the panel outro (not by unmounting early). */
		close?: () => void;
	};

	const PANEL_IN_MS = 420;
	const PANEL_OUT_MS = 360;
	const BACKDROP_MS = 320;

	let {
		title,
		zIndex,
		onclose,
		children,
		footer,
		close = $bindable(() => {}),
	}: Props = $props();

	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType());
	const isSheet = $derived(layoutType === 'portrait' || layoutType === 'tablet');
	const mode = $derived(isSheet ? 'sheet' : 'drawer');

	let interactReady = $state(false);
	let open = $state(true);
	let finished = $state(false);

	/** iOS-like deceleration for enter */
	const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.6);
	/** Accelerate away on dismiss so it clears the screen cleanly */
	const easeIn = (t: number) => Math.pow(t, 1.65);

	const slideIn = (node: HTMLElement) => {
		const x = isSheet ? 0 : node.offsetWidth;
		const y = isSheet ? Math.round(node.offsetHeight * 0.16) : 0;

		return {
			duration: PANEL_IN_MS,
			easing: easeOut,
			css: (t: number) => {
				const u = 1 - t;
				return `transform: translate3d(${u * x}px, ${u * y}px, 0);`;
			},
		};
	};

	const slideOut = (node: HTMLElement) => {
		const x = isSheet ? 0 : node.offsetWidth;
		const y = isSheet ? node.offsetHeight : 0;

		return {
			duration: PANEL_OUT_MS,
			easing: easeIn,
			css: (t: number) =>
				`transform: translate3d(${t * x}px, ${t * y}px, 0); opacity: ${1 - t};`,
		};
	};

	const finishClose = () => {
		if (finished) return;
		finished = true;
		onclose();
	};

	const requestClose = () => {
		if (!interactReady || !open) return;
		interactReady = false;
		open = false;
		// Fallback if outroend doesn't fire (e.g. reduced motion / interrupted transition)
		void waitForTimeout(PANEL_OUT_MS + 80).then(finishClose);
	};

	close = requestClose;

	onMount(async () => {
		await waitForTimeout(PANEL_IN_MS);
		if (open) interactReady = true;
	});
</script>

<OnHotkey hotkey="Escape" onpress={requestClose} />

{#if open}
	<!--
		Keep this root mounted (and pointer-events on) for the whole outro so the
		closing surface can't click-through to HUD controls underneath and reopen.
	-->
	<div class="hud-panel" data-mode={mode} style:z-index={zIndex}>
		<button
			type="button"
			class="hud-panel__backdrop"
			aria-label="Close"
			onclick={requestClose}
			in:fade={{ duration: BACKDROP_MS, easing: cubicOut }}
			out:fade={{ duration: PANEL_OUT_MS, easing: cubicOut }}
		></button>

		<div
			class="hud-panel__surface"
			role="dialog"
			aria-modal="true"
			aria-label={title}
			in:slideIn
			out:slideOut
			onoutroend={finishClose}
		>
			<header class="hud-panel__header">
				<h2 class="hud-panel__title">{title}</h2>
				<button
					type="button"
					class="hud-panel__close"
					data-test="close-button"
					onclick={requestClose}
				>
					×
				</button>
			</header>

			<div class="hud-panel__body scrollY scroll-micro">
				{@render children()}
			</div>

			{#if footer}
				<footer class="hud-panel__footer">
					{@render footer()}
				</footer>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.hud-panel {
		position: fixed;
		inset: 0;
		font-family: 'Noto Sans KR', system-ui, sans-serif;
		color: #fff;
		touch-action: manipulation;
		pointer-events: auto;
		overflow: hidden;

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
			background: #1a1d24ba;
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
			min-height: 0;
			pointer-events: auto;
			will-change: transform, opacity;
			backface-visibility: hidden;
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
