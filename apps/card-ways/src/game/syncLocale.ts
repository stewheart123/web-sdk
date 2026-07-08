import { stateI18nDerived, stateMeta, stateUrlDerived, stateUrlOverride, stateI18n, type Language } from 'state-shared';

import messagesMap from '../i18n/messagesMap';
import { buildCardWaysGameRuleMeta } from './gameRuleMeta';

export const getActiveLang = (): Language => stateUrlOverride.lang ?? stateUrlDerived.lang();

export const initLocale = (lang?: Language) => {
	const activeLang = lang ?? getActiveLang();
	const messages = messagesMap[activeLang] ?? messagesMap.en;
	stateI18nDerived.init(activeLang, messages);
	syncGameRuleMeta();
};

export const syncGameRuleMeta = () => {
	if (!stateI18n.i18n.locale) return;

	stateMeta.gameRuleMeta = buildCardWaysGameRuleMeta() as typeof stateMeta.gameRuleMeta;
};
