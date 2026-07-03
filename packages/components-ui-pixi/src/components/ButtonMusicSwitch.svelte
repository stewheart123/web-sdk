<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateSound } from 'state-shared';

	import UiAudioControl from './UiAudioControl.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
</script>

<UiAudioControl {...props} label={i18nDerived.music()} bind:value={stateSound.volumeValueMusic} />
