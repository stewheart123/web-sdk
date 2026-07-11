export default {
	INFO: 'INFO',
	'GAME RULES': 'GAME RULES',
	PAYTABLE: 'PAYTABLE',
	'GR.SYMBOL.NON_WIN': 'Non-win symbol. Does not pay and cannot form winning ways.',
	'GR.SYMBOL.WILD': 'Substitutes for all paying symbols.',
	'GR.SYMBOL.SCATTER': '3 Scatters award 10, 4 award 15, and 5 award 20 Free Spins.',
	'GR.SYMBOL.MODIFIER': 'Modifier card. Applies to ways wins. No direct pay.',
	'GR.UI.SPIN': 'SPIN | Initiates a spin with the current bet amount.',
	'GR.UI.AUTO_SPIN': 'AUTO SPIN | Open the Auto Spin pop-up menu.',
	'GR.UI.BUY_BONUS': 'BUY BONUS | Opens the Bonus Buy menu to purchase Free Spins.',
	'GR.UI.TURBO': 'TURBO | Activate Turbo Mode.',
	'GR.UI.MUSIC': 'MUSIC | Toggle background music on or off.',
	'GR.UI.SOUND': 'SOUND | Toggle sound effects on or off.',
	'GR.GAME_OVERVIEW.TITLE': 'GAME OVERVIEW',
	'GR.GAME_OVERVIEW.TEXT':
		'BOOSTER BREAK WAYS is a 5-reel, 2-row ways slot with a playing-card theme. Wins are formed by matching symbols on adjacent reels from left to right. A Modifier Reel beside the board can boost wins with multipliers up to ×3.',
	'GR.WILD_SYMBOL.TITLE': 'WILD SYMBOL',
	'GR.WILD_SYMBOL.TEXT':
		'The Wild substitutes for all paying symbols. Wild does not substitute for Scatter.',
	'GR.SCATTER_FREE_SPINS.TITLE': 'SCATTER / FREE SPINS',
	'GR.SCATTER_FREE_SPINS.TEXT':
		'Scatter symbols appear on all reels. Landing 3 Scatters awards 10 Free Spins, 4 Scatters awards 15 Free Spins, and 5 Scatters awards 20 Free Spins. Scatter wins are evaluated separately from ways wins.',
	'GR.MODIFIER_BASE.TITLE': 'MODIFIER REEL (BASE GAME)',
	'GR.MODIFIER_BASE.TEXT':
		'On each base-game spin, the Modifier Reel reveals a multiplier card: ×1, ×2, or ×3. When a win occurs, the active modifier multiplier is applied to that win. The modifier may change on the next spin. If a ×1 card is revealed after a higher multiplier, the multiplier resets.',
	'GR.MODIFIER_FREE_SPINS.TITLE': 'MODIFIER REEL (FREE SPINS)',
	'GR.MODIFIER_FREE_SPINS.TEXT':
		'During Free Spins, the Modifier Reel is active on every spin. The revealed multiplier persists for the entire bonus until the feature ends. All wins during Free Spins are multiplied by the active modifier value. When Free Spins end, the modifier resets to ×1.',
	'GR.MAX_WIN.TITLE': 'MAX WIN',
	'GR.MAX_WIN.TEXT':
		'The maximum win in any bet mode is {maxWin}× the underlying bet. Once reached, the round ends and the win cap is awarded.',
	'GR.SECTION.PAYTABLE': 'PAYTABLE',
	'GR.SECTION.WIN_WAYS': 'WIN WAYS',
	'GR.WIN_WAYS.TEXT':
		'All paying symbols pay from left to right on adjacent reels, starting from the leftmost reel. Only symbols on consecutive reels form a valid way. This does not apply to Scatter symbols. Non-win symbols do not pay and cannot form winning ways. Multiple ways for the same symbol are added together. Wild symbols substitute to complete ways.',
	'GR.SECTION.BET_MODES': 'BET MODES',
	'GR.BET_MODES.TEXT':
		'The normal mode of this game has a theoretical expected return of {baseRtp}%.\n\nThe player can buy Free Spins at three tiers:\n• 3 Scatters / {freeSpins3} spins — {bonusCost3}× bet — RTP {bonusRtp3}%\n• 4 Scatters / {freeSpins4} spins — {bonusCost4}× bet — RTP {bonusRtp4}%\n• 5 Scatters / {freeSpins5} spins — {bonusCost5}× bet — RTP {bonusRtp5}%\n\nPurchasing Free Spins triggers the bonus feature immediately.\n\nThe maximum win in each bet mode is {maxWin}× the underlying bet.',
	'GR.SECTION.BONUS_BUY': 'BONUS BUY',
	'GR.BONUS_BUY.TITLE': 'BONUS BUY — FREE SPINS',
	'GR.BONUS_BUY.TEXT':
		'Instantly awards the Free Spins feature. Purchase tiers award 10, 15, or 20 free spins.\n\nMaximum win: {maxWin}× bet\nBonus Buy may be disabled in certain jurisdictions',
	'GR.SECTION.UI_GUIDE': 'USER INTERFACE GUIDE',
	'GR.SECTION.LEGAL_NOTICE': 'LEGAL NOTICE',
	'GR.LEGAL_NOTICE.TEXT':
		'Malfunction voids all pays and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted bets. The theoretical expected return is calculated over many spins. Movement of reels are not representative of any physical device, and is for illustrative purposes only. TM and © Stake Engine.',
} as const;
