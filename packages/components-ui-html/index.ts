import Modals from './src/components/Modals.svelte';
import GameVersion from './src/components/GameVersion.svelte';
import GameRuleContent from './src/components/GameRuleContent.svelte';
import GlobalStyle from './src/components/GlobalStyle.svelte';
import HtmlUI from './src/components/hud/HtmlUI.svelte';
import HudGameName from './src/components/hud/HudGameName.svelte';

import messagesMap from './src/i18n/messagesMap';
import { i18nDerived } from './src/i18n/i18nDerived';

export * from './src/types';
export { isBettingControlsLocked, canCancelAutoplay } from './src/bettingControlsLocked';

export {
	messagesMap,
	i18nDerived,
	Modals,
	GameVersion,
	GameRuleContent,
	GlobalStyle,
	HtmlUI,
	HudGameName,
};
