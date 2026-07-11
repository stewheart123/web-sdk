export default {
	"reveal": {
		"type": "reveal",
		"board": [
			[
				{
					"name": "K"
				},
				{
					"name": "A"
				},
				{
					"name": "Q"
				},
				{
					"name": "J"
				}
			],
			[
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "J"
				},
				{
					"name": "K"
				},
				{
					"name": "J"
				}
			],
			[
				{
					"name": "9"
				},
				{
					"name": "N",
					"non_winnable": true
				},
				{
					"name": "10"
				},
				{
					"name": "N",
					"non_winnable": true
				}
			],
			[
				{
					"name": "K"
				},
				{
					"name": "W",
					"wild": true
				},
				{
					"name": "10"
				},
				{
					"name": "A"
				}
			],
			[
				{
					"name": "10"
				},
				{
					"name": "N",
					"non_winnable": true
				},
				{
					"name": "10"
				},
				{
					"name": "9"
				}
			]
		],
		"paddingPositions": [
			867,
			821,
			782,
			64,
			261
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
		"modifierPosition": 97,
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
	"winInfo": {
		"type": "winInfo",
		"totalWin": 130,
		"wins": [
			{
				"symbol": "10",
				"kind": 3,
				"win": 130,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 1
					}
				],
				"meta": {
					"ways": 1,
					"globalMult": 1,
					"winWithoutMult": 130,
					"symbolMult": 0
				}
			}
		]
	},
	"setWin": {
		"type": "setWin",
		"amount": 130,
		"winLevel": 3
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
				"reel": 2,
				"row": 1
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
	"freeSpinEnd": {
		"type": "freeSpinEnd",
		"amount": 810,
		"winLevel": 3
	}
};
