import type { EmitterEventBoard } from '../components/Board.svelte';
import type { EmitterEventFreeSpinIntro } from '../components/FreeSpinIntro.svelte';
import type { EmitterEventFreeSpinOutro } from '../components/FreeSpinOutro.svelte';
import type { EmitterEventWin } from '../components/Win.svelte';
import type { EmitterEventSound } from '../components/Sound.svelte';
import type { EmitterEventTransition } from '../components/Transition.svelte';
import type { EmitterEventModifierReel } from '../components/ModifierReel.svelte';

/** Kept for book-handler broadcasts; counter UI now reads stateUi in HTML HUD. */
export type EmitterEventFreeSpinCounter =
	| { type: 'freeSpinCounterShow' }
	| { type: 'freeSpinCounterHide' }
	| { type: 'freeSpinCounterUpdate'; current?: number; total?: number };

export type EmitterEventGame =
	| EmitterEventBoard
	| EmitterEventWin
	| EmitterEventFreeSpinIntro
	| EmitterEventFreeSpinCounter
	| EmitterEventFreeSpinOutro
	| EmitterEventSound
	| EmitterEventTransition
	| EmitterEventModifierReel;
