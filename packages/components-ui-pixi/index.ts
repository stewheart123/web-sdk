import UI from './src/components/UI.svelte';
import UiGameName from './src/components/UiGameName.svelte';
import UiReplayPlayAgain from './src/components/UiReplayPlayAgain.svelte';

import messagesMap from './src/i18n/messagesMap';
import { i18nDerived } from './src/i18n/i18nDerived';

export * from './src/types';

export { messagesMap, i18nDerived, UI, UiGameName, UiReplayPlayAgain };
export { UI_SCENE_LABELS } from './src/uiLayoutConfig';
