import { preview as base } from 'config-storybook';
import { locales } from 'config-lingui';
import { i18n } from '@lingui/core';
import { stateUrlOverride } from 'state-shared';
import messagesMap from '../src/i18n/messagesMap';

const preview = {
	...base,
	globalTypes: {
		locale: {
			description: 'Game language',
			toolbar: {
				title: 'Language',
				icon: 'globe',
				items: locales.map((l) => ({ value: l, title: l })),
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: { ...(base as any).initialGlobals, locale: 'en' },
	beforeEach: async ({ globals }: any) => {
		const locale = globals.locale ?? 'en';
		stateUrlOverride.lang = locale;
		i18n.load(locale, (messagesMap as any)[locale] ?? {});
		i18n.activate(locale);
	},
};

export default preview;
