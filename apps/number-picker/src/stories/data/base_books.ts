export default [
	{
		id: 1,
		payoutMultiplier: 1.0,
		events: [
			{
				index: 0,
				type: 'winInfo',
				numberRolled: 10,
				totalWin: 100,
			},
			{
				index: 1,
				type: 'finalWin',
				amount: 100,
			},
		],
		criteria: 'win',
		baseGameWins: 100,
		freeGameWins: 0,
	},
	{
		id: 2,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'winInfo',
				numberRolled: 3,
				totalWin: 0,
			},
			{
				index: 1,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'loss',
		baseGameWins: 0,
		freeGameWins: 0,
	},
];
