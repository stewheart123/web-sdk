export default {
	"reveal": {
		"type": "reveal",
		"board": [
			[
				{
					"name": "K"
				},
				{
					"name": "Q"
				},
				{
					"name": "N",
					"non_winnable": true
				},
				{
					"name": "10"
				}
			],
			[
				{
					"name": "9"
				},
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "10"
				},
				{
					"name": "10"
				}
			],
			[
				{
					"name": "Q"
				},
				{
					"name": "10"
				},
				{
					"name": "W",
					"wild": true
				},
				{
					"name": "Q"
				}
			],
			[
				{
					"name": "K"
				},
				{
					"name": "A"
				},
				{
					"name": "9"
				},
				{
					"name": "N",
					"non_winnable": true
				}
			],
			[
				{
					"name": "N",
					"non_winnable": true
				},
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "N",
					"non_winnable": true
				},
				{
					"name": "W",
					"wild": true
				}
			]
		],
		"paddingPositions": [
			612,
			437,
			328,
			894,
			991
		],
		"gameType": "basegame",
		"anticipation": [
			0,
			0,
			0,
			0,
			0
		]
	},
	"modifierReveal": {
		"type": "modifierReveal",
		"modifier": {
			"name": "X1",
			"modifier": true,
			"multiplier": 1
		},
		"multiplier": 1,
		"modifierReelId": "MR0",
		"modifierPosition": 3,
		"persists": false
	},
	"setTotalWin": {
		"type": "setTotalWin",
		"amount": 0
	},
	"finalWin": {
		"type": "finalWin",
		"amount": 0
	},
	"freeSpinTrigger": {
		"type": "freeSpinTrigger",
		"totalFs": 10,
		"positions": [
			{
				"reel": 1,
				"row": 2
			},
			{
				"reel": 2,
				"row": 2
			},
			{
				"reel": 3,
				"row": 2
			}
		]
	},
	"updateFreeSpin": {
		"type": "updateFreeSpin",
		"amount": 0,
		"total": 10
	},
	"winInfo": {
		"type": "winInfo",
		"totalWin": 320,
		"wins": [
			{
				"symbol": "9",
				"kind": 4,
				"win": 320,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 1
					}
				],
				"meta": {
					"ways": 1,
					"globalMult": 1,
					"winWithoutMult": 160,
					"symbolMult": 0,
					"modifierMult": 2
				}
			}
		]
	},
	"setWin": {
		"type": "setWin",
		"amount": 320,
		"winLevel": 4
	},
	"freeSpinEnd": {
		"type": "freeSpinEnd",
		"amount": 560,
		"winLevel": 3
	}
};
