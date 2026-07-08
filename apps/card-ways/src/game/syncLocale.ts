import { stateI18nDerived, stateMeta, stateUrlDerived, stateUrlOverride, stateI18n, type Language } from 'state-shared';

import messagesMap from '../i18n/messagesMap';
import { buildCardWaysBetModeMeta } from './betModeMeta';
import { buildCardWaysGameRuleMeta } from './gameRuleMeta';

export const getActiveLang = (): Language => stateUrlOverride.lang ?? stateUrlDerived.lang();

export const syncLocalizedMeta = () => {
	if (!stateI18n.i18n.locale) return;

	stateMeta.betModeMeta = buildCardWaysBetModeMeta();
	stateMeta.gameRuleMeta = buildCardWaysGameRuleMeta() as typeof stateMeta.gameRuleMeta;
};

export const initLocale = (lang?: Language) => {
	const activeLang = lang ?? getActiveLang();
	const messages = messagesMap[activeLang] ?? messagesMap.en;
	stateI18nDerived.init(activeLang, messages);
	syncLocalizedMeta();
};

/** @deprecated Use syncLocalizedMeta */
export const syncGameRuleMeta = syncLocalizedMeta;
