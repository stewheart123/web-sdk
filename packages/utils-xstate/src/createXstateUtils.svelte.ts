import { matchesState, type StateValue } from 'xstate';

import {
	STATE_RENDERING,
	STATE_IDLE,
	STATE_BET,
	STATE_AUTOBET,
	STATE_RESUME_BET,
} from './constants';

export const createXstate = () => {
	const stateXstate = $state({
		value: '' as StateValue,
	});

	const matchesXstate = (state: string) => matchesState(state, stateXstate.value);

	const isIdle = $derived(matchesState(STATE_IDLE, stateXstate.value));
	const isRendering = $derived(matchesState(STATE_RENDERING, stateXstate.value));
	const isBetting = $derived(matchesState(STATE_BET, stateXstate.value));
	const isAutoBetting = $derived(matchesState(STATE_AUTOBET, stateXstate.value));
	const isResumingBet = $derived(matchesState(STATE_RESUME_BET, stateXstate.value));
	const isPlaying = $derived(!isRendering && !isIdle);

	const stateXstateDerived = {
		matchesXstate,
		get isIdle() {
			return isIdle;
		},
		get isRendering() {
			return isRendering;
		},
		get isBetting() {
			return isBetting;
		},
		get isAutoBetting() {
			return isAutoBetting;
		},
		get isResumingBet() {
			return isResumingBet;
		},
		get isPlaying() {
			return isPlaying;
		},
	};

	return {
		stateXstate,
		stateXstateDerived,
	};
};
