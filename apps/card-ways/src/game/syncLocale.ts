import { locales } from 'config-lingui';
import { stateI18nDerived, stateMeta, stateUrlDerived, stateUrlOverride, stateI18n, type Language } from 'state-shared';

import messagesMap from '../i18n/messagesMap';
import { buildCardWaysBetModeMeta } from './betModeMeta';
import { buildCardWaysGameRuleMeta } from './gameRuleMeta';

const SUPPORTED_LANGS = new Set<string>(locales);

export const resolveSpriteLang = (raw?: string | null): Language => {
	if (!raw) return 'en';
	if (raw === 'br') return 'pt';
	if (SUPPORTED_LANGS.has(raw)) return raw as Language;
	return 'en';
};

/** Resolve a localized sprite texture key with English fallback if the asset is missing. */
export const resolveLocalizedSpriteKey = (
	prefix: string,
	lang: Language,
	loadedAssets?: Record<string, unknown>,
): string => {
	const localized = `${prefix}_${lang}.png`;
	if (!loadedAssets || loadedAssets[localized]) return localized;
	return `${prefix}_en.png`;
};

export const getActiveLang = (): Language => stateUrlOverride.lang ?? stateUrlDerived.lang();

export const syncLocalizedMeta = () => {
	if (!stateI18n.i18n.locale) return;

	stateMeta.betModeMeta = buildCardWaysBetModeMeta();
	stateMeta.gameRuleMeta = buildCardWaysGameRuleMeta() as typeof stateMeta.gameRuleMeta;
};

export const initLocale = (lang?: Language) => {
	const activeLang = resolveSpriteLang(lang ?? getActiveLang());
	const messages = messagesMap[activeLang] ?? messagesMap.en;
	stateI18nDerived.init(activeLang, messages);
	syncLocalizedMeta();
};

/** @deprecated Use syncLocalizedMeta */
export const syncGameRuleMeta = syncLocalizedMeta;
