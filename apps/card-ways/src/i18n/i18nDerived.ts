import { mergeI18nDerived } from 'utils-shared/i18n';

import { i18nDerived as i18nDerivedUiPixi } from 'components-ui-pixi';
import { i18nDerived as i18nDerivedUiHtml } from 'components-ui-html';

export const i18nDerived = mergeI18nDerived(i18nDerivedUiPixi, i18nDerivedUiHtml);
