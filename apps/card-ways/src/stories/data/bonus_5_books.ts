export default [
	{
		"id": 0,
		"payoutMultiplier": 41090,
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
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
							"name": "W",
							"wild": true
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
							"name": "9"
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
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					622,
					640,
					538,
					163,
					351
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
				"modifierPosition": 0,
				"persists": false
			},
			{
				"index": 2,
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
							"winWithoutMult": 130,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 3,
				"type": "setWin",
				"amount": 130,
				"winLevel": 3
			},
			{
				"index": 4,
				"type": "setTotalWin",
				"amount": 130
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 20,
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
					},
					{
						"reel": 4,
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
					"name": "X1",
					"modifier": true,
					"multiplier": 1
				},
				"multiplier": 1,
				"modifierReelId": "MR0",
				"modifierPosition": 34,
				"persists": true
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 20
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
							"name": "J"
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
							"name": "K"
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
							"name": "K"
						},
						{
							"name": "Q"
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
					234,
					605,
					967,
					104,
					923
				],
				"gameType": "freegame",
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
				"amount": 130
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 20
			},
			{
				"index": 11,
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
							"name": "K"
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
							"name": "K"
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
							"name": "J"
						},
						{
							"name": "K"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					22,
					26,
					665,
					554,
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
				"type": "setTotalWin",
				"amount": 130
			},
			{
				"index": 13,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 20
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
							"name": "A"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "A"
						},
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
					13,
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
				"index": 15,
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
				"index": 16,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 10370
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 20
			},
			{
				"index": 19,
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
							"name": "10"
						},
						{
							"name": "A"
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
							"name": "10"
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
					]
				],
				"paddingPositions": [
					448,
					961,
					507,
					566,
					238
				],
				"gameType": "freegame",
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
				"amount": 10370
			},
			{
				"index": 21,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 20
			},
			{
				"index": 22,
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
							"name": "Q"
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
							"name": "K"
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
					693,
					224,
					779,
					470,
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
				"index": 23,
				"type": "setTotalWin",
				"amount": 10370
			},
			{
				"index": 24,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 20
			},
			{
				"index": 25,
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
							"name": "K"
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
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "A"
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
							"name": "Q"
						},
						{
							"name": "Q"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					22,
					426,
					857,
					938,
					569
				],
				"gameType": "freegame",
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
				"amount": 10370
			},
			{
				"index": 27,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 20
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
					3,
					5,
					9,
					3,
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
				"index": 29,
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
				"index": 30,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 20610
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 20
			},
			{
				"index": 33,
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
							"name": "J"
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
							"name": "W",
							"wild": true
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
					]
				],
				"paddingPositions": [
					996,
					728,
					512,
					958,
					990
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 20
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
							"name": "J"
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
							"name": "Q"
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
							"name": "A"
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
							"name": "J"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					849,
					932,
					686,
					194,
					310
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 20
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
							"name": "9"
						},
						{
							"name": "J"
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
							"name": "Q"
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
					]
				],
				"paddingPositions": [
					996,
					903,
					511,
					866,
					963
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 20
			},
			{
				"index": 42,
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
							"name": "K"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					603,
					873,
					35,
					491,
					248
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 44,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 20
			},
			{
				"index": 45,
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
							"name": "10"
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
							"name": "10"
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
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					413,
					424,
					680,
					177,
					375
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 20610
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 20
			},
			{
				"index": 48,
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
							"name": "A"
						},
						{
							"name": "K"
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
							"name": "J"
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
							"name": "N",
							"non_winnable": true
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
					719,
					794,
					690,
					755,
					383
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 20
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
							"name": "K"
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
							"name": "A"
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
							"name": "K"
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					679,
					520,
					110,
					797,
					167
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 53,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 20
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
							"name": "A"
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
							"name": "W",
							"wild": true
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
							"name": "Q"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					402,
					379,
					501,
					750,
					30
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 56,
				"type": "updateFreeSpin",
				"amount": 15,
				"total": 20
			},
			{
				"index": 57,
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
							"name": "N",
							"non_winnable": true
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
					],
					[
						{
							"name": "9"
						},
						{
							"name": "9"
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
					315,
					720,
					868,
					629,
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
				"index": 58,
				"type": "setTotalWin",
				"amount": 20610
			},
			{
				"index": 59,
				"type": "updateFreeSpin",
				"amount": 16,
				"total": 20
			},
			{
				"index": 60,
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
							"name": "9"
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
							"name": "A"
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					662,
					174,
					172,
					514,
					232
				],
				"gameType": "freegame",
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
				"amount": 20610
			},
			{
				"index": 62,
				"type": "updateFreeSpin",
				"amount": 17,
				"total": 20
			},
			{
				"index": 63,
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
					17,
					17,
					7,
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
				"index": 64,
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
				"index": 65,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 66,
				"type": "setTotalWin",
				"amount": 30850
			},
			{
				"index": 67,
				"type": "updateFreeSpin",
				"amount": 18,
				"total": 20
			},
			{
				"index": 68,
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
							"name": "10"
						},
						{
							"name": "Q"
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
							"name": "K"
						},
						{
							"name": "J"
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
					975,
					867,
					591,
					361,
					470
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 69,
				"type": "setTotalWin",
				"amount": 30850
			},
			{
				"index": 70,
				"type": "updateFreeSpin",
				"amount": 19,
				"total": 20
			},
			{
				"index": 71,
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
					0,
					12,
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
				"index": 72,
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
				"index": 73,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 74,
				"type": "setTotalWin",
				"amount": 41090
			},
			{
				"index": 75,
				"type": "freeSpinEnd",
				"amount": 40960,
				"winLevel": 7
			},
			{
				"index": 76,
				"type": "finalWin",
				"amount": 41090
			}
		],
		"criteria": "freegame",
		"baseGameWins": 1.3,
		"freeGameWins": 409.6
	},
	{
		"id": 1,
		"payoutMultiplier": 11760,
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
							"name": "S",
							"scatter": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
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
					368,
					711,
					436,
					299,
					78
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
				"modifierPosition": 86,
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
				"totalFs": 20,
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
				"modifierPosition": 14,
				"persists": true
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 20
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
							"name": "A"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						},
						{
							"name": "A"
						}
					],
					[
						{
							"name": "A"
						},
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
					1,
					0,
					11,
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
				"total": 20
			},
			{
				"index": 11,
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
					]
				],
				"paddingPositions": [
					958,
					160,
					752,
					188,
					535
				],
				"gameType": "freegame",
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
				"total": 20
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
							"name": "Q"
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
							"name": "K"
						},
						{
							"name": "Q"
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
							"name": "J"
						},
						{
							"name": "K"
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
							"name": "K"
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
					394,
					603,
					44,
					813,
					253
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 17,
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
							"name": "J"
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
							"name": "N",
							"non_winnable": true
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
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "10"
						},
						{
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					37,
					4,
					352,
					960,
					630
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 20,
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
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					765,
					115,
					292,
					345,
					500
				],
				"gameType": "freegame",
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
				"total": 20
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
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
							"name": "10"
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
					],
					[
						{
							"name": "K"
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
					]
				],
				"paddingPositions": [
					459,
					564,
					784,
					619,
					757
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 26,
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
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					270,
					773,
					411,
					883,
					636
				],
				"gameType": "freegame",
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
				"total": 20
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
							"name": "J"
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
							"name": "9"
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
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "A"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					484,
					981,
					230,
					95,
					676
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 32,
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
							"name": "Q"
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
							"name": "Q"
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
					858,
					104,
					24,
					458,
					807
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 34,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 20
			},
			{
				"index": 35,
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
						},
						{
							"name": "J"
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
							"name": "A"
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
					130,
					530,
					598,
					799,
					402
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 37,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 20
			},
			{
				"index": 38,
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
							"name": "A"
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
							"name": "W",
							"wild": true
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
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					335,
					147,
					895,
					982,
					349
				],
				"gameType": "freegame",
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
				"amount": 10240
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 20
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
							"name": "Q"
						},
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					620,
					993,
					429,
					668,
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
				"index": 42,
				"type": "winInfo",
				"totalWin": 280,
				"wins": [
					{
						"symbol": "J",
						"kind": 3,
						"win": 280,
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
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 280,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 280,
				"winLevel": 4
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 10520
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 20
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
							"name": "J"
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
							"name": "A"
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
							"name": "K"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					982,
					143,
					686,
					58,
					259
				],
				"gameType": "freegame",
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
				"amount": 10520
			},
			{
				"index": 48,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 20
			},
			{
				"index": 49,
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
							"name": "A"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
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
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					165,
					174,
					98,
					464,
					650
				],
				"gameType": "freegame",
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
				"amount": 10520
			},
			{
				"index": 51,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 20
			},
			{
				"index": 52,
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
							"name": "J"
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
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
					938,
					725,
					956,
					32,
					252
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 10520
			},
			{
				"index": 54,
				"type": "updateFreeSpin",
				"amount": 15,
				"total": 20
			},
			{
				"index": 55,
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
							"name": "W",
							"wild": true
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
							"name": "10"
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
					]
				],
				"paddingPositions": [
					455,
					75,
					256,
					82,
					605
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 56,
				"type": "winInfo",
				"totalWin": 840,
				"wins": [
					{
						"symbol": "Q",
						"kind": 4,
						"win": 840,
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
							"ways": 4,
							"globalMult": 1,
							"winWithoutMult": 840,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 57,
				"type": "setWin",
				"amount": 840,
				"winLevel": 5
			},
			{
				"index": 58,
				"type": "setTotalWin",
				"amount": 11360
			},
			{
				"index": 59,
				"type": "updateFreeSpin",
				"amount": 16,
				"total": 20
			},
			{
				"index": 60,
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
							"name": "9"
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
							"name": "Q"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					810,
					819,
					638,
					726,
					368
				],
				"gameType": "freegame",
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
				"index": 62,
				"type": "setWin",
				"amount": 190,
				"winLevel": 3
			},
			{
				"index": 63,
				"type": "setTotalWin",
				"amount": 11550
			},
			{
				"index": 64,
				"type": "updateFreeSpin",
				"amount": 17,
				"total": 20
			},
			{
				"index": 65,
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
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					433,
					285,
					538,
					768,
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
				"index": 66,
				"type": "setTotalWin",
				"amount": 11550
			},
			{
				"index": 67,
				"type": "updateFreeSpin",
				"amount": 18,
				"total": 20
			},
			{
				"index": 68,
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
							"name": "Q"
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
							"name": "A"
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
							"name": "K"
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
							"name": "9"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					393,
					418,
					164,
					113,
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
				"index": 69,
				"type": "setTotalWin",
				"amount": 11550
			},
			{
				"index": 70,
				"type": "updateFreeSpin",
				"amount": 19,
				"total": 20
			},
			{
				"index": 71,
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
					],
					[
						{
							"name": "A"
						},
						{
							"name": "J"
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
							"name": "W",
							"wild": true
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
					246,
					104,
					102,
					20,
					186
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 72,
				"type": "winInfo",
				"totalWin": 210,
				"wins": [
					{
						"symbol": "A",
						"kind": 3,
						"win": 210,
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
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 73,
				"type": "setWin",
				"amount": 210,
				"winLevel": 4
			},
			{
				"index": 74,
				"type": "setTotalWin",
				"amount": 11760
			},
			{
				"index": 75,
				"type": "freeSpinEnd",
				"amount": 11760,
				"winLevel": 7
			},
			{
				"index": 76,
				"type": "finalWin",
				"amount": 11760
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 117.6
	},
	{
		"id": 2,
		"payoutMultiplier": 20740,
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
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					36,
					769,
					552,
					644,
					618
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
				"totalFs": 20,
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
					},
					{
						"reel": 4,
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
				"modifierPosition": 86,
				"persists": true
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 20
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
							"name": "10"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					641,
					875,
					308,
					431,
					519
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 9,
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
							"name": "K"
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
							"name": "10"
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
					587,
					359,
					546,
					599,
					417
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 12,
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
							"name": "A"
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
							"name": "10"
						},
						{
							"name": "A"
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
							"name": "10"
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
					],
					[
						{
							"name": "A"
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
					]
				],
				"paddingPositions": [
					925,
					344,
					698,
					937,
					951
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 15,
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
						},
						{
							"name": "10"
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
							"name": "N",
							"non_winnable": true
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
							"name": "K"
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
					286,
					620,
					687,
					712,
					167
				],
				"gameType": "freegame",
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
				"type": "winInfo",
				"totalWin": 140,
				"wins": [
					{
						"symbol": "J",
						"kind": 3,
						"win": 140,
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
							"winWithoutMult": 140,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 17,
				"type": "setWin",
				"amount": 140,
				"winLevel": 3
			},
			{
				"index": 18,
				"type": "setTotalWin",
				"amount": 140
			},
			{
				"index": 19,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 20
			},
			{
				"index": 20,
				"type": "reveal",
				"board": [
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
							"name": "9"
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
							"name": "N",
							"non_winnable": true
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
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					334,
					987,
					554,
					926,
					585
				],
				"gameType": "freegame",
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
				"amount": 140
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 20
			},
			{
				"index": 23,
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
						},
						{
							"name": "10"
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
					730,
					671,
					216,
					648,
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
				"index": 24,
				"type": "setTotalWin",
				"amount": 140
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 20
			},
			{
				"index": 26,
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
					]
				],
				"paddingPositions": [
					8,
					9,
					3,
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
				"index": 27,
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
							"winWithoutMult": 10240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 10380
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 20
			},
			{
				"index": 31,
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
							"name": "J"
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
					495,
					90,
					352,
					819,
					68
				],
				"gameType": "freegame",
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
				"amount": 10380
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 20
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
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
					154,
					20,
					300,
					437,
					787
				],
				"gameType": "freegame",
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
				"amount": 10380
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 20
			},
			{
				"index": 37,
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
							"name": "W",
							"wild": true
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
							"name": "9"
						},
						{
							"name": "A"
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
							"name": "9"
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
					]
				],
				"paddingPositions": [
					121,
					45,
					619,
					629,
					779
				],
				"gameType": "freegame",
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
				"amount": 10380
			},
			{
				"index": 39,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 20
			},
			{
				"index": 40,
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
							"name": "10"
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
							"name": "A"
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
					735,
					600,
					338,
					564,
					902
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 10380
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 20
			},
			{
				"index": 43,
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
					16,
					7,
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
				"index": 44,
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
				"index": 45,
				"type": "setWin",
				"amount": 10240,
				"winLevel": 9
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 20620
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 20
			},
			{
				"index": 48,
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "K"
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
							"name": "N",
							"non_winnable": true
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
					110,
					614,
					548,
					32,
					971
				],
				"gameType": "freegame",
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
				"amount": 20620
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 20
			},
			{
				"index": 51,
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
							"name": "9"
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
							"name": "J"
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
							"name": "K"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					417,
					298,
					625,
					269,
					159
				],
				"gameType": "freegame",
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
				"amount": 20620
			},
			{
				"index": 53,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 20
			},
			{
				"index": 54,
				"type": "reveal",
				"board": [
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
							"name": "W",
							"wild": true
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
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					888,
					347,
					321,
					368,
					981
				],
				"gameType": "freegame",
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
				"amount": 20620
			},
			{
				"index": 56,
				"type": "updateFreeSpin",
				"amount": 15,
				"total": 20
			},
			{
				"index": 57,
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
							"name": "9"
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
							"name": "W",
							"wild": true
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
							"name": "10"
						},
						{
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					882,
					386,
					385,
					471,
					890
				],
				"gameType": "freegame",
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
				"amount": 20620
			},
			{
				"index": 59,
				"type": "updateFreeSpin",
				"amount": 16,
				"total": 20
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
							"name": "A"
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
							"name": "A"
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
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					659,
					887,
					609,
					697,
					572
				],
				"gameType": "freegame",
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
				"amount": 20620
			},
			{
				"index": 62,
				"type": "updateFreeSpin",
				"amount": 17,
				"total": 20
			},
			{
				"index": 63,
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
							"name": "K"
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					996,
					963,
					830,
					519,
					277
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 64,
				"type": "setTotalWin",
				"amount": 20620
			},
			{
				"index": 65,
				"type": "updateFreeSpin",
				"amount": 18,
				"total": 20
			},
			{
				"index": 66,
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
							"name": "K"
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
							"name": "J"
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
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					737,
					732,
					243,
					958,
					308
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 67,
				"type": "setTotalWin",
				"amount": 20620
			},
			{
				"index": 68,
				"type": "updateFreeSpin",
				"amount": 19,
				"total": 20
			},
			{
				"index": 69,
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
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
							"name": "9"
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
					264,
					533,
					310,
					561,
					347
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 70,
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
					}
				]
			},
			{
				"index": 71,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 72,
				"type": "setTotalWin",
				"amount": 20740
			},
			{
				"index": 73,
				"type": "freeSpinEnd",
				"amount": 20740,
				"winLevel": 7
			},
			{
				"index": 74,
				"type": "finalWin",
				"amount": 20740
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 207.4
	},
	{
		"id": 10,
		"payoutMultiplier": 42300,
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
							"name": "9"
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
							"name": "S",
							"scatter": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					36,
					590,
					988,
					976,
					917
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
				"modifierPosition": 30,
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
				"totalFs": 20,
				"positions": [
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
				"modifierPosition": 99,
				"persists": true
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 20
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
							"name": "J"
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
							"name": "J"
						},
						{
							"name": "Q"
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
							"name": "A"
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					451,
					605,
					862,
					200,
					531
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 9,
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
							"name": "K"
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
							"name": "10"
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
							"name": "10"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					301,
					511,
					4,
					678,
					87
				],
				"gameType": "freegame",
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
				"total": 20
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
							"name": "N",
							"non_winnable": true
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
							"name": "A"
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
					],
					[
						{
							"name": "10"
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
							"name": "A"
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
					284,
					416,
					564,
					954,
					860
				],
				"gameType": "freegame",
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
				"total": 20
			},
			{
				"index": 15,
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
							"name": "Q"
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "9"
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
					260,
					322,
					776,
					235,
					525
				],
				"gameType": "freegame",
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
				"total": 20
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "Q"
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
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					71,
					576,
					784,
					110,
					410
				],
				"gameType": "freegame",
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
				"total": 20
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
							"name": "10"
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
							"name": "W",
							"wild": true
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					297,
					395,
					68,
					981,
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
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 20
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
							"name": "10"
						},
						{
							"name": "9"
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
							"name": "K"
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
					],
					[
						{
							"name": "9"
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
							"name": "K"
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
					]
				],
				"paddingPositions": [
					0,
					218,
					214,
					949,
					932
				],
				"gameType": "freegame",
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
				"totalWin": 380,
				"wins": [
					{
						"symbol": "K",
						"kind": 3,
						"win": 380,
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
							"winWithoutMult": 190,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 380,
				"winLevel": 4
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 380
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 20
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
							"name": "K"
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
							"name": "10"
						},
						{
							"name": "J"
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
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
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
							"name": "10"
						},
						{
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					384,
					725,
					406,
					429,
					74
				],
				"gameType": "freegame",
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
				"amount": 380
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 20
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
							"name": "K"
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
							"name": "J"
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
							"name": "J"
						},
						{
							"name": "10"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					203,
					797,
					691,
					276,
					344
				],
				"gameType": "freegame",
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
				"amount": 380
			},
			{
				"index": 34,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 20
			},
			{
				"index": 35,
				"type": "reveal",
				"board": [
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
							"name": "J"
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
							"name": "9"
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
					]
				],
				"paddingPositions": [
					340,
					15,
					987,
					419,
					776
				],
				"gameType": "freegame",
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
				"amount": 380
			},
			{
				"index": 37,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 20
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
					]
				],
				"paddingPositions": [
					4,
					7,
					3,
					0,
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
				"index": 39,
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
							"winWithoutMult": 10240,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 40,
				"type": "setWin",
				"amount": 20480,
				"winLevel": 9
			},
			{
				"index": 41,
				"type": "setTotalWin",
				"amount": 20860
			},
			{
				"index": 42,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 20
			},
			{
				"index": 43,
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
							"name": "N",
							"non_winnable": true
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
							"name": "J"
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
							"name": "Q"
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
							"name": "J"
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
					]
				],
				"paddingPositions": [
					498,
					181,
					698,
					572,
					192
				],
				"gameType": "freegame",
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
				"type": "setTotalWin",
				"amount": 20860
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 20
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
							"name": "10"
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
							"name": "N",
							"non_winnable": true
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
							"name": "A"
						},
						{
							"name": "J"
						}
					]
				],
				"paddingPositions": [
					195,
					749,
					787,
					134,
					429
				],
				"gameType": "freegame",
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
				"totalWin": 480,
				"wins": [
					{
						"symbol": "K",
						"kind": 4,
						"win": 480,
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
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 240,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 480,
				"winLevel": 4
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 21340
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 20
			},
			{
				"index": 51,
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
							"name": "A"
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
							"name": "A"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					119,
					404,
					430,
					217,
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
				"index": 52,
				"type": "setTotalWin",
				"amount": 21340
			},
			{
				"index": 53,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 20
			},
			{
				"index": 54,
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
							"name": "K"
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
							"name": "J"
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
							"name": "W",
							"wild": true
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
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					994,
					998,
					822,
					606,
					311
				],
				"gameType": "freegame",
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
				"amount": 21340
			},
			{
				"index": 56,
				"type": "updateFreeSpin",
				"amount": 15,
				"total": 20
			},
			{
				"index": 57,
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
				"index": 58,
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
				"index": 59,
				"type": "setWin",
				"amount": 20480,
				"winLevel": 9
			},
			{
				"index": 60,
				"type": "setTotalWin",
				"amount": 41820
			},
			{
				"index": 61,
				"type": "updateFreeSpin",
				"amount": 16,
				"total": 20
			},
			{
				"index": 62,
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
							"name": "A"
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
							"name": "W",
							"wild": true
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
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					102,
					43,
					149,
					218,
					452
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 63,
				"type": "setTotalWin",
				"amount": 41820
			},
			{
				"index": 64,
				"type": "updateFreeSpin",
				"amount": 17,
				"total": 20
			},
			{
				"index": 65,
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
						},
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
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					791,
					624,
					336,
					850,
					303
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 66,
				"type": "setTotalWin",
				"amount": 41820
			},
			{
				"index": 67,
				"type": "updateFreeSpin",
				"amount": 18,
				"total": 20
			},
			{
				"index": 68,
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
							"name": "N",
							"non_winnable": true
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
							"name": "Q"
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
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
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
							"name": "K"
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
					76,
					92,
					213,
					596,
					651
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 69,
				"type": "setTotalWin",
				"amount": 41820
			},
			{
				"index": 70,
				"type": "updateFreeSpin",
				"amount": 19,
				"total": 20
			},
			{
				"index": 71,
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
							"name": "J"
						},
						{
							"name": "W",
							"wild": true
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
							"name": "Q"
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
					615,
					377,
					380,
					637,
					464
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 72,
				"type": "winInfo",
				"totalWin": 480,
				"wins": [
					{
						"symbol": "K",
						"kind": 4,
						"win": 480,
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
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 1,
							"winWithoutMult": 240,
							"symbolMult": 0,
							"modifierMult": 2
						}
					}
				]
			},
			{
				"index": 73,
				"type": "setWin",
				"amount": 480,
				"winLevel": 4
			},
			{
				"index": 74,
				"type": "setTotalWin",
				"amount": 42300
			},
			{
				"index": 75,
				"type": "freeSpinEnd",
				"amount": 42300,
				"winLevel": 7
			},
			{
				"index": 76,
				"type": "finalWin",
				"amount": 42300
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 423.0
	},
	{
		"id": 12,
		"payoutMultiplier": 63030,
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
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
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
							"name": "Q"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
						}
					]
				],
				"paddingPositions": [
					30,
					363,
					992,
					284,
					245
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
				"modifierPosition": 87,
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
				"totalFs": 20,
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
				"modifierPosition": 1,
				"persists": true
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 20
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					4,
					2,
					8,
					14,
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
				"totalWin": 30720,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 30720,
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
							"winWithoutMult": 10240,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 30720,
				"winLevel": 9
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 30720
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 20
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
					11,
					7,
					15,
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
				"index": 12,
				"type": "winInfo",
				"totalWin": 30720,
				"wins": [
					{
						"symbol": "A",
						"kind": 5,
						"win": 30720,
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
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 30720,
				"winLevel": 9
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 61440
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 20
			},
			{
				"index": 16,
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
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
					]
				],
				"paddingPositions": [
					439,
					686,
					372,
					909,
					440
				],
				"gameType": "freegame",
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
				"amount": 61440
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 20
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
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
							"name": "9"
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
							"name": "9"
						},
						{
							"name": "J"
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
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					670,
					120,
					354,
					839,
					608
				],
				"gameType": "freegame",
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
				"amount": 61440
			},
			{
				"index": 21,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 20
			},
			{
				"index": 22,
				"type": "reveal",
				"board": [
					[
						{
							"name": "Q"
						},
						{
							"name": "9"
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
							"name": "9"
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
							"name": "K"
						},
						{
							"name": "Q"
						}
					]
				],
				"paddingPositions": [
					269,
					707,
					459,
					567,
					625
				],
				"gameType": "freegame",
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
				"amount": 61440
			},
			{
				"index": 24,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 20
			},
			{
				"index": 25,
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
							"name": "Q"
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
							"name": "9"
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
							"name": "10"
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
					138,
					450,
					693,
					746,
					454
				],
				"gameType": "freegame",
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
				"amount": 61440
			},
			{
				"index": 27,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 20
			},
			{
				"index": 28,
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
							"name": "W",
							"wild": true
						},
						{
							"name": "W",
							"wild": true
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
					]
				],
				"paddingPositions": [
					300,
					207,
					183,
					535,
					364
				],
				"gameType": "freegame",
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
				"totalWin": 990,
				"wins": [
					{
						"symbol": "K",
						"kind": 3,
						"win": 570,
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
							"winWithoutMult": 190,
							"symbolMult": 0,
							"modifierMult": 3
						}
					},
					{
						"symbol": "J",
						"kind": 3,
						"win": 420,
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
							"winWithoutMult": 140,
							"symbolMult": 0,
							"modifierMult": 3
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 990,
				"winLevel": 5
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 62430
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 20
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
							"name": "10"
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
							"name": "J"
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
							"name": "N",
							"non_winnable": true
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
							"name": "N",
							"non_winnable": true
						},
						{
							"name": "K"
						}
					]
				],
				"paddingPositions": [
					470,
					268,
					620,
					286,
					405
				],
				"gameType": "freegame",
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
				"amount": 62430
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 20
			},
			{
				"index": 36,
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
							"name": "A"
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
							"name": "K"
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
							"name": "J"
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
					]
				],
				"paddingPositions": [
					591,
					502,
					563,
					241,
					578
				],
				"gameType": "freegame",
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
				"amount": 62430
			},
			{
				"index": 38,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 20
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
							"name": "9"
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
							"name": "9"
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
					199,
					718,
					375,
					134,
					75
				],
				"gameType": "freegame",
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
						"symbol": "9",
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
							"winWithoutMult": 200,
							"symbolMult": 0,
							"modifierMult": 3
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
				"amount": 63030
			},
			{
				"index": 43,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 20
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
							"name": "N",
							"non_winnable": true
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
							"name": "J"
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
							"name": "9"
						}
					]
				],
				"paddingPositions": [
					644,
					976,
					474,
					399,
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
				"index": 45,
				"type": "setTotalWin",
				"amount": 63030
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 20
			},
			{
				"index": 47,
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
							"name": "W",
							"wild": true
						},
						{
							"name": "10"
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
							"name": "K"
						},
						{
							"name": "J"
						},
						{
							"name": "N",
							"non_winnable": true
						}
					]
				],
				"paddingPositions": [
					955,
					888,
					44,
					230,
					145
				],
				"gameType": "freegame",
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
				"amount": 63030
			},
			{
				"index": 49,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 20
			},
			{
				"index": 50,
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
							"name": "K"
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
							"name": "K"
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
							"name": "N",
							"non_winnable": true
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
							"name": "A"
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
							"name": "9"
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
					714,
					858,
					455,
					654,
					259
				],
				"gameType": "freegame",
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
				"amount": 63030
			},
			{
				"index": 52,
				"type": "updateFreeSpin",
				"amount": 13,
				"total": 20
			},
			{
				"index": 53,
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
							"name": "N",
							"non_winnable": true
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
							"name": "10"
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
							"name": "W",
							"wild": true
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
							"name": "J"
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
					423,
					753,
					889,
					257,
					907
				],
				"gameType": "freegame",
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
				"amount": 63030
			},
			{
				"index": 55,
				"type": "updateFreeSpin",
				"amount": 14,
				"total": 20
			},
			{
				"index": 56,
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
							"name": "10"
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
							"name": "K"
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
							"name": "A"
						},
						{
							"name": "Q"
						},
						{
							"name": "W",
							"wild": true
						}
					]
				],
				"paddingPositions": [
					359,
					207,
					722,
					874,
					645
				],
				"gameType": "freegame",
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
				"amount": 63030
			},
			{
				"index": 58,
				"type": "updateFreeSpin",
				"amount": 15,
				"total": 20
			},
			{
				"index": 59,
				"type": "reveal",
				"board": [
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
							"name": "A"
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
					]
				],
				"paddingPositions": [
					733,
					672,
					140,
					923,
					994
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 60,
				"type": "setTotalWin",
				"amount": 63030
			},
			{
				"index": 61,
				"type": "updateFreeSpin",
				"amount": 16,
				"total": 20
			},
			{
				"index": 62,
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
					243,
					740,
					508,
					216,
					882
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 63,
				"type": "setTotalWin",
				"amount": 63030
			},
			{
				"index": 64,
				"type": "updateFreeSpin",
				"amount": 17,
				"total": 20
			},
			{
				"index": 65,
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
							"name": "Q"
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
							"name": "K"
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
					594,
					718,
					605,
					39,
					367
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 66,
				"type": "setTotalWin",
				"amount": 63030
			},
			{
				"index": 67,
				"type": "updateFreeSpin",
				"amount": 18,
				"total": 20
			},
			{
				"index": 68,
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
							"name": "N",
							"non_winnable": true
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
							"name": "9"
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
							"name": "A"
						},
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
							"name": "A"
						}
					]
				],
				"paddingPositions": [
					583,
					349,
					186,
					302,
					197
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 69,
				"type": "setTotalWin",
				"amount": 63030
			},
			{
				"index": 70,
				"type": "updateFreeSpin",
				"amount": 19,
				"total": 20
			},
			{
				"index": 71,
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
							"name": "9"
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
							"name": "9"
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
							"name": "J"
						},
						{
							"name": "9"
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
					700,
					568,
					114,
					922,
					230
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 72,
				"type": "setTotalWin",
				"amount": 63030
			},
			{
				"index": 73,
				"type": "freeSpinEnd",
				"amount": 63030,
				"winLevel": 8
			},
			{
				"index": 74,
				"type": "finalWin",
				"amount": 63030
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.0,
		"freeGameWins": 630.3
	}
];
