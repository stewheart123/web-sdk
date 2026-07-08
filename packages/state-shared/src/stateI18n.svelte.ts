import { i18n, type Messages } from '@lingui/core';
import { type Language } from './stateUrl.svelte';

export const stateI18n = $state({
	i18n,
	/** Reactive locale — updated by init() so UI labels re-render on language change. */
	locale: '' as Language | '',
});

export const stateI18nDerived = {
	init: (lang: Language, messages: Messages) => {
		stateI18n.i18n.load(lang, messages as Messages);
		stateI18n.i18n.activate(lang);
		stateI18n.locale = lang;
	},
	translate: (value: string) => stateI18n.i18n._(stateI18n.i18n.t(value)),
};