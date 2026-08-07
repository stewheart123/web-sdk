<script lang="ts">
	import { stateUi } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import type { EmitterEventHud } from '../../types';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();

	eventEmitter.subscribeOnMount({
		winShow: () => {
			stateUi.isWinOverlayActive = true;
		},
		winHide: () => {
			stateUi.isWinOverlayActive = false;
		},
		freeSpinIntroShow: () => {
			stateUi.isFreeSpinIntroActive = true;
		},
		freeSpinIntroHide: () => {
			stateUi.isFreeSpinIntroActive = false;
		},
		freeSpinOutroShow: () => {
			stateUi.isFreeSpinOutroActive = true;
		},
		freeSpinOutroHide: () => {
			stateUi.isFreeSpinOutroActive = false;
		},
	});
</script>
