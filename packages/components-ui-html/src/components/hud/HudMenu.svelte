<script lang="ts">
	import { stateUi } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();

	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = true;
	};
</script>

<HudButton
	ariaLabel={i18nDerived.menu}
	variant="menu"
	size="sm"
	onclick={onpress}
>
	<span>☰</span>
</HudButton>
