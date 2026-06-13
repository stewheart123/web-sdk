export default {
	"providerName": "sample_provider",
	"gameName": "win_modifier",
	"gameID": "win_modifier",
	"rtp": 0.97,
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
			"cost": 1.0,
			"feature": true,
			"buyBonus": false,
			"rtp": 0.97,
			"max_win": 5000
		},
		"bonus": {
			"cost": 100.0,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.97,
			"max_win": 5000
		}
	},
	"symbols": {
		"8": {
			"paytable": [
				{
					"5": 2
				},
				{
					"4": 1
				},
				{
					"3": 0.4
				}
			]
		},
		"X1": {
			"paytable": null,
			"special_properties": [
				"modifier"
			]
		},
		"Q": {
			"paytable": [
				{
					"5": 6
				},
				{
					"4": 3
				},
				{
					"3": 1.2
				}
			]
		},
		"9": {
			"paytable": [
				{
					"5": 3
				},
				{
					"4": 1.5
				},
				{
					"3": 0.6
				}
			]
		},
		"J": {
			"paytable": [
				{
					"5": 5
				},
				{
					"4": 2.5
				},
				{
					"3": 1
				}
			]
		},
		"X3": {
			"paytable": null,
			"special_properties": [
				"modifier"
			]
		},
		"10": {
			"paytable": [
				{
					"5": 4
				},
				{
					"4": 2
				},
				{
					"3": 0.8
				}
			]
		},
		"S": {
			"paytable": null,
			"special_properties": [
				"scatter"
			]
		},
		"W": {
			"paytable": null,
			"special_properties": [
				"wild"
			]
		},
		"X2": {
			"paytable": null,
			"special_properties": [
				"modifier"
			]
		},
		"A": {
			"paytable": [
				{
					"5": 10
				},
				{
					"4": 5
				},
				{
					"3": 2
				}
			]
		},
		"K": {
			"paytable": [
				{
					"5": 8
				},
				{
					"4": 4
				},
				{
					"3": 1.5
				}
			]
		}
	},
	"paddingReels": {
		"basegame": [],
		"freegame": []
	}
};
