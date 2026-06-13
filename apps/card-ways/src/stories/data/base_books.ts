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
							"name": "J"
						},
						{
							"name": "9"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "A"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					54,
					51,
					48,
					4,
					16
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
				"modifierPosition": 24,
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
		"id": 1,
		"payoutMultiplier": 80,
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
							"name": "10"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "10"
						},
						{
							"name": "10"
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
							"name": "A"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					54,
					3,
					5,
					5,
					23
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
				"modifierPosition": 23,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "10",
						"kind": 3,
						"win": 80,
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
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 5,
				"type": "finalWin",
				"amount": 80
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.8,
		"freeGameWins": 0.0
	},
	{
		"id": 2,
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
							"name": "K"
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
							"name": "8"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
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
							"name": "8"
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					34,
					8,
					23,
					58,
					38
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
		"id": 3,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "8"
						},
						{
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					6,
					46,
					25,
					30,
					9
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
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 0,
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
		"id": 4,
		"payoutMultiplier": 0,
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
							"name": "A"
						},
						{
							"name": "8"
						},
						{
							"name": "10"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "K"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						}
					],
					[
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					47,
					22,
					50,
					44,
					53
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
				"modifierPosition": 29,
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
		"id": 5,
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
							"name": "9"
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
							"name": "K"
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					9,
					42,
					37,
					30,
					48
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
		"id": 6,
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
							"name": "9"
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
							"name": "10"
						},
						{
							"name": "10"
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
							"name": "J"
						},
						{
							"name": "8"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "A"
						},
						{
							"name": "Q"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					9,
					25,
					41,
					3,
					4
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
				"modifierPosition": 3,
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
		"id": 7,
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
							"name": "K"
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
							"name": "8"
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
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					24,
					8,
					12,
					45,
					2
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
				"modifierPosition": 7,
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
		"id": 8,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "J"
						},
						{
							"name": "10"
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					23,
					17,
					8,
					11,
					55
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
		"id": 9,
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
							"name": "9"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
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
							"name": "Q"
						},
						{
							"name": "10"
						},
						{
							"name": "A"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					27,
					30,
					36,
					0,
					13
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
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 15,
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
		"id": 10,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "K"
						},
						{
							"name": "9"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "8"
						},
						{
							"name": "K"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					35,
					54,
					59,
					49,
					29
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
				"modifierPosition": 27,
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
		"id": 11,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "W",
							"wild": true
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
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
							"name": "J"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					23,
					30,
					17,
					41,
					51
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
				"modifierPosition": 27,
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
		"id": 12,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "9"
						},
						{
							"name": "Q"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "8"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					43,
					58,
					43,
					51,
					54
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
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 20,
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
		"id": 13,
		"payoutMultiplier": 3000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
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
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					44,
					48,
					41,
					33,
					15
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
				"modifierPosition": 8,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 3000,
				"wins": [
					{
						"symbol": "J",
						"kind": 5,
						"win": 3000,
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
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 1000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 3000,
				"winLevel": 7
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 3000
			},
			{
				"index": 5,
				"type": "finalWin",
				"amount": 3000
			}
		],
		"criteria": "basegame",
		"baseGameWins": 30.0,
		"freeGameWins": 0.0
	},
	{
		"id": 14,
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
							"name": "Q"
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
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "9"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					0,
					33,
					47,
					2,
					10
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
				"modifierPosition": 7,
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
		"id": 15,
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
							"name": "Q"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "Q"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					30,
					18,
					26,
					14,
					28
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
				"modifierPosition": 27,
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
		"id": 16,
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
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "8"
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
					51,
					19,
					23,
					18,
					11
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
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 22,
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
		"id": 17,
		"payoutMultiplier": 180,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "9"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "W",
							"wild": true
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
							"name": "J"
						},
						{
							"name": "9"
						},
						{
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "A"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					40,
					31,
					11,
					30,
					18
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
				"modifierPosition": 8,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 180,
				"wins": [
					{
						"symbol": "9",
						"kind": 3,
						"win": 180,
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
							"winWithoutMult": 60,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 180,
				"winLevel": 3
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 180
			},
			{
				"index": 5,
				"type": "finalWin",
				"amount": 180
			}
		],
		"criteria": "basegame",
		"baseGameWins": 1.8,
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
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "W",
							"wild": true
						},
						{
							"name": "J"
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
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "W",
							"wild": true
						},
						{
							"name": "9"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					50,
					57,
					33,
					7,
					32
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
				"modifierPosition": 11,
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
		"id": 19,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "A"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
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
							"name": "9"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					43,
					50,
					49,
					56,
					57
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
				"modifierPosition": 21,
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
		"id": 20,
		"payoutMultiplier": 1000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "Q"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					44,
					26,
					40,
					18,
					30
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
				"modifierPosition": 25,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 1000,
				"wins": [
					{
						"symbol": "K",
						"kind": 4,
						"win": 800,
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
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 400,
							"symbolMult": 0,
							"modifierMult": 2
						}
					},
					{
						"symbol": "J",
						"kind": 3,
						"win": 200,
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
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 100,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 1000,
				"winLevel": 5
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 1000
			},
			{
				"index": 5,
				"type": "finalWin",
				"amount": 1000
			}
		],
		"criteria": "basegame",
		"baseGameWins": 10.0,
		"freeGameWins": 0.0
	},
	{
		"id": 21,
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
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "8"
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
							"name": "10"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "A"
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
							"name": "K"
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
					8,
					15,
					1,
					39,
					28
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
				"modifierPosition": 3,
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
		"id": 22,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "Q"
						},
						{
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "K"
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
							"name": "Q"
						},
						{
							"name": "8"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					18,
					57,
					53,
					5,
					1
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
				"modifierPosition": 13,
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
		"id": 23,
		"payoutMultiplier": 80,
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
							"name": "Q"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
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
							"name": "K"
						},
						{
							"name": "8"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "10"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					29,
					18,
					51,
					20,
					55
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
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 20,
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
						"row": 2
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
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 16,
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
							"name": "K"
						},
						{
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
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
							"name": "J"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "9"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					31,
					47,
					54,
					28,
					43
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
							"name": "9"
						},
						{
							"name": "Q"
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
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "J"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					5,
					43,
					48,
					16,
					53
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
							"name": "J"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						},
						{
							"name": "Q"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "A"
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
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					43,
					20,
					19,
					4,
					34
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
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "8",
						"kind": 3,
						"win": 80,
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
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 40,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 14,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 15,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 16,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 17,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "10"
						},
						{
							"name": "J"
						},
						{
							"name": "K"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "10"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					42,
					57,
					2,
					59,
					13
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
				"index": 18,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 19,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 20,
				"type": "reveal",
				"board": [
					[
						{
							"name": "J"
						},
						{
							"name": "8"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
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
							"name": "10"
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
							"name": "9"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						},
						{
							"name": "Q"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					57,
					47,
					4,
					19,
					6
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
				"index": 21,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 23,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "9"
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
							"name": "8"
						},
						{
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "J"
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
					38,
					51,
					9,
					52,
					54
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
				"index": 24,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
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
							"name": "9"
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
							"name": "A"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
						},
						{
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					55,
					18,
					17,
					35,
					47
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
				"index": 27,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "K"
						},
						{
							"name": "K"
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
						},
						{
							"name": "Q"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					12,
					5,
					36,
					31,
					50
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
				"index": 30,
				"type": "setTotalWin",
				"amount": 80
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
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						},
						{
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					9,
					20,
					30,
					12,
					42
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
				"amount": 80
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
							"name": "9"
						},
						{
							"name": "A"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
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
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "J"
						},
						{
							"name": "10"
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
					50,
					8,
					30,
					32,
					16
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
				"amount": 80
			},
			{
				"index": 37,
				"type": "freeSpinEnd",
				"amount": 80,
				"winLevel": 1
			},
			{
				"index": 38,
				"type": "finalWin",
				"amount": 80
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 0.8
	},
	{
		"id": 24,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "Q"
						},
						{
							"name": "10"
						},
						{
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "K"
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
							"name": "Q"
						},
						{
							"name": "10"
						},
						{
							"name": "A"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					59,
					53,
					53,
					0,
					13
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
				"modifierPosition": 9,
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
		"id": 25,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "8"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "Q"
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
							"name": "10"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					48,
					30,
					2,
					46,
					43
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
				"modifierPosition": 5,
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
		"id": 26,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
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
							"name": "J"
						},
						{
							"name": "10"
						},
						{
							"name": "8"
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
							"name": "8"
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
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					44,
					17,
					18,
					12,
					4
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
				"modifierPosition": 26,
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
		"id": 27,
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
							"name": "K"
						},
						{
							"name": "9"
						},
						{
							"name": "10"
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
							"name": "A"
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
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
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "8"
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
					8,
					34,
					38,
					45,
					11
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
				"modifierPosition": 20,
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
		"id": 28,
		"payoutMultiplier": 800,
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
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "A"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					9,
					44,
					43,
					57,
					16
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
				"modifierPosition": 2,
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
						"reel": 2,
						"row": 2
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
				"modifierPosition": 5,
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
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "J"
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
							"name": "9"
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
							"name": "W",
							"wild": true
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
					],
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "8"
						},
						{
							"name": "K"
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
					41,
					27,
					29,
					18,
					59
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
							"name": "J"
						},
						{
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "J"
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
					9,
					20,
					47,
					55,
					54
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
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "8",
						"kind": 4,
						"win": 200,
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
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 200,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 11,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 12,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 13,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 14,
				"type": "reveal",
				"board": [
					[
						{
							"name": "J"
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
							"name": "8"
						},
						{
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "J"
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					40,
					46,
					46,
					43,
					13
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
				"index": 15,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 16,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 17,
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
							"name": "Q"
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
							"name": "A"
						},
						{
							"name": "8"
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
							"name": "K"
						},
						{
							"name": "9"
						},
						{
							"name": "10"
						}
					],
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
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "K"
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
					0,
					48,
					1,
					25,
					59
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
				"index": 18,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 19,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 20,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "Q"
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
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					35,
					8,
					27,
					9,
					18
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
				"index": 21,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 23,
				"type": "reveal",
				"board": [
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "10"
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "Q"
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
					55,
					55,
					3,
					46,
					2
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
				"index": 24,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "Q"
						},
						{
							"name": "10"
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
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "A"
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
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					19,
					7,
					0,
					40,
					33
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
				"index": 27,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 29,
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
							"name": "10"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "J"
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
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "Q"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "K"
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
							"name": "9"
						},
						{
							"name": "J"
						},
						{
							"name": "Q"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					32,
					48,
					0,
					9
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 600,
				"wins": [
					{
						"symbol": "Q",
						"kind": 5,
						"win": 600,
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
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 600,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 600,
				"winLevel": 5
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 800
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 34,
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
							"name": "K"
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
							"name": "8"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "Q"
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
					]
				],
				"paddingPositions": [
					28,
					23,
					14,
					4,
					1
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
				"index": 35,
				"type": "setTotalWin",
				"amount": 800
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 37,
				"type": "reveal",
				"board": [
					[
						{
							"name": "8"
						},
						{
							"name": "J"
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
							"name": "J"
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
					],
					[
						{
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "10"
						},
						{
							"name": "J"
						},
						{
							"name": "8"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					16,
					31,
					1,
					8,
					12
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
				"index": 38,
				"type": "setTotalWin",
				"amount": 800
			},
			{
				"index": 39,
				"type": "freeSpinEnd",
				"amount": 800,
				"winLevel": 3
			},
			{
				"index": 40,
				"type": "finalWin",
				"amount": 800
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 8.0
	},
	{
		"id": 29,
		"payoutMultiplier": 3480,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "9"
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
							"name": "A"
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
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					40,
					0,
					51,
					33,
					16
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
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 7,
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
						"reel": 0,
						"row": 1
					},
					{
						"reel": 2,
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
				"modifierPosition": 5,
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
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "J"
						},
						{
							"name": "K"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					52,
					38,
					33,
					58,
					25
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
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "K"
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
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "K"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					41,
					22,
					34,
					56,
					4
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
				"type": "winInfo",
				"totalWin": 3200,
				"wins": [
					{
						"symbol": "K",
						"kind": 5,
						"win": 3200,
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
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 1,
							"winWithoutMult": 3200,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 11,
				"type": "setWin",
				"amount": 3200,
				"winLevel": 7
			},
			{
				"index": 12,
				"type": "setTotalWin",
				"amount": 3200
			},
			{
				"index": 13,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 14,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "8"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "J"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					15,
					51,
					36,
					43,
					17
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
				"index": 15,
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "8",
						"kind": 4,
						"win": 200,
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
							"winWithoutMult": 200,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 3400
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
					[
						{
							"name": "8"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "Q"
						},
						{
							"name": "8"
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
							"name": "9"
						},
						{
							"name": "8"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "8"
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
							"name": "A"
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
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					36,
					6,
					43,
					17,
					40
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
				"index": 20,
				"type": "setTotalWin",
				"amount": 3400
			},
			{
				"index": 21,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 22,
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
							"name": "J"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "9"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "J"
						},
						{
							"name": "K"
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
							"name": "8"
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
					7,
					39,
					31,
					59,
					19
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
				"index": 23,
				"type": "setTotalWin",
				"amount": 3400
			},
			{
				"index": 24,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 25,
				"type": "reveal",
				"board": [
					[
						{
							"name": "Q"
						},
						{
							"name": "10"
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
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "K"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					19,
					56,
					19,
					16,
					32
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
				"index": 26,
				"type": "setTotalWin",
				"amount": 3400
			},
			{
				"index": 27,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 28,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "J"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "K"
						},
						{
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					15,
					44,
					20,
					7,
					49
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
				"index": 29,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "8",
						"kind": 3,
						"win": 80,
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
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 3480
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 33,
				"type": "reveal",
				"board": [
					[
						{
							"name": "8"
						},
						{
							"name": "Q"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "A"
						},
						{
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "A"
						},
						{
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					58,
					47,
					32,
					19,
					11
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
				"index": 34,
				"type": "setTotalWin",
				"amount": 3480
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 36,
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
							"name": "K"
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "J"
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
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "9"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "8"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					11,
					30,
					41,
					21,
					32
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
				"index": 37,
				"type": "setTotalWin",
				"amount": 3480
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						}
					],
					[
						{
							"name": "K"
						},
						{
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					42,
					21,
					33,
					21,
					4
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
				"index": 40,
				"type": "setTotalWin",
				"amount": 3480
			},
			{
				"index": 41,
				"type": "freeSpinEnd",
				"amount": 3480,
				"winLevel": 5
			},
			{
				"index": 42,
				"type": "finalWin",
				"amount": 3480
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 34.8
	}
];
