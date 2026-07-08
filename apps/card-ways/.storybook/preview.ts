import { preview as base } from 'config-storybook';
import { locales } from 'config-lingui';
import { stateUrlOverride, type Language } from 'state-shared';

import { initLocale } from '../src/game/syncLocale';

initLocale('en');

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
	beforeEach: async ({ globals }: { globals?: { locale?: string } }) => {
		const locale = (globals?.locale ?? 'en') as Language;
		stateUrlOverride.lang = locale;
		initLocale(locale);
	},
};

export default preview;
