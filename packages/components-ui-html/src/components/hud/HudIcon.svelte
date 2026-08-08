<script lang="ts" module>
	export type HudIconName =
		| 'spin'
		| 'stop'
		| 'auto'
		| 'turbo'
		| 'bonus'
		| 'bet'
		| 'menu'
		| 'sound'
		| 'soundOff'
		| 'music';
</script>

<script lang="ts">
	type Props = {
		name: HudIconName;
	};

	const props: Props = $props();
</script>

<span class="hud-icon" aria-hidden="true">
	{#if props.name === 'spin'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
			/>
			<path stroke-linecap="round" stroke-linejoin="round" d="M21 3v5h-5" />
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
			/>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H3v5" />
		</svg>
	{:else if props.name === 'stop'}
		<svg viewBox="0 0 24 24" fill="currentColor">
			<rect x="7" y="7" width="10" height="10" rx="1.5" />
		</svg>
	{:else if props.name === 'auto'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
			<circle cx="12" cy="12" r="8.25" />
			<path fill="currentColor" stroke="none" d="M10 8.5v7l6-3.5-6-3.5Z" />
		</svg>
	{:else if props.name === 'turbo'}
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M13.2 3.5 6 13.2h5.1L10.8 20.5 18 10.8h-5.1L13.2 3.5Z" />
		</svg>
	{:else if props.name === 'bonus'}
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path
				d="M12 3.4 14.1 9h5.9l-4.8 3.6 1.8 5.7L12 14.9 7 18.3l1.8-5.7L4 9h5.9L12 3.4Z"
			/>
		</svg>
	{:else if props.name === 'bet'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
			<ellipse cx="12" cy="7.5" rx="6.5" ry="2.75" />
			<path d="M5.5 7.5v3c0 1.5 2.9 2.75 6.5 2.75s6.5-1.25 6.5-2.75v-3" />
			<path d="M5.5 10.5v3c0 1.5 2.9 2.75 6.5 2.75s6.5-1.25 6.5-2.75v-3" />
			<path d="M5.5 13.5v3c0 1.5 2.9 2.75 6.5 2.75s6.5-1.25 6.5-2.75v-3" />
		</svg>
	{:else if props.name === 'menu'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
			<path stroke-linecap="round" d="M6 8h12M6 12h12M6 16h12" />
		</svg>
	{:else if props.name === 'sound'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
			<path
				stroke-linejoin="round"
				d="M4.5 9.5h3.2L12 6v12l-4.3-3.5H4.5v-5Z"
				fill="currentColor"
				stroke="none"
			/>
			<path stroke-linecap="round" d="M15.2 9.2a3.4 3.4 0 0 1 0 5.6" />
			<path stroke-linecap="round" d="M17.4 7a6 6 0 0 1 0 10" />
		</svg>
	{:else if props.name === 'music'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 18V6l10-2v12" />
			<circle cx="7" cy="18" r="2.5" fill="currentColor" stroke="none" />
			<circle cx="17" cy="16" r="2.5" fill="currentColor" stroke="none" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
			<path
				stroke-linejoin="round"
				d="M4.5 9.5h3.2L12 6v12l-4.3-3.5H4.5v-5Z"
				fill="currentColor"
				stroke="none"
			/>
			<path stroke-linecap="round" d="M16 9l4 6M20 9l-4 6" />
		</svg>
	{/if}
</span>

<style lang="scss">
	.hud-icon {
		display: inline-flex;
		width: 1.15em;
		height: 1.15em;
		align-items: center;
		justify-content: center;

		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>
