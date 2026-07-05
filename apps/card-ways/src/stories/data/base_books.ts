export default [
	{
		"id": 0,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
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
			{
				"index": 1,
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
			{
				"index": 2,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 3,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.0,
		"freeGameWins": 0.0
	},
	{
		"id": 1,
		"payoutMultiplier": 600,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
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
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "10"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "Q"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "Q"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					653,
					158,
					414,
					258,
					966
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
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
			{
				"index": 2,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 3,
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
						"row": 1
					},
					{
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 65,
				"persists": true
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "10"
						},
						{
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "A"
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
							"name": "10"
						},
						{
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					557,
					958,
					455,
					514,
					274
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 8,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 9,
				"type": "reveal",
				"board": [
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "Q"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
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
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					],
					[
						{
							"name": "9"
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
					]
				],
				"paddingPositions": [
					891,
					28,
					372,
					476,
					954
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 10,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 11,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 12,
				"type": "reveal",
				"board": [
					[
						{
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "Q"
						}
					],
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "10"
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
							"name": "9"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					],
					[
						{
							"name": "9"
						},
						{
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "9"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "J"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					389,
					433,
					913,
					905,
					538
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 13,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 14,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 15,
				"type": "reveal",
				"board": [
					[
						{
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						},
						{
							"name": "K"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "J"
						},
						{
							"name": "J"
						},
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "9"
						},
						{
							"name": "Q"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					181,
					241,
					236,
					24,
					180
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 18,
				"type": "reveal",
				"board": [
					[
						{
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "J"
						},
						{
							"name": "9"
						},
						{
							"name": "J"
						}
					],
					[
						{
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "9"
						},
						{
							"name": "A"
						},
						{
							"name": "Q"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "9"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					139,
					522,
					522,
					368,
					526
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "J"
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
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					],
					[
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						},
						{
							"name": "Q"
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
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					186,
					915,
					456,
					815,
					424
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "J"
						},
						{
							"name": "J"
						},
						{
							"name": "K"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "Q"
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
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					928,
					930,
					781,
					372,
					808
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 25,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 26,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 27,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "9"
						},
						{
							"name": "J"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "K"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "9"
						},
						{
							"name": "K"
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
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "A"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					370,
					879,
					984,
					456,
					165
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 28,
				"type": "winInfo",
				"totalWin": 600,
				"wins": [
					{
						"symbol": "9",
						"kind": 3,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 120,
							"symbolMult": 0
						}
					},
					{
						"symbol": "K",
						"kind": 4,
						"win": 480,
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
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 480,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 29,
				"type": "setWin",
				"amount": 600,
				"winLevel": 5
			},
			{
				"index": 30,
				"type": "setTotalWin",
				"amount": 600
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 32,
				"type": "reveal",
				"board": [
					[
						{
							"name": "J"
						},
						{
							"name": "10"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "10"
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
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "J"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "Q"
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
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
					409,
					732,
					756,
					472,
					670
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 33,
				"type": "setTotalWin",
				"amount": 600
			},
			{
				"index": 34,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 35,
				"type": "reveal",
				"board": [
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "A"
						},
						{
							"name": "Q"
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
							"name": "A"
						},
						{
							"name": "10"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "9"
						},
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "10"
						},
						{
							"name": "10"
						},
						{
							"name": "J"
						}
					],
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "J"
						},
						{
							"name": "10"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					501,
					285,
					947,
					510,
					512
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 36,
				"type": "setTotalWin",
				"amount": 600
			},
			{
				"index": 37,
				"type": "freeSpinEnd",
				"amount": 600,
				"winLevel": 3
			},
			{
				"index": 38,
				"type": "finalWin",
				"amount": 600
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 6.0
	},
	{
		"id": 5,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
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
							"name": "N",
							"non_winnable": true
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
							"name": "A"
						},
						{
							"name": "J"
						},
						{
							"name": "Q"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "J"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "9"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					841,
					82,
					496,
					780,
					267
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
			{
				"index": 1,
				"type": "modifierReveal",
				"modifier": {
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 18,
				"persists": false
			},
			{
				"index": 2,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 3,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0.0,
		"freeGameWins": 0.0
	},
	{
		"id": 18,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "9"
						},
						{
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "K"
						},
						{
							"name": "J"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						},
						{
							"name": "J"
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
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					803,
					916,
					532,
					123,
					523
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
			{
				"index": 1,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 44,
				"persists": false
			},
			{
				"index": 2,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 3,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0.0,
		"freeGameWins": 0.0
	},
	{
		"id": 35,
		"payoutMultiplier": 360,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "J"
						},
						{
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "9"
						},
						{
							"name": "J"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "Q"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					21,
					982,
					820,
					940,
					931
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
			{
				"index": 1,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 10,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 360,
				"wins": [
					{
						"symbol": "9",
						"kind": 3,
						"win": 360,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 120,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 360,
				"winLevel": 4
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 360
			},
			{
				"index": 5,
				"type": "finalWin",
				"amount": 360
			}
		],
		"criteria": "basegame",
		"baseGameWins": 3.6,
		"freeGameWins": 0.0
	}
];
