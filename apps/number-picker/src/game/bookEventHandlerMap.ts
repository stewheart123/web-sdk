import { type BookEventHandlerMap } from 'utils-book';

import { eventEmitter } from './eventEmitter';
import type { BookEvent, BookEventOfType, BookEventContext } from './typesBookEvent';

export const bookEventHandlerMap: BookEventHandlerMap<BookEvent, BookEventContext> = {
	winInfo: async (bookEvent: BookEventOfType<'winInfo'>) => {
		await eventEmitter.broadcastAsync({ type: 'winInfo', data: bookEvent });
	},
	finalWin: async (bookEvent: BookEventOfType<'finalWin'>) => {
		await eventEmitter.broadcastAsync({ type: 'finalWin', data: bookEvent });
	},
};
