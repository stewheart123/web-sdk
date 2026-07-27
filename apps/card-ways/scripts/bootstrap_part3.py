from pathlib import Path
APP = Path(__file__).resolve().parent.parent / "src"

modifier_reel = r"""<script lang="ts" module>
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
	import { Tween } from 'svelte/motion';

	import {
		BitmapText,
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
	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';

	type AnimationName = 'static' | 'win' | 'reset' | 'increment';

	const PANEL_WIDTH = SYMBOL_SIZE * 0.641;
	const context = getContext();
	const scale = $derived(context.stateLayoutDerived.isStacked() ? 1.28 : 1);
	const desktopPosition = $derived({
		x: context.stateGameDerived.boardLayout().width - PANEL_WIDTH * 1.3,
		y: -SYMBOL_SIZE * 0.47,
	});
	const portraitPosition = $derived({
		x: context.stateGameDerived.boardLayout().width - PANEL_WIDTH * 1.5,
		y: -SYMBOL_SIZE * 0.55,
	});
	const position = $derived(
		context.stateLayoutDerived.isStacked() ? portraitPosition : desktopPosition,
	);

	let show = $state(false);
	let animationName = $state<AnimationName>('static');
	let multiplier = $state(1);
	let previousMultiplier = new Tween(1);
	let oncomplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		modifierReelShow: () => (show = true),
		modifierReelHide: () => (show = false),
		modifierReelUpdate: async (emitterEvent) => {
			if (emitterEvent.multiplier === 1 && multiplier !== 1) {
				animationName = 'reset';
				await waitForTimeout(300);
			}

			if (emitterEvent.multiplier > multiplier) {
				animationName = 'increment';
			}

			if (animationName !== 'static') {
				multiplier = emitterEvent.multiplier;
				await waitForResolve((resolve) => (oncomplete = resolve));
				animationName = 'static';
				previousMultiplier.set(multiplier, { duration: 0 });
			} else {
				multiplier = emitterEvent.multiplier;
				previousMultiplier.set(multiplier, { duration: 0 });
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
						<BitmapText
							anchor={0.5}
							text={`${Math.round(previousMultiplier.current)}×`}
							style={{
								fontFamily: 'cinz-yellow',
								fontSize: SYMBOL_SIZE * 5.2,
							}}
						/>
					</SpineSlot>
					<SpineSlot slotName="slot_multi_next">
						<BitmapText
							anchor={0.5}
							text={`${multiplier}×`}
							style={{
								fontFamily: 'cinz-yellow',
								fontSize: SYMBOL_SIZE * 5.2,
							}}
						/>
					</SpineSlot>
				</SpineEventEmitterProvider>
			</SpineProvider>
		</Container>
	</BoardContainer>
</FadeContainer>
"""
(APP / "components/ModifierReel.svelte").write_text(modifier_reel, encoding="utf-8")

emitter_types = (APP / "game/typesEmitterEvent.ts").read_text(encoding="utf-8")
emitter_types = emitter_types.replace(
    "import type { EmitterEventTransition } from '../components/Transition.svelte';",
    "import type { EmitterEventTransition } from '../components/Transition.svelte';\nimport type { EmitterEventModifierReel } from '../components/ModifierReel.svelte';",
)
emitter_types = emitter_types.replace(
    "\t| EmitterEventTransition;",
    "\t| EmitterEventTransition\n\t| EmitterEventModifierReel;",
)
(APP / "game/typesEmitterEvent.ts").write_text(emitter_types, encoding="utf-8")

game = (APP / "components/Game.svelte").read_text(encoding="utf-8")
game = game.replace(
    "import Transition from './Transition.svelte';",
    "import Transition from './Transition.svelte';\n\timport ModifierReel from './ModifierReel.svelte';",
)
game = game.replace(
    "<UiGameName name=\"WAYS GAME\" />",
    "<UiGameName name=\"BOOSTER BREAK WAYS\" />",
)
game = game.replace(
    "<Anticipations />\n\t\t</MainContainer>",
    "<ModifierReel />\n\t\t\t<Anticipations />\n\t\t</MainContainer>",
)
(APP / "components/Game.svelte").write_text(game, encoding="utf-8")

symbol = (APP / "components/Symbol.svelte").read_text(encoding="utf-8")
symbol = symbol.replace(
    "showWinFrame={props.state === 'win' && !['S', 'M'].includes(props.rawSymbol.name)}",
    "showWinFrame={props.state === 'win' && !['S', 'M', 'N', 'X1', 'X2', 'X3'].includes(props.rawSymbol.name)}",
)
(APP / "components/Symbol.svelte").write_text(symbol, encoding="utf-8")

story_snippet = """
<Story
\tname=\"modifierReveal\"
\targs={templateArgs({
\t\tskipLoadingScreen: true,
\t\tdata: events.modifierReveal,
\t\taction: async (data) => await playBookEvent(data, { bookEvents: [] }),
\t})}
\t{template}
/>
"""
for name in ["ModeBaseBookEvent.stories.svelte", "ModeBonusBookEvent.stories.svelte"]:
    p = APP / "stories" / name
    text = p.read_text(encoding="utf-8")
    if "modifierReveal" not in text:
        text = text.replace("<Story\n\tname=\"setTotalWin\"", story_snippet + "\n<Story\n\tname=\"setTotalWin\"")
    p.write_text(text, encoding="utf-8")

bonus = APP / "stories/ModeBonusBookEvent.stories.svelte"
text = bonus.read_text(encoding="utf-8")
if "wincap" not in text and "events.wincap" in open(APP / "stories/data/bonus_events.ts", encoding="utf-8").read():
    pass
if "name=\"wincap\"" not in text:
    wincap = """
<Story
\tname=\"wincap\"
\targs={templateArgs({
\t\tskipLoadingScreen: true,
\t\tdata: events.wincap ?? { type: 'wincap', amount: 500000 },
\t\taction: async (data) => await playBookEvent(data, { bookEvents: [] }),
\t})}
\t{template}
/>
"""
    text = text.replace("<Story\n\tname=\"finalWin\"", wincap + "\n<Story\n\tname=\"finalWin\"")
    bonus.write_text(text, encoding="utf-8")

print("components and stories updated")
