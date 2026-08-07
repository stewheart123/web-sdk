import { createEventEmitter } from 'utils-event-emitter';
import type { EmitterEventHotKey } from 'components-shared';
import type { EmitterEventHud, EmitterEventModal } from 'components-ui-html';

import type { EmitterEventGame } from './typesEmitterEvent';

export type EmitterEvent =
	| EmitterEventHotKey
	| EmitterEventHud
	| EmitterEventModal
	| EmitterEventGame;

export const { eventEmitter } = createEventEmitter<EmitterEvent>();
