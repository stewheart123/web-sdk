<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

	import { Text, REM } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';
	import { getContextLayout } from 'utils-layout';

	import type { UiLayoutType } from '../uiLayoutConfig';

	type Props = {
		name: string;
	};

	const props: Props = $props();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);

	const CHROME_FONT_REM_BY_TYPE: Record<UiLayoutType, number> = {
		desktop: 1.15,
		tablet: 1.1,
		landscape: 1,
		portrait: 1,
	};

	const fontSizeRem = $derived(CHROME_FONT_REM_BY_TYPE[layoutType]);
	const reactiveDate = new SvelteDate();
	const clock = $derived(
		reactiveDate.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		}),
	);
	const textProps = $derived({
		style: {
			fontFamily: 'Noto Sans KR',
			fontSize: REM * fontSizeRem,
			fontWeight: '600',
			lineHeight: REM * (fontSizeRem + 0.35),
			fill: WHITE,
		},
	} as const);

	let clockSizes = $state({ width: 0, height: 0 });

	$effect(() => {
		const interval = setInterval(() => {
			reactiveDate.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<Text text={clock} onresize={(value) => (clockSizes = value)} {...textProps} />
<Text text={props.name} x={clockSizes.width + 5} {...textProps} />
