import _ from 'lodash';
import type { Messages } from '@lingui/core';

import type { Language } from 'state-shared';

export type MessagesMap = Record<Language, Messages>;

export const mergeMessagesMaps = (messagesMapList: MessagesMap[]) => {
	const merged = messagesMapList
		.filter(Boolean)
		.reduce((acc, current) => _.merge(acc, current), {} as MessagesMap);

	return merged;
};

/** Merge i18n getter objects without invoking getters at module load (object spread would). */
export const mergeI18nDerived = <T extends object>(...sources: object[]): T =>
	new Proxy({} as T, {
		get(_target, prop) {
			for (let index = sources.length - 1; index >= 0; index -= 1) {
				const source = sources[index];
				if (prop in source) {
					return (source as Record<PropertyKey, unknown>)[prop];
				}
			}

			return undefined;
		},
	});
