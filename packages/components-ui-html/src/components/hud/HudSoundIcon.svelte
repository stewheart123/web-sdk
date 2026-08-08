<script lang="ts">
	import { DEFAULT_VOLUME_VALUE, stateSound } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';
	import HudIcon from './HudIcon.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const muted = $derived(stateSound.volumeValueSoundEffect === 0);

	const onToggle = () => {
		stateSound.volumeValueSoundEffect =
			stateSound.volumeValueSoundEffect === 0 ? DEFAULT_VOLUME_VALUE : 0;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
	};
</script>

<HudButton ariaLabel={i18nDerived.sound} variant="icon" size="sm" onclick={onToggle}>
	<HudIcon name={muted ? 'soundOff' : 'sound'} />
</HudButton>
