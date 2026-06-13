export default [
	{
		"id": 0,
		"payoutMultiplier": 288300,
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
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
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
					1,
					31,
					28,
					57
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
				"modifierPosition": 13,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 300,
				"wins": [
					{
						"symbol": "K",
						"kind": 3,
						"win": 300,
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
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 150,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 300,
				"winLevel": 4
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 300
			},
			{
				"index": 5,
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
						"reel": 3,
						"row": 2
					}
				]
			},
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 24,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
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
							"name": "9"
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
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "10"
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
					28,
					17,
					46,
					51,
					14
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
				"index": 9,
				"type": "setTotalWin",
				"amount": 300
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					10,
					0,
					0,
					0
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 32300
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					12,
					6,
					13,
					0
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 64300
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					15,
					17,
					7,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 96300
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					14,
					9,
					0,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 128300
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					17,
					3,
					5,
					9,
					3
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 160300
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					13,
					16,
					6,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 192300
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					16,
					12,
					18,
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 224300
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					13,
					5,
					11,
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 256300
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					11,
					2,
					14,
					16,
					3
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
				"index": 52,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 288300
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 288000,
				"winLevel": 9
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 288300
			}
		],
		"criteria": "freegame",
		"baseGameWins": 3.0,
		"freeGameWins": 2880.0
	},
	{
		"id": 1,
		"payoutMultiplier": 500000,
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
							"name": "Q"
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
					37,
					19,
					23,
					28,
					51
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
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
				"modifierPosition": 16,
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
						"reel": 1,
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
				]
			},
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 17,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					8,
					1,
					0,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					10,
					12,
					13,
					16,
					5
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					7,
					0,
					5,
					10
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					16,
					11,
					16,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					13,
					16,
					11,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					5,
					12,
					14,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 33,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					15,
					16,
					16,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 39,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 40,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					14,
					11,
					18,
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
				"index": 41,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					7,
					10,
					5,
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 48,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					9,
					9,
					16,
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
				"index": 49,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 2,
		"payoutMultiplier": 500000,
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
							"name": "J"
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
							"name": "8"
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
							"name": "S",
							"scatter": true
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
					45,
					47,
					44,
					8,
					30
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
				"modifierPosition": 17,
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
						"row": 1
					}
				]
			},
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 20,
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					4,
					16,
					12,
					0
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					5,
					18,
					1,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					15,
					19,
					12,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					18,
					14,
					4,
					11,
					3
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
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
							"name": "9"
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
							"name": "9"
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
					31,
					13,
					16,
					43,
					27
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
				"amount": 384000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					13,
					16,
					12,
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					13,
					18,
					7,
					10
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 36,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					8,
					19,
					5,
					10
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 43,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					18,
					3,
					6,
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
				"index": 44,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					2,
					15,
					15,
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 50,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 51,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 3,
		"payoutMultiplier": 256080,
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "Q"
						},
						{
							"name": "K"
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
					27,
					38,
					43,
					3,
					52
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
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 14,
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
				"modifierPosition": 9,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					2,
					1,
					14,
					8
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					10,
					4,
					6,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					14,
					8,
					5,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					10,
					17,
					6,
					10
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					3,
					45,
					14,
					17,
					48
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
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 128080
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					3,
					10,
					5,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 160080
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					11,
					2,
					9,
					10
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 192080
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
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
							"name": "8"
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
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
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
					]
				],
				"paddingPositions": [
					18,
					20,
					9,
					49,
					41
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
				"index": 42,
				"type": "setTotalWin",
				"amount": 192080
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					2,
					9,
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 224080
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					4,
					8,
					12,
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 51,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 256080
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 256080,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 256080
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2560.8
	},
	{
		"id": 4,
		"payoutMultiplier": 500000,
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
							"name": "K"
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
							"name": "Q"
						},
						{
							"name": "J"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "A"
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
					52,
					3,
					43,
					31,
					19
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
				"modifierPosition": 10,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 450,
				"wins": [
					{
						"symbol": "K",
						"kind": 3,
						"win": 450,
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
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 150,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 450,
				"winLevel": 4
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 450
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
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
						"row": 2
					}
				]
			},
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 15,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					8,
					0,
					11,
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
				"index": 9,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 64450
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
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
							"name": "8"
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
							"name": "9"
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
							"name": "8"
						},
						{
							"name": "J"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "J"
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
					50,
					26,
					23,
					24,
					37
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
				"index": 14,
				"type": "setTotalWin",
				"amount": 64450
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					1,
					5,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 128450
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
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
							"name": "K"
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
					],
					[
						{
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "J"
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
							"name": "9"
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
					]
				],
				"paddingPositions": [
					15,
					59,
					52,
					29,
					22
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
				"amount": 128450
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					8,
					14,
					3,
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
				"index": 25,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 192450
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					9,
					1,
					13,
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 256450
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					19,
					11,
					4,
					10
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 320450
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					2,
					9,
					10,
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
				"index": 40,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 384450
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					2,
					4,
					9,
					15,
					5
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 448450
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					19,
					17,
					12,
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 51,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 4.5,
		"freeGameWins": 5000
	},
	{
		"id": 5,
		"payoutMultiplier": 500000,
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
							"name": "K"
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
							"name": "A"
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
							"name": "A"
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
					52,
					41,
					26,
					8,
					43
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
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
						"row": 1
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
				"modifierPosition": 29,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					16,
					0,
					11,
					7
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					11,
					18,
					3,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					6,
					3,
					19,
					8
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					12,
					15,
					7,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					0,
					6,
					5,
					0
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					19,
					19,
					9,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					9,
					4,
					15,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 448000
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					12,
					3,
					14,
					7
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 43,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					19,
					14,
					14,
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 49,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 50,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					13,
					15,
					9,
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
				"index": 51,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 6,
		"payoutMultiplier": 500000,
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
							"name": "W",
							"wild": true
						},
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
							"name": "K"
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
					23,
					48,
					22,
					59,
					6
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
				"modifierPosition": 19,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					13,
					10,
					14,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					9,
					7,
					5,
					7
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
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
							"name": "J"
						},
						{
							"name": "Q"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					19,
					33,
					31,
					56,
					21
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
				"index": 17,
				"type": "setTotalWin",
				"amount": 128000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					19,
					2,
					3,
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
				"index": 20,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					4,
					15,
					13,
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
				"index": 25,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					17,
					18,
					10,
					10
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
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					15,
					18,
					14,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					15,
					2,
					1,
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
				"index": 40,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 448000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					9,
					12,
					11,
					0
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 46,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					5,
					19,
					3,
					15
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 51,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 52,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 53,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 7,
		"payoutMultiplier": 224580,
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
							"name": "S",
							"scatter": true
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
							"name": "K"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					37,
					15,
					31,
					28,
					44
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
				"modifierPosition": 28,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 500,
				"wins": [
					{
						"symbol": "J",
						"kind": 5,
						"win": 500,
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
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 500,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 500,
				"winLevel": 5
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 500
			},
			{
				"index": 5,
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
						"reel": 3,
						"row": 2
					}
				]
			},
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 28,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					19,
					2,
					17,
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
				"index": 9,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 32500
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					4,
					18,
					14,
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
				"index": 14,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 64500
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 18,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					17,
					11,
					13,
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
				"index": 19,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 20,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 21,
				"type": "setTotalWin",
				"amount": 96500
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 3,
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
							"name": "8"
						},
						{
							"name": "A"
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
							"name": "10"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					38,
					6,
					34,
					44,
					20
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
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
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
				"index": 25,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 26,
				"type": "setTotalWin",
				"amount": 96580
			},
			{
				"index": 27,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 28,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					16,
					19,
					6,
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
				"index": 29,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 128580
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 33,
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
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
					33,
					18,
					32,
					42,
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
				"index": 34,
				"type": "setTotalWin",
				"amount": 128580
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					17,
					7,
					11,
					7
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 160580
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					10,
					7,
					8,
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 192580
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					9,
					13,
					5,
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 224580
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
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
							"name": "J"
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
					59,
					42,
					54,
					1,
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
				"index": 52,
				"type": "setTotalWin",
				"amount": 224580
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 224080,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 224580
			}
		],
		"criteria": "freegame",
		"baseGameWins": 5.0,
		"freeGameWins": 2240.8
	},
	{
		"id": 8,
		"payoutMultiplier": 448300,
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
							"name": "J"
						},
						{
							"name": "K"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
					40,
					18,
					58,
					18,
					50
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
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
						"reel": 1,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
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
				"modifierPosition": 13,
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					6,
					12,
					8,
					10
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					0,
					13,
					1,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					4,
					0,
					7,
					13,
					3
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					3,
					18,
					6,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					4,
					17,
					0,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
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
							"name": "Q"
						},
						{
							"name": "Q"
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
							"name": "Q"
						},
						{
							"name": "A"
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
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					31,
					34,
					58,
					12,
					26
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 300,
				"wins": [
					{
						"symbol": "K",
						"kind": 3,
						"win": 300,
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
							"winWithoutMult": 150,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 300,
				"winLevel": 4
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 320300
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
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
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "Q"
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					40,
					48,
					5,
					44
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
				"amount": 320300
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					19,
					1,
					1,
					8
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 384300
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					4,
					8,
					18,
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 448300
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
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
							"name": "K"
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
							"name": "J"
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
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "Q"
						},
						{
							"name": "A"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					45,
					25,
					57,
					15,
					10
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
				"index": 50,
				"type": "setTotalWin",
				"amount": 448300
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 448300,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 448300
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 4483.0
	},
	{
		"id": 9,
		"payoutMultiplier": 500000,
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
							"name": "K"
						},
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
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
					34,
					2,
					59,
					20,
					50
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
				"modifierPosition": 4,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 400,
				"wins": [
					{
						"symbol": "A",
						"kind": 3,
						"win": 400,
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
							"winWithoutMult": 200,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 400,
				"winLevel": 4
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 400
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 11,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					4,
					3,
					3,
					14,
					5
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
				"index": 9,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 64400
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					11,
					13,
					13,
					14
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
				"index": 14,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 128400
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 18,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					4,
					19,
					16,
					5
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 20,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 21,
				"type": "setTotalWin",
				"amount": 192400
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 23,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					8,
					14,
					9,
					5,
					5
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 25,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 26,
				"type": "setTotalWin",
				"amount": 256400
			},
			{
				"index": 27,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 28,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					11,
					10,
					13,
					7
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
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 320400
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 5,
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
							"name": "J"
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
							"name": "8"
						},
						{
							"name": "A"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
							"name": "8"
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
					]
				],
				"paddingPositions": [
					45,
					2,
					21,
					57,
					20
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
				"amount": 320400
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					14,
					12,
					18,
					5
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 384400
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					7,
					16,
					8,
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 448400
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					2,
					5,
					15,
					14
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 48,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					13,
					17,
					18,
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
				"index": 52,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 54,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 55,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 4.0,
		"freeGameWins": 5000
	},
	{
		"id": 10,
		"payoutMultiplier": 500000,
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
							"name": "Q"
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					30,
					3,
					26,
					24,
					17
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
				"modifierPosition": 12,
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
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 18,
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					10,
					2,
					9,
					10
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
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
							"name": "K"
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
							"name": "Q"
						},
						{
							"name": "9"
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
					26,
					48,
					59,
					7,
					8
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
				"index": 12,
				"type": "setTotalWin",
				"amount": 96000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					0,
					1,
					14,
					15
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
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 192000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					6,
					14,
					16,
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
				"index": 20,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					13,
					12,
					3,
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
				"index": 25,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					0,
					8,
					18,
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
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					6,
					5,
					12,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 36,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					1,
					4,
					6,
					14
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 43,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					10,
					9,
					12,
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
				"index": 44,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
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
							"name": "8"
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
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "Q"
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
							"name": "K"
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
					13,
					37,
					40,
					15,
					0
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 2400,
				"wins": [
					{
						"symbol": "K",
						"kind": 4,
						"win": 2400,
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
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 800,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 50,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 51,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 11,
		"payoutMultiplier": 500000,
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
							"name": "Q"
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
							"name": "Q"
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
					16,
					33,
					15,
					7,
					43
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
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
				"modifierPosition": 25,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					0,
					12,
					13,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					13,
					1,
					12,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					17,
					7,
					5,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					13,
					8,
					15,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					16,
					14,
					11,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					14,
					15,
					15,
					7,
					5
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					11,
					5,
					6,
					7
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 448000
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					8,
					10,
					5,
					7
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 43,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					16,
					1,
					7,
					19,
					3
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 49,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 50,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					16,
					4,
					0,
					10
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
				"index": 51,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 12,
		"payoutMultiplier": 500000,
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
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "J"
						},
						{
							"name": "10"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					34,
					11,
					44,
					58,
					42
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
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
						"row": 2
					}
				]
			},
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 8,
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					19,
					8,
					12,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					7,
					18,
					7,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					2,
					13,
					14,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "10"
						},
						{
							"name": "J"
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
							"name": "K"
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
					],
					[
						{
							"name": "A"
						},
						{
							"name": "Q"
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
							"name": "Q"
						},
						{
							"name": "J"
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
							"name": "10"
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
					27,
					59,
					55,
					2,
					14
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
				"type": "winInfo",
				"totalWin": 1500,
				"wins": [
					{
						"symbol": "J",
						"kind": 5,
						"win": 1500,
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
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 500,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 1500,
				"winLevel": 6
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 289500
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "J"
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
							"name": "9"
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
					51,
					44,
					53,
					28,
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
				"index": 27,
				"type": "setTotalWin",
				"amount": 289500
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					8,
					11,
					6,
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 385500
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					19,
					7,
					15,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 481500
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					18,
					18,
					1,
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
				"index": 40,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 41,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					10,
					5,
					9,
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 48,
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
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "10"
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
					43,
					35,
					7,
					57,
					14
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
				"index": 49,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 50,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 51,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 13,
		"payoutMultiplier": 500000,
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
							"name": "10"
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
							"name": "A"
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
					17,
					19,
					50,
					8,
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					3,
					2,
					8,
					8,
					3
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"reel": 2,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
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
					47,
					26,
					7,
					43,
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
				"index": 12,
				"type": "setTotalWin",
				"amount": 64000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					15,
					5,
					17,
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
				"index": 15,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 128000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					14,
					13,
					13,
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
				"index": 20,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					15,
					12,
					7,
					14
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					2,
					18,
					4,
					15
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
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					14,
					0,
					12,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
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
							"name": "W",
							"wild": true
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
					45,
					36,
					23,
					30,
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
				"index": 40,
				"type": "winInfo",
				"totalWin": 600,
				"wins": [
					{
						"symbol": "Q",
						"kind": 4,
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
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 300,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setWin",
				"amount": 600,
				"winLevel": 5
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 384600
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					6,
					1,
					17,
					15
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 448600
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					12,
					3,
					1,
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 51,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 14,
		"payoutMultiplier": 256000,
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
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "K"
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
					39,
					33,
					29,
					20,
					23
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
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
					},
					{
						"reel": 3,
						"row": 2
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
				"modifierPosition": 27,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					7,
					9,
					16,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					13,
					15,
					2,
					14
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					14,
					18,
					10,
					14
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					15,
					0,
					6,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					0,
					9,
					16,
					15
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
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
							"name": "8"
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
							"name": "J"
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
					54,
					6,
					57,
					7,
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
				"index": 32,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
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
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "J"
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					29,
					46,
					53,
					58,
					35
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
				"amount": 160000
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 37,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					7,
					5,
					17,
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
				"index": 38,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					9,
					9,
					5,
					10
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
				"index": 43,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					10,
					14,
					2,
					8
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 256000,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 256000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2560.0
	},
	{
		"id": 15,
		"payoutMultiplier": 288000,
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
							"name": "S",
							"scatter": true
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
							"name": "J"
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
							"name": "K"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "K"
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
					36,
					9,
					44,
					19,
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
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 14,
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
						"row": 2
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					14,
					15,
					0,
					15
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					14,
					19,
					2,
					15
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					7,
					12,
					11,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					19,
					10,
					15,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					7,
					10,
					3,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					7,
					0,
					12,
					1,
					3
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					12,
					4,
					8,
					7
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					0,
					7,
					16,
					7,
					3
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
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
							"name": "9"
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
							"name": "10"
						},
						{
							"name": "Q"
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
							"name": "10"
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
					9,
					17,
					24,
					26,
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
				"index": 47,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					14,
					8,
					1,
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 51,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 288000,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 288000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2880.0
	},
	{
		"id": 16,
		"payoutMultiplier": 500000,
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
							"name": "K"
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
							"name": "A"
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
							"name": "J"
						},
						{
							"name": "10"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					52,
					57,
					47,
					8,
					42
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
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 10,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					4,
					17,
					1,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					4,
					17,
					17,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					2,
					9,
					13,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					19,
					4,
					13,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					13,
					11,
					18,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					1,
					15,
					11,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 33,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					7,
					3,
					17,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 39,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 40,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					11,
					1,
					8,
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
				"index": 41,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					19,
					17,
					17,
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 48,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					9,
					11,
					10,
					5
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
				"index": 49,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 17,
		"payoutMultiplier": 256000,
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
							"name": "K"
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
							"name": "8"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "S",
							"scatter": true
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
					47,
					23,
					51,
					21,
					24
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
				"modifierPosition": 6,
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
						"row": 1
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 4,
						"row": 1
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
				"modifierPosition": 28,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					6,
					9,
					8,
					0
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					7,
					12,
					17,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					8,
					8,
					19,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"reel": 2,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					15,
					18,
					16,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					6,
					6,
					13,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					18,
					3,
					6,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					17,
					15,
					2,
					15
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
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
							"name": "10"
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
							"name": "9"
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
					]
				],
				"paddingPositions": [
					9,
					31,
					5,
					15,
					41
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
				"index": 42,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "9"
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
							"name": "A"
						},
						{
							"name": "K"
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
					22,
					13,
					59,
					58,
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
				"index": 45,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					17,
					16,
					0,
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 256000,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 256000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2560.0
	},
	{
		"id": 18,
		"payoutMultiplier": 256150,
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
							"name": "J"
						},
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					30,
					3,
					35,
					18,
					17
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
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
				"modifierPosition": 14,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					1,
					2,
					6,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					3,
					14,
					2,
					14
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					5,
					13,
					8,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
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
							"name": "K"
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
							"name": "9"
						},
						{
							"name": "10"
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
							"name": "10"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					10,
					27,
					18,
					56,
					29
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
				"type": "winInfo",
				"totalWin": 150,
				"wins": [
					{
						"symbol": "9",
						"kind": 4,
						"win": 150,
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
							"winWithoutMult": 150,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 150,
				"winLevel": 3
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 96150
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					19,
					15,
					2,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 128150
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					0,
					12,
					19,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 160150
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					18,
					17,
					18,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 192150
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					8,
					16,
					10,
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 224150
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
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
							"name": "Q"
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
							"name": "8"
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
							"name": "J"
						},
						{
							"name": "A"
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
					17,
					41,
					54,
					13,
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
				"index": 47,
				"type": "setTotalWin",
				"amount": 224150
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					14,
					16,
					4,
					10
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 51,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 256150
			},
			{
				"index": 53,
				"type": "freeSpinEnd",
				"amount": 256150,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "finalWin",
				"amount": 256150
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2561.5
	},
	{
		"id": 19,
		"payoutMultiplier": 500000,
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
							"name": "K"
						},
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
							"name": "S",
							"scatter": true
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
					8,
					2,
					0,
					21,
					53
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
						"row": 1
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 4,
				"type": "modifierReveal",
				"modifier": {
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 6,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					10,
					13,
					2,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					12,
					2,
					6,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					3,
					2,
					6,
					8
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					9,
					8,
					5,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
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
							"name": "Q"
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
							"name": "8"
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
							"name": "9"
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
					1,
					17,
					45,
					14,
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
				"index": 27,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					7,
					1,
					0,
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					10,
					19,
					14,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 36,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					8,
					17,
					13,
					5,
					5
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 43,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					4,
					18,
					13,
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
				"index": 44,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					1,
					16,
					6,
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 50,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 51,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 20,
		"payoutMultiplier": 500000,
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
							"name": "K"
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
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
					0,
					23,
					37,
					57,
					50
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
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
						"row": 1
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
				"modifierPosition": 25,
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					1,
					13,
					13,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					17,
					15,
					3,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
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
							"name": "A"
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
							"name": "A"
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
							"name": "J"
						},
						{
							"name": "10"
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
					47,
					52,
					5,
					7,
					51
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
				"index": 17,
				"type": "setTotalWin",
				"amount": 128000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					5,
					17,
					10,
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
				"index": 20,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					1,
					15,
					7,
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
				"index": 25,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					18,
					2,
					3,
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					6,
					10,
					4,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					14,
					16,
					12,
					10
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 448000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					8,
					0,
					2,
					5
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 46,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					0,
					15,
					2,
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 51,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 52,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 53,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 21,
		"payoutMultiplier": 500000,
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
							"name": "W",
							"wild": true
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
							"name": "Q"
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
							"name": "8"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					43,
					38,
					21,
					8,
					42
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
				"modifierPosition": 17,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 450,
				"wins": [
					{
						"symbol": "K",
						"kind": 3,
						"win": 450,
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
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 150,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 450,
				"winLevel": 4
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 450
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 0,
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
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 29,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					18,
					0,
					18,
					8
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
				"index": 9,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 64450
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					5,
					3,
					18,
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
				"index": 14,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 128450
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 18,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					1,
					10,
					19,
					10
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 20,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 21,
				"type": "setTotalWin",
				"amount": 192450
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 23,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					9,
					16,
					4,
					8
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 25,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 26,
				"type": "setTotalWin",
				"amount": 256450
			},
			{
				"index": 27,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 28,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					13,
					1,
					10,
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
				"index": 29,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 320450
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 33,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					8,
					16,
					9,
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
				"index": 34,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 35,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 36,
				"type": "setTotalWin",
				"amount": 384450
			},
			{
				"index": 37,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 38,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					5,
					9,
					18,
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
				"index": 39,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 40,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 448450
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 43,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					9,
					18,
					19,
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
				"index": 44,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 45,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 48,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					16,
					13,
					2,
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
				"index": 49,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 51,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 52,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					3,
					13,
					12,
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
				"index": 53,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 4.5,
		"freeGameWins": 5000
	},
	{
		"id": 22,
		"payoutMultiplier": 224200,
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
							"name": "J"
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
							"name": "A"
						},
						{
							"name": "S",
							"scatter": true
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
					36,
					37,
					37,
					49,
					50
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
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 0,
						"row": 2
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
						"row": 1
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
				"modifierPosition": 23,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					18,
					9,
					10,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
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
							"name": "K"
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
							"name": "Q"
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
							"name": "W",
							"wild": true
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
							"name": "J"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "J"
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
					30,
					11,
					45,
					30,
					37
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
				"index": 12,
				"type": "setTotalWin",
				"amount": 32000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					5,
					5,
					17,
					10
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
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 64000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					6,
					18,
					3,
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
				"index": 20,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
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
							"name": "K"
						},
						{
							"name": "9"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "10"
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
					2,
					36,
					17,
					36,
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
				"index": 25,
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "10",
						"kind": 4,
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
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 200,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 96200
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					3,
					11,
					9,
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
				"index": 30,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 128200
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					17,
					6,
					8,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 160200
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
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
							"name": "W",
							"wild": true
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
							"name": "9"
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
					50,
					7,
					45,
					50,
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
				"index": 40,
				"type": "setTotalWin",
				"amount": 160200
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					10,
					17,
					4,
					18,
					3
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
				"index": 43,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 192200
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					14,
					1,
					1,
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 224200
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 224200,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 224200
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2242.0
	},
	{
		"id": 23,
		"payoutMultiplier": 500000,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					14,
					9,
					15,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					19,
					5,
					10,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
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
							"name": "Q"
						},
						{
							"name": "9"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
					41,
					23,
					42,
					57,
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
				"index": 17,
				"type": "setTotalWin",
				"amount": 128000
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					10,
					10,
					2,
					9,
					3
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					4,
					15,
					9,
					8
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
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					6,
					2,
					18,
					15
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
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					10,
					15,
					6,
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
				"index": 35,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 36,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					15,
					16,
					8,
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
				"index": 40,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 448000
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					7,
					2,
					4,
					8
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
				"index": 45,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 46,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 47,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 49,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					7,
					12,
					6,
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
				"index": 50,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 51,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 52,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 53,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 24,
		"payoutMultiplier": 320000,
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
							"name": "J"
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
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "A"
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
							"name": "Q"
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
					4,
					19,
					29,
					8,
					25
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
				"modifierPosition": 16,
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
						"row": 2
					},
					{
						"reel": 3,
						"row": 1
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
				"modifierPosition": 23,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					17,
					5,
					2,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					17,
					14,
					13,
					15
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					14,
					1,
					15,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					12,
					14,
					0,
					15
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					19,
					18,
					11,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					3,
					2,
					7,
					5,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					11,
					6,
					5,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					16,
					14,
					11,
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					15,
					14,
					14,
					13,
					14
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					3,
					8,
					13,
					10
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
				"index": 52,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 320000,
				"winLevel": 9
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 320000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 3200.0
	},
	{
		"id": 25,
		"payoutMultiplier": 324200,
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
							"name": "9"
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
							"name": "9"
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
							"name": "W",
							"wild": true
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
							"name": "A"
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
					15,
					57,
					47,
					21,
					49
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
				"type": "winInfo",
				"totalWin": 120,
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
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 120,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 120
			},
			{
				"index": 5,
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
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X2",
					"modifier": true,
					"multiplier": 2
				},
				"multiplier": 2,
				"modifierReelId": "MR0",
				"modifierPosition": 22,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					7,
					4,
					4,
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
				"index": 9,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 64120
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					11,
					7,
					18,
					0
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
				"index": 14,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 128120
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 18,
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
							"name": "K"
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
					47,
					18,
					54,
					34,
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
				"index": 19,
				"type": "setTotalWin",
				"amount": 128120
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
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
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "J"
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
							"name": "J"
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
					]
				],
				"paddingPositions": [
					2,
					41,
					0,
					29,
					38
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
				"amount": 128120
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					10,
					13,
					13,
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
				"index": 25,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 192120
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 29,
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
							"name": "Q"
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
							"name": "Q"
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
							"name": "Q"
						},
						{
							"name": "10"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					16,
					12,
					39,
					24,
					55
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
				"amount": 192120
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 32,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					4,
					1,
					3,
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
				"index": 33,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 34,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 35,
				"type": "setTotalWin",
				"amount": 256120
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 37,
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
							"name": "8"
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
							"name": "8"
						},
						{
							"name": "Q"
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
							"name": "Q"
						},
						{
							"name": "J"
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
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					35,
					45,
					49,
					2,
					3
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
				"index": 39,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 256200
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					11,
					19,
					2,
					17,
					10
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
				"index": 43,
				"type": "winInfo",
				"totalWin": 64000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 64000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 64000,
				"winLevel": 9
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 320200
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
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
							"name": "K"
						},
						{
							"name": "J"
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
							"name": "10"
						},
						{
							"name": "A"
						},
						{
							"name": "8"
						}
					]
				],
				"paddingPositions": [
					50,
					2,
					26,
					45,
					29
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 4000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 2000,
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
							"winWithoutMult": 1000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					},
					{
						"symbol": "J",
						"kind": 4,
						"win": 2000,
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
								"reel": 1,
								"row": 2
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
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 1,
							"winWithoutMult": 1000,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 4000,
				"winLevel": 7
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 324200
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 324080,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 324200
			}
		],
		"criteria": "freegame",
		"baseGameWins": 1.2,
		"freeGameWins": 3240.8
	},
	{
		"id": 26,
		"payoutMultiplier": 288120,
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
							"name": "9"
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
							"name": "K"
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
							"name": "Q"
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
							"name": "S",
							"scatter": true
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
					41,
					11,
					15,
					31,
					23
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
				"modifierPosition": 15,
				"persists": false
			},
			{
				"index": 2,
				"type": "winInfo",
				"totalWin": 120,
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
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 60,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 120
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 0,
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
				]
			},
			{
				"index": 6,
				"type": "modifierReveal",
				"modifier": {
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 23,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					2,
					19,
					13,
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
				"index": 9,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 32120
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					11,
					0,
					15,
					8
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
				"index": 14,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 64120
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "9"
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
					]
				],
				"paddingPositions": [
					21,
					39,
					41,
					14,
					45
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
				"amount": 64120
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					3,
					12,
					9,
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
				"index": 22,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 96120
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					2,
					5,
					14,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 128120
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					5,
					0,
					14,
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 160120
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					18,
					13,
					2,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 192120
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					14,
					11,
					0,
					11,
					5
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 224120
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					15,
					11,
					16,
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 256120
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					6,
					15,
					17,
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
				"index": 52,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 288120
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 288000,
				"winLevel": 9
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 288120
			}
		],
		"criteria": "freegame",
		"baseGameWins": 1.2,
		"freeGameWins": 2880.0
	},
	{
		"id": 27,
		"payoutMultiplier": 500000,
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
							"name": "10"
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
							"name": "8"
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
					10,
					48,
					53,
					21,
					23
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
				"modifierPosition": 19,
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
					"name": "X3",
					"modifier": true,
					"multiplier": 3
				},
				"multiplier": 3,
				"modifierReelId": "MR0",
				"modifierPosition": 0,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					2,
					3,
					13,
					10,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					16,
					8,
					19,
					7
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					14,
					4,
					6,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					8,
					2,
					16,
					17,
					8
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 384000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					13,
					5,
					6,
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
				"index": 27,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 96000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "10"
						},
						{
							"name": "J"
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
							"name": "9"
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
							"name": "9"
						},
						{
							"name": "8"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					27,
					48,
					53,
					51,
					31
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
				"index": 32,
				"type": "setTotalWin",
				"amount": 480000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					12,
					8,
					12,
					16,
					5
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
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 36,
				"type": "wincap",
				"amount": 500000
			},
			{
				"index": 37,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 39,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					18,
					6,
					17,
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
				"index": 40,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 43,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					7,
					6,
					1,
					10,
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
				"index": 44,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					3,
					15,
					4,
					15
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 96000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 96000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 500000
			},
			{
				"index": 50,
				"type": "freeSpinEnd",
				"amount": 500000,
				"winLevel": 10
			},
			{
				"index": 51,
				"type": "finalWin",
				"amount": 500000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 5000
	},
	{
		"id": 28,
		"payoutMultiplier": 256000,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					13,
					14,
					9,
					19,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					6,
					8,
					0,
					0,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					4,
					13,
					4,
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					1,
					1,
					9,
					3,
					0
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					1,
					1,
					16,
					0
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
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
							"name": "9"
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
							"name": "A"
						},
						{
							"name": "9"
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
					45,
					28,
					23,
					14,
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
				"index": 32,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 34,
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
							"name": "J"
						},
						{
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "9"
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
					12,
					16,
					31,
					1,
					8
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
				"amount": 160000
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 37,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					5,
					1,
					12,
					7,
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
				"index": 38,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					17,
					7,
					10,
					7,
					0
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
				"index": 43,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					18,
					8,
					10,
					7,
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
				"index": 48,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 51,
				"type": "freeSpinEnd",
				"amount": 256000,
				"winLevel": 9
			},
			{
				"index": 52,
				"type": "finalWin",
				"amount": 256000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 2560.0
	},
	{
		"id": 29,
		"payoutMultiplier": 320000,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					19,
					16,
					12,
					11,
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
				"index": 7,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 32000
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					12,
					0,
					7,
					18,
					8
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 64000
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					18,
					3,
					8,
					17,
					3
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
				"index": 17,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 96000
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					9,
					4,
					9,
					9,
					8
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 128000
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					7,
					10,
					3,
					0
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
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 160000
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					16,
					9,
					5,
					16,
					5
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
				"index": 32,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 192000
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					10,
					16,
					14,
					10,
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
				"index": 37,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 224000
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					0,
					3,
					15,
					15,
					8
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 256000
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					8,
					18,
					8,
					5,
					5
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
				"index": 47,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
								"row": 2
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
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 32,
							"globalMult": 1,
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 288000
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					16,
					9,
					13,
					7,
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
				"index": 52,
				"type": "winInfo",
				"totalWin": 32000,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 32000,
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
							"winWithoutMult": 32000,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 32000,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 320000
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 320000,
				"winLevel": 9
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 320000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 3200.0
	}
];
