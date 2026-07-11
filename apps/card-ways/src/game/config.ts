export default {
	"providerName": "sample_provider",
	"gameName": "card_ways",
	"gameID": "card_ways",
	"rtp": 0.965,
	"numReels": 5,
	"numRows": [
		2,
		2,
		2,
		2,
		2
	],
	"betModes": {
		"base": {
			"cost": 1,
			"feature": true,
			"buyBonus": false,
			"rtp": 0.965,
			"max_win": 5000
		},
		"bonus_3": {
			"cost": 70,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.965,
			"max_win": 5000
		},
		"bonus_4": {
			"cost": 100,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.965,
			"max_win": 5000
		},
		"bonus_5": {
			"cost": 130,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.965,
			"max_win": 5000
		}
	},
	"symbols": {
		"9": {
			"paytable": [
				{
					"5": 2
				},
				{
					"4": 1.6
				},
				{
					"3": 1.2
				}
			]
		},
		"10": {
			"paytable": [
				{
					"5": 2.2
				},
				{
					"4": 1.8
				},
				{
					"3": 1.3
				}
			]
		},
		"J": {
			"paytable": [
				{
					"5": 2.4
				},
				{
					"4": 1.9
				},
				{
					"3": 1.4
				}
			]
		},
		"K": {
			"paytable": [
				{
					"5": 3
				},
				{
					"4": 2.4
				},
				{
					"3": 1.9
				}
			]
		},
		"A": {
			"paytable": [
				{
					"5": 3.2
				},
				{
					"4": 2.6
				},
				{
					"3": 2.1
				}
			]
		},
		"X3": {
			"paytable": null,
			"special_properties": [
				"modifier"
			]
		},
		"N": {
			"paytable": null,
			"special_properties": [
				"non_winnable"
			]
		},
		"X2": {
			"paytable": null,
			"special_properties": [
				"modifier"
			]
		},
		"Q": {
			"paytable": [
				{
					"5": 2.7
				},
				{
					"4": 2.1
				},
				{
					"3": 1.6
				}
			]
		},
		"W": {
			"paytable": null,
			"special_properties": [
				"wild"
			]
		},
		"S": {
			"paytable": null,
			"special_properties": [
				"scatter"
			]
		},
		"X1": {
			"paytable": null,
			"special_properties": [
				"modifier"
			]
		}
	},
	"paddingReels": {
		"basegame": [],
		"freegame": []
	}
};
