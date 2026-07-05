<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/<Symbol>',
		component: Symbol,
		args: {
			reelIndex: 0,
			row: 0,
			x: 100,
			y: 100,
			rawSymbol: { name: 'S', scatter: true },
			state: 'static',
		},
	});
</script>

<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { StoryPixiApp } from 'components-storybook';

	import Symbol from '../components/Symbol.svelte';
	import { SYMBOL_STATES } from '../game/types';
	import assets from '../game/assets';

	const BASE = 180;

	const SYMBOLS_PAYING = [
		{ name: 'A' },
		{ name: 'K' },
		{ name: 'Q' },
		{ name: 'J' },
		{ name: '10' },
		{ name: '9' },
	] as const;

	const SYMBOLS_SPECIAL = [
		{ name: 'W', wild: true },
		{ name: 'S', scatter: true },
		{ name: 'N', non_winnable: true },
		{ name: 'X1' },
		{ name: 'X2' },
		{ name: 'X3' },
	] as const;
</script>

<Story name="component">
	{#snippet template(args)}
		<StoryPixiApp {assets}>
			<Symbol {...args} oncomplete={() => console.log('complete')} />
		</StoryPixiApp>
	{/snippet}
</Story>

<Story name="symbols">
	{#snippet template()}
		<StoryPixiApp {assets}>
			<Container scale={0.5}>
				{#each SYMBOLS_PAYING as symbol, rowIndex}
					{#each SYMBOL_STATES as state, columnIndex}
						{@const x = (columnIndex + 1) * BASE}
						{@const y = (rowIndex + 1) * BASE}
						<Text {x} y={y - 100} anchor={{ x: 0.5, y: 0 }} text={`${symbol.name}: ${state}`} />
						<Symbol reelIndex={columnIndex} row={rowIndex} {x} {y} rawSymbol={symbol} {state} loop />
					{/each}
				{/each}
			</Container>

			<Container scale={0.5} x={550}>
				{#each SYMBOLS_SPECIAL as symbol, rowIndex}
					{#each SYMBOL_STATES as state, columnIndex}
						{@const x = (columnIndex + 1) * BASE}
						{@const y = (rowIndex + 1) * BASE}
						<Text {x} y={y - 100} anchor={{ x: 0.5, y: 0 }} text={`${symbol.name}: ${state}`} />
						<Symbol reelIndex={columnIndex} row={rowIndex} {x} {y} rawSymbol={symbol} {state} loop />
					{/each}
				{/each}
			</Container>
		</StoryPixiApp>
	{/snippet}
</Story>
