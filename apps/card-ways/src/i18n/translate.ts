import { stateI18n, stateI18nDerived } from 'state-shared';

import gameRuleMessagesEn from './gameRuleMessages/en';

const englishFallback = gameRuleMessagesEn as Record<string, string>;

export const translateWithValues = (
	key: string,
	values?: Record<string, string | number>,
): string => {
	let text: string;

	try {
		if (!stateI18n.i18n.locale) {
			throw new Error('Lingui locale not activated');
		}
		text = stateI18nDerived.translate(key);
	} catch {
		text = englishFallback[key] ?? key;
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
