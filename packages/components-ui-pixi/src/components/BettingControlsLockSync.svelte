<script lang="ts">
	import { stateUi } from 'state-shared';

	import { getContext } from '../context';

	const context = getContext();

	context.eventEmitter.subscribeOnMount({
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
