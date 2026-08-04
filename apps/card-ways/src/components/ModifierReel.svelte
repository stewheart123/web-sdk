<script lang="ts" module>
	export type EmitterEventModifierReel =
		| { type: 'modifierReelShow' }
		| { type: 'modifierReelHide' }
		| { type: 'modifierReelWin' }
		| { type: 'modifierReelOutro' }
		| {
				type: 'modifierReelUpdate';
				multiplier: number;
				modifierName: string;
				persists: boolean;
		  };
</script>

<script lang="ts">
	import { Container, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { waitForTimeout } from 'utils-shared/wait';

	import BoardContainer from './BoardContainer.svelte';
	import { getContext } from '../game/context';
	import { getModifierLayoutSettings, SCENE_LABELS } from '../game/visualLayoutConfig';
	import { resolveModifierSymbolName, type ModifierSymbolName } from '../game/utils';

	type AnimationPhase = 'INTRO' | 'IDLE' | 'OUTRO';
	type AnimationName = `${AnimationPhase}-${ModifierSymbolName}`;

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const layout = $derived(getModifierLayoutSettings(layoutType));

	let show = $state(false);
	let multiplier = $state(1);
	let modifierName = $state<ModifierSymbolName>('X1');
	let animationName = $state<AnimationName>('IDLE-X1');
	/** True while INTRO/IDLE is active (false after OUTRO completes or before first reveal). */
	let hasActiveSlab = $state(false);

	let resolveOutro: (() => void) | null = null;
	let outroPromise: Promise<void> | null = null;
	let resolveIntro: (() => void) | null = null;

	const animFor = (phase: AnimationPhase, name: ModifierSymbolName): AnimationName =>
		`${phase}-${name}`;

	const isIdle = $derived(animationName.startsWith('IDLE-'));

	const playOutro = async () => {
		if (!show || !hasActiveSlab) {
			return;
		}
		if (outroPromise) {
			await outroPromise;
			return;
		}

		outroPromise = new Promise<void>((resolve) => {
			resolveOutro = resolve;
		});
		animationName = animFor('OUTRO', modifierName);
		await outroPromise;
		outroPromise = null;
		hasActiveSlab = false;
	};

	const playWinAnimation = async () => {
		const inBonus = context.stateGame.gameType === 'freegame';

		if (!show || !hasActiveSlab) return;
		if (!inBonus && multiplier <= 1) return;

		// Placeholder until multiplier cards have dedicated win anims.
		await waitForTimeout(400);
	};

	const onTrackComplete = () => {
		if (animationName.startsWith('INTRO-')) {
			animationName = animFor('IDLE', modifierName);
			resolveIntro?.();
			resolveIntro = null;
		} else if (animationName.startsWith('OUTRO-')) {
			resolveOutro?.();
			resolveOutro = null;
		}
	};

	context.eventEmitter.subscribeOnMount({
		modifierReelShow: () => (show = true),
		modifierReelHide: () => {
			show = false;
			hasActiveSlab = false;
			outroPromise = null;
			resolveOutro = null;
			resolveIntro = null;
		},
		modifierReelWin: async () => {
			await playWinAnimation();
		},
		modifierReelOutro: async () => {
			await playOutro();
		},
		modifierReelUpdate: async (emitterEvent) => {
			if (outroPromise) {
				await outroPromise;
			}

			const nextName = resolveModifierSymbolName(
				emitterEvent.modifierName,
				emitterEvent.multiplier,
			);
			const nextMultiplier = emitterEvent.multiplier;

			multiplier = nextMultiplier;
			modifierName = nextName;
			hasActiveSlab = true;
			show = true;

			const introDone = new Promise<void>((resolve) => {
				resolveIntro = resolve;
			});
			animationName = animFor('INTRO', nextName);
			await introDone;
		},
	});
</script>

<FadeContainer {show} persistent label={SCENE_LABELS.fade.modifier}>
	<BoardContainer>
		<Container
			label={SCENE_LABELS.modifier.root}
			x={layout.x}
			y={layout.y}
			scale={layout.scale}
		>
			<SpineProvider
				label={SCENE_LABELS.modifier.spine}
				key="slab"
				anchor={0.5}
				width={layout.spineWidth}
			>
				<SpineTrack
					trackIndex={0}
					{animationName}
					loop={isIdle}
					listener={{
						complete: onTrackComplete,
					}}
				/>
			</SpineProvider>
		</Container>
	</BoardContainer>
</FadeContainer>
