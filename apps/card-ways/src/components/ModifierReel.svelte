<script lang="ts" module>
	export type EmitterEventModifierReel =
		| { type: 'modifierReelShow' }
		| { type: 'modifierReelHide' }
		| {
				type: 'modifierReelUpdate';
				multiplier: number;
				modifierName: string;
				persists: boolean;
		  };
</script>

<script lang="ts">
	import {
		Container,
		SpineEventEmitterProvider,
		SpineProvider,
		SpineSlot,
		SpineTrack,
	} from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { stateBetDerived } from 'state-shared';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';

	import BoardContainer from './BoardContainer.svelte';
	import SymbolSpineMain from './SymbolSpineMain.svelte';
	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import {
		getSymbolInfo,
		resolveModifierSymbolName,
		type ModifierSymbolName,
	} from '../game/utils';

	type AnimationName = 'static' | 'win' | 'reset' | 'increment';

	const PANEL_WIDTH = SYMBOL_SIZE;
	const MODIFIER_SYMBOL_HEIGHT = SYMBOL_SIZE * 0.75;
	const context = getContext();
	const scale = $derived(context.stateLayoutDerived.isStacked() ? 1.28 : 1);
	const desktopPosition = $derived({
		x: context.stateGameDerived.boardLayout().width + PANEL_WIDTH * 1.3,
		y: +SYMBOL_SIZE * 1,
	});
	const portraitPosition = $derived({
		x: context.stateGameDerived.boardLayout().width - PANEL_WIDTH * 1.5,
		y: -SYMBOL_SIZE * 0.55,
	});
	const position = $derived(
		context.stateLayoutDerived.isStacked() ? portraitPosition : desktopPosition,
	);

	const getModifierSymbolInfo = (name: ModifierSymbolName) =>
		getSymbolInfo({ rawSymbol: { name }, state: 'static' });

	let show = $state(false);
	let animationName = $state<AnimationName>('static');
	let multiplier = $state(1);
	let modifierName = $state<ModifierSymbolName>('X1');
	let previousModifierName = $state<ModifierSymbolName>('X1');
	let oncomplete = $state(() => {});

	const previousSymbolInfo = $derived(getModifierSymbolInfo(previousModifierName));
	const currentSymbolInfo = $derived(getModifierSymbolInfo(modifierName));

	context.eventEmitter.subscribeOnMount({
		modifierReelShow: () => (show = true),
		modifierReelHide: () => (show = false),
		modifierReelUpdate: async (emitterEvent) => {
			const nextName = resolveModifierSymbolName(
				emitterEvent.modifierName,
				emitterEvent.multiplier,
			);

			if (emitterEvent.multiplier === 1 && multiplier !== 1) {
				animationName = 'reset';
				previousModifierName = modifierName;
				modifierName = nextName;
				await waitForTimeout(300);
			} else if (emitterEvent.multiplier > multiplier) {
				animationName = 'increment';
				previousModifierName = modifierName;
				modifierName = nextName;
			}

			if (animationName !== 'static') {
				multiplier = emitterEvent.multiplier;
				await waitForResolve((resolve) => (oncomplete = resolve));
				animationName = 'static';
				previousModifierName = modifierName;
			} else {
				multiplier = emitterEvent.multiplier;
				modifierName = nextName;
				previousModifierName = modifierName;
			}
		},
	});
</script>

<FadeContainer {show}>
	<BoardContainer>
		<Container {...position} {scale}>
			<SpineProvider key="globalMultiplier" width={PANEL_WIDTH}>
				<SpineTrack
					trackIndex={0}
					{animationName}
					timeScale={stateBetDerived.timeScale()}
					listener={{
						complete: () => {
							oncomplete();
						},
					}}
				/>
				<SpineEventEmitterProvider>
					<SpineSlot slotName="slot_multi">
						<SymbolSpineMain
							symbolInfo={previousSymbolInfo}
							height={MODIFIER_SYMBOL_HEIGHT}
							loop
							listener={{}}
						/>
					</SpineSlot>
					<SpineSlot slotName="slot_multi_next">
						<SymbolSpineMain
							symbolInfo={currentSymbolInfo}
							height={MODIFIER_SYMBOL_HEIGHT}
							loop
							listener={{}}
						/>
					</SpineSlot>
				</SpineEventEmitterProvider>
			</SpineProvider>
		</Container>
	</BoardContainer>
</FadeContainer>
