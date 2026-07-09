import { locales } from 'config-lingui';
import { mergeMessagesMaps } from 'utils-shared/i18n';
import { messagesMap as messagesMapUiPixi } from 'components-ui-pixi';
import { messagesMap as messagesMapUiHtml } from 'components-ui-html';
import type { MessagesMap } from 'utils-shared/i18n';

import gameRuleMessagesMap from '../gameRuleMessages';
import uiMessagesMap from '../uiMessages';

const messagesMapGame = Object.fromEntries(
	locales.map((locale) => [
		locale,
		{
			...gameRuleMessagesMap[locale],
			...uiMessagesMap[locale],
		},
	]),
) as unknown as MessagesMap;

const messagesMap = mergeMessagesMaps([
	messagesMapUiPixi as unknown as MessagesMap,
	messagesMapUiHtml as unknown as MessagesMap,
	messagesMapGame,
]);

export default messagesMap;
