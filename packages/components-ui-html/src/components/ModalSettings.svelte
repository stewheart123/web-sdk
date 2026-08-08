<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal, stateSound } from 'state-shared';

	import HudPanel from './HudPanel.svelte';
	import ModalSettingsSound from './ModalSettingsSound.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
</script>

{#if stateModal.modal?.name === 'settings'}
	<HudPanel
		title={i18nDerived.settings}
		zIndex={zIndex.modal}
		onclose={() => (stateModal.modal = null)}
	>
		<div class="settings-wrap">
			<ModalSettingsSound bind:value={stateSound.volumeValueMaster}>
				{i18nDerived.masterVolume}
			</ModalSettingsSound>

			<ModalSettingsSound bind:value={stateSound.volumeValueMusic}>
				{i18nDerived.musicVolume}
			</ModalSettingsSound>

			<ModalSettingsSound bind:value={stateSound.volumeValueSoundEffect}>
				{i18nDerived.soundEffectVolume}
			</ModalSettingsSound>
		</div>
	</HudPanel>
{/if}

<style lang="scss">
	.settings-wrap {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
</style>
