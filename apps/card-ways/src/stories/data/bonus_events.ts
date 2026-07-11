export default {
	"reveal": {
		"type": "reveal",
		"board": [
			[
				{
					"name": "10"
				},
				{
					"name": "K"
				},
				{
					"name": "10"
				},
				{
					"name": "Q"
				}
			],
			[
				{
					"name": "10"
				},
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "A"
				},
				{
					"name": "K"
				}
			],
			[
				{
					"name": "A"
				},
				{
					"name": "Q"
				},
				{
					"name": "10"
				},
				{
					"name": "K"
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
					"name": "N",
					"non_winnable": true
				},
				{
					"name": "Q"
				}
			],
			[
				{
					"name": "10"
				},
				{
					"name": "10"
				},
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "10"
				}
			]
		],
		"paddingPositions": [
			123,
			759,
			760,
			720,
			12
		],
		"gameType": "basegame",
		"anticipation": [
			0,
			0,
			0,
			0,
			1
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
		"modifierPosition": 92,
		"persists": false
	},
	"setTotalWin": {
		"type": "setTotalWin",
		"amount": 0
	},
	"freeSpinTrigger": {
		"type": "freeSpinTrigger",
		"totalFs": 10,
		"positions": [
			{
				"reel": 1,
				"row": 1
			},
			{
				"reel": 3,
				"row": 1
			},
			{
				"reel": 4,
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
		"totalWin": 10240,
		"wins": [
			{
				"symbol": "A",
				"kind": 5,
				"win": 10240,
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 2
					}
				],
				"meta": {
					"ways": 32,
					"globalMult": 1,
					"winWithoutMult": 10240,
					"symbolMult": 0
				}
			}
		]
	},
	"setWin": {
		"type": "setWin",
		"amount": 10240,
		"winLevel": 9
	},
	"freeSpinEnd": {
		"type": "freeSpinEnd",
		"amount": 10240,
		"winLevel": 7
	},
	"finalWin": {
		"type": "finalWin",
		"amount": 10240
	}
};
