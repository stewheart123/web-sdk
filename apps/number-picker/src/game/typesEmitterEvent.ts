export type EmitterEventWinInfo = {
	type: 'winInfo';
	data: {
		index: number;
		type: 'winInfo';
		numberRolled: number;
		totalWin: number;
	};
};

export type EmitterEventFinalWin = {
	type: 'finalWin';
	data: {
		index: number;
		type: 'finalWin';
		amount: number;
	};
};

export type EmitterEventGame = EmitterEventWinInfo | EmitterEventFinalWin;
