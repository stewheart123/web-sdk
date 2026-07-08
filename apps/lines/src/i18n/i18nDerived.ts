import { stateI18n, stateI18nDerived } from 'state-shared';
import { mergeI18nDerived } from 'utils-shared/i18n';

import { i18nDerived as i18nDerivedUiPixi } from 'components-ui-pixi';
import { i18nDerived as i18nDerivedUiHtml } from 'components-ui-html';

const trackLocale = () => {
	void stateI18n.locale;
};

const gameDerived = {
	get home() {
		trackLocale();
		return stateI18nDerived.translate('HOME');
	},
	get notTranslated() {
		trackLocale();
		return stateI18nDerived.translate('NOT TRANSLATED');
	},
};

export const i18nDerived = mergeI18nDerived(
	i18nDerivedUiPixi,
	i18nDerivedUiHtml,
	gameDerived,
);
