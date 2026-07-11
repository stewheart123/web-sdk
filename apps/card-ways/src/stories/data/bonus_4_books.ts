export default [
	{
		"id": 0,
		"payoutMultiplier": 62780,
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
							"name": "J"
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
							"name": "9"
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
							"name": "Q"
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
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					426,
					394,
					25,
					672,
					768
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
				"modifierPosition": 71,
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
				"totalFs": 15,
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
				"modifierPosition": 12,
				"persists": true
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 15
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
							"name": "Q"
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
							"name": "Q"
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
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					741,
					880,
					303,
					123,
					760
				],
				"gameType": "freegame",
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
				"total": 15
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
							"name": "K"
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
							"name": "9"
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
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "10"
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
					],
					[
						{
							"name": "Q"
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
					]
				],
				"paddingPositions": [
					738,
					996,
					728,
					512,
					958
				],
				"gameType": "freegame",
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
				"totalWin": 360,
				"wins": [
					{
						"symbol": "10",
						"kind": 4,
						"win": 360,
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
							"winWithoutMult": 180,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 11,
				"type": "setWin",
				"amount": 360,
				"winLevel": 4
			},
			{
				"index": 12,
				"type": "setTotalWin",
				"amount": 360
			},
			{
				"index": 13,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 15
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
					16,
					6,
					9,
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
				"index": 15,
				"type": "winInfo",
				"totalWin": 20480,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 20480,
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
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 20480,
				"winLevel": 9
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 20840
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 15
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
				"index": 20,
				"type": "winInfo",
				"totalWin": 20480,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 20480,
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
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 20480,
				"winLevel": 9
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 41320
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 15
			},
			{
				"index": 24,
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "K"
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
					761,
					816,
					413,
					424,
					680
				],
				"gameType": "freegame",
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
				"amount": 41320
			},
			{
				"index": 26,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 15
			},
			{
				"index": 27,
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
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "9"
						},
						{
							"name": "K"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "A"
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
					561,
					903,
					719,
					794,
					690
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 41320
			},
			{
				"index": 29,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 15
			},
			{
				"index": 30,
				"type": "reveal",
				"board": [
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
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					88,
					449,
					679,
					520,
					110
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 41320
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 15
			},
			{
				"index": 33,
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
							"name": "9"
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
							"name": "J"
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
							"name": "W",
							"wild": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
					533,
					860,
					402,
					379,
					501
				],
				"gameType": "freegame",
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
				"totalWin": 320,
				"wins": [
					{
						"symbol": "Q",
						"kind": 3,
						"win": 320,
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
							"winWithoutMult": 160,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 35,
				"type": "setWin",
				"amount": 320,
				"winLevel": 4
			},
			{
				"index": 36,
				"type": "setTotalWin",
				"amount": 41640
			},
			{
				"index": 37,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 15
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
							"name": "9"
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
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
						},
						{
							"name": "J"
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
							"name": "W",
							"wild": true
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
					480,
					44,
					315,
					720,
					868
				],
				"gameType": "freegame",
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
				"totalWin": 660,
				"wins": [
					{
						"symbol": "A",
						"kind": 3,
						"win": 420,
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
							"winWithoutMult": 210,
							"symbolMult": 0,
							"modifierMult": 2
						}
					},
					{
						"symbol": "9",
						"kind": 3,
						"win": 240,
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
							"winWithoutMult": 120,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 40,
				"type": "setWin",
				"amount": 660,
				"winLevel": 5
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 42300
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 15
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
					18,
					18,
					12,
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
				"index": 44,
				"type": "winInfo",
				"totalWin": 20480,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 20480,
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
							"winWithoutMult": 10240,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 45,
				"type": "setWin",
				"amount": 20480,
				"winLevel": 9
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 62780
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 15
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
							"name": "10"
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "Q"
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
					]
				],
				"paddingPositions": [
					12,
					789,
					204,
					552,
					942
				],
				"gameType": "freegame",
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
				"amount": 62780
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 15
			},
			{
				"index": 51,
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
							"name": "9"
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
							"name": "A"
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
							"name": "9"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					237,
					414,
					526,
					352,
					975
				],
				"gameType": "freegame",
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
				"amount": 62780
			},
			{
				"index": 53,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 15
			},
			{
				"index": 54,
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
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "J"
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
							"name": "Q"
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
					361,
					470,
					931,
					275,
					675
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 55,
				"type": "setTotalWin",
				"amount": 62780
			},
			{
				"index": 56,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 15
			},
			{
				"index": 57,
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
							"name": "A"
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
							"name": "A"
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					980,
					746,
					5,
					392,
					802
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 58,
				"type": "setTotalWin",
				"amount": 62780
			},
			{
				"index": 59,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 15
			},
			{
				"index": 60,
				"type": "reveal",
				"board": [
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
							"name": "Q"
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
							"name": "Q"
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
							"name": "10"
						},
						{
							"name": "10"
						}
					],
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "A"
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
							"name": "N",
							"non_winnable": true
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
					977,
					907,
					960,
					758,
					524
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 61,
				"type": "setTotalWin",
				"amount": 62780
			},
			{
				"index": 62,
				"type": "freeSpinEnd",
				"amount": 62780,
				"winLevel": 8
			},
			{
				"index": 63,
				"type": "finalWin",
				"amount": 62780
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 627.8
	},
	{
		"id": 1,
		"payoutMultiplier": 20790,
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
				"totalFs": 15,
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
				"total": 15
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
					14,
					16,
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
				"index": 7,
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
			{
				"index": 8,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 10240
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 15
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
							"name": "10"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
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
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "9"
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					372,
					476,
					954,
					326,
					929
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 13,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 15
			},
			{
				"index": 14,
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
							"name": "10"
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
							"name": "Q"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "W",
							"wild": true
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
							"name": "K"
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
					913,
					905,
					538,
					168,
					573
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 16,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 15
			},
			{
				"index": 17,
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
							"name": "9"
						},
						{
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "W",
							"wild": true
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
							"name": "10"
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					236,
					24,
					180,
					332,
					177
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 19,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 15
			},
			{
				"index": 20,
				"type": "reveal",
				"board": [
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
							"name": "J"
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
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "Q"
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
							"name": "K"
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
					522,
					368,
					526,
					690,
					573
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 15
			},
			{
				"index": 23,
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
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
					915,
					456,
					815,
					424,
					752
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 15
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
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "J"
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
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
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
					930,
					781,
					372,
					808,
					607
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 15
			},
			{
				"index": 29,
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
							"name": "A"
						},
						{
							"name": "J"
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
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					879,
					984,
					456,
					165,
					977
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 15
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
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "9"
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
							"name": "9"
						},
						{
							"name": "Q"
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
							"name": "N",
							"non_winnable": true
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
							"name": "A"
						},
						{
							"name": "K"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					732,
					756,
					472,
					670,
					543
				],
				"gameType": "freegame",
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
							"winWithoutMult": 120,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 34,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 35,
				"type": "setTotalWin",
				"amount": 10360
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 15
			},
			{
				"index": 37,
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
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
							"name": "10"
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
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					285,
					947,
					510,
					512,
					527
				],
				"gameType": "freegame",
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
				"totalWin": 190,
				"wins": [
					{
						"symbol": "J",
						"kind": 4,
						"win": 190,
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
							"winWithoutMult": 190,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 190,
				"winLevel": 3
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 10550
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 15
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
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
							"name": "Q"
						},
						{
							"name": "9"
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
							"name": "10"
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
					362,
					677,
					904,
					465,
					921
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 10550
			},
			{
				"index": 44,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 15
			},
			{
				"index": 45,
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
					18,
					17,
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
				"index": 46,
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
			{
				"index": 47,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 48,
				"type": "setTotalWin",
				"amount": 20790
			},
			{
				"index": 49,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 15
			},
			{
				"index": 50,
				"type": "reveal",
				"board": [
					[
						{
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "10"
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
							"name": "10"
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
							"name": "A"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "W",
							"wild": true
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
					963,
					332,
					834,
					716,
					855
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 20790
			},
			{
				"index": 52,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 15
			},
			{
				"index": 53,
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
							"name": "A"
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
							"name": "Q"
						},
						{
							"name": "9"
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
							"name": "K"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					929,
					631,
					274,
					791,
					933
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 20790
			},
			{
				"index": 55,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 15
			},
			{
				"index": 56,
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
							"name": "9"
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
							"name": "K"
						},
						{
							"name": "9"
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
							"name": "A"
						},
						{
							"name": "9"
						},
						{
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					310,
					980,
					818,
					723,
					851
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 57,
				"type": "setTotalWin",
				"amount": 20790
			},
			{
				"index": 58,
				"type": "freeSpinEnd",
				"amount": 20790,
				"winLevel": 7
			},
			{
				"index": 59,
				"type": "finalWin",
				"amount": 20790
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 207.9
	},
	{
		"id": 26,
		"payoutMultiplier": 660,
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
							"name": "A"
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
							"name": "S",
							"scatter": true
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
							"name": "10"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					841,
					411,
					606,
					498,
					280
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
				"modifierPosition": 81,
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
				"totalFs": 15,
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
				"total": 15
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
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
							"name": "J"
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
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
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
					435,
					793,
					427,
					757,
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
				"index": 7,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 8,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 15
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
							"name": "10"
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
							"name": "10"
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
							"name": "W",
							"wild": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					358,
					12,
					865,
					997,
					835
				],
				"gameType": "freegame",
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
				"total": 15
			},
			{
				"index": 12,
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
							"name": "9"
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
							"name": "W",
							"wild": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					259,
					140,
					627,
					962,
					345
				],
				"gameType": "freegame",
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
				"total": 15
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
							"name": "10"
						},
						{
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "9"
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
							"name": "N",
							"non_winnable": true
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
							"name": "A"
						},
						{
							"name": "10"
						},
						{
							"name": "K"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					232,
					721,
					834,
					536,
					144
				],
				"gameType": "freegame",
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
				"total": 15
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
							"name": "10"
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
							"name": "W",
							"wild": true
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
							"name": "Q"
						},
						{
							"name": "9"
						}
					],
					[
						{
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "J"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					401,
					769,
					309,
					933,
					767
				],
				"gameType": "freegame",
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
				"total": 15
			},
			{
				"index": 21,
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
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
							"name": "10"
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
							"name": "10"
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
					38,
					794,
					696,
					543,
					86
				],
				"gameType": "freegame",
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
				"totalWin": 660,
				"wins": [
					{
						"symbol": "10",
						"kind": 5,
						"win": 660,
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 220,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 660,
				"winLevel": 5
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 660
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 15
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
							"name": "K"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "J"
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
							"name": "Q"
						}
					],
					[
						{
							"name": "W",
							"wild": true
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "J"
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
					724,
					155,
					271,
					553,
					52
				],
				"gameType": "freegame",
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
				"amount": 660
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 15
			},
			{
				"index": 29,
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
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "9"
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
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					991,
					665,
					15,
					462,
					798
				],
				"gameType": "freegame",
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
				"amount": 660
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 15
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
							"name": "A"
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
							"name": "J"
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					911,
					587,
					588,
					425,
					66
				],
				"gameType": "freegame",
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
				"amount": 660
			},
			{
				"index": 34,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 15
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
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					448,
					893,
					835,
					478,
					361
				],
				"gameType": "freegame",
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
				"amount": 660
			},
			{
				"index": 37,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 15
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					160,
					800,
					271,
					181,
					494
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 660
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 15
			},
			{
				"index": 41,
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
							"name": "A"
						},
						{
							"name": "A"
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
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
					528,
					62,
					529,
					255,
					174
				],
				"gameType": "freegame",
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
				"amount": 660
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 15
			},
			{
				"index": 44,
				"type": "reveal",
				"board": [
					[
						{
							"name": "N",
							"non_winnable": true
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
							"name": "J"
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
							"name": "K"
						},
						{
							"name": "K"
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
							"name": "10"
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					752,
					500,
					569,
					93,
					342
				],
				"gameType": "freegame",
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
				"amount": 660
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 15
			},
			{
				"index": 47,
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
						},
						{
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					58,
					402,
					351,
					651,
					117
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 660
			},
			{
				"index": 49,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 15
			},
			{
				"index": 50,
				"type": "reveal",
				"board": [
					[
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "K"
						},
						{
							"name": "9"
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
					815,
					569,
					712,
					706,
					84
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 660
			},
			{
				"index": 52,
				"type": "freeSpinEnd",
				"amount": 660,
				"winLevel": 3
			},
			{
				"index": 53,
				"type": "finalWin",
				"amount": 660
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 6.6
	}
];
