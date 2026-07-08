import { locales } from 'config-lingui';
import { mergeMessagesMaps } from 'utils-shared/i18n';
import { messagesMap as messagesMapUiPixi } from 'components-ui-pixi';
import { messagesMap as messagesMapUiHtml } from 'components-ui-html';
import type { MessagesMap } from 'utils-shared/i18n';
import type { Language } from 'state-shared';

import gameRuleMessagesMap from '../gameRuleMessages';

const homeTranslations: Partial<Record<Language, string>> = {
	en: 'HOME',
	zh: '主页',
	de: 'START',
	es: 'INICIO',
	fr: 'ACCUEIL',
	ja: 'ホーム',
	ko: '홈',
	ar: 'الرئيسية',
	id: 'BERANDA',
	pl: 'STRONA GŁÓWNA',
	pt: 'INÍCIO',
	ru: 'ГЛАВНАЯ',
	tr: 'ANA SAYFA',
	vi: 'TRANG CHỦ',
	fi: 'KOTI',
	hi: 'होम',
};

const messagesMapGame = Object.fromEntries(
	locales.map((locale) => [
		locale,
		{
			HOME: homeTranslations[locale] ?? homeTranslations.en ?? 'HOME',
			...gameRuleMessagesMap[locale],
		},
	]),
) as unknown as MessagesMap;

const messagesMap = mergeMessagesMaps([
	messagesMapUiPixi as unknown as MessagesMap,
	messagesMapUiHtml as unknown as MessagesMap,
	messagesMapGame,
]);

export default messagesMap;
