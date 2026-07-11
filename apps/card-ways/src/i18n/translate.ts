import { stateI18n, stateI18nDerived, type Language } from 'state-shared';

import gameRuleMessagesEn from './gameRuleMessages/en';
import uiMessagesEn from './uiMessages/en';
import messagesMap from './messagesMap';

const englishFallback = { ...gameRuleMessagesEn, ...uiMessagesEn } as Record<string, string>;

const getActiveMessages = (): Record<string, string> => {
	const locale = (stateI18n.locale || 'en') as Language;
	return (messagesMap[locale] ?? messagesMap.en) as Record<string, string>;
};

export const translateWithValues = (
	key: string,
	values?: Record<string, string | number>,
): string => {
	let text: string;

	// Lingui strips unknown {placeholders} before we can substitute them — use raw catalog strings.
	if (values) {
		const messages = getActiveMessages();
		text = messages[key] ?? englishFallback[key] ?? key;
	} else {
		try {
			if (!stateI18n.i18n.locale) {
				throw new Error('Lingui locale not activated');
			}
			text = stateI18nDerived.translate(key);
		} catch {
			text = englishFallback[key] ?? key;
		}
	}

	if (values) {
		for (const [placeholder, value] of Object.entries(values)) {
			text = text.replaceAll(`{${placeholder}}`, String(value));
		}
	}

	return text;
};

const t = (key: string, values?: Record<string, string | number>) => translateWithValues(key, values);

export { t };
