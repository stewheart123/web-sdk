export default {
	logo: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loader/LOGO.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loader/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/loader/LOGO.png', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	pressToContinueText: {
		type: 'sprite',
		src: new URL('../../assets/sprites/pressToContinueText/CLICK-TO-CONTINUE.png', import.meta.url).href,
		preload: true,
	},
	cardSymbols: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/cardSymbols/SYMBOLS.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/cardSymbols/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/cardSymbols/SYMBOLS.png', import.meta.url).href,
			texturePage2: new URL('../../assets/spines/cardSymbols/SYMBOLS_2.png', import.meta.url).href,
			texturePage3: new URL('../../assets/spines/cardSymbols/SYMBOLS_3.png', import.meta.url).href,
			texturePage4: new URL('../../assets/spines/cardSymbols/SYMBOLS_4.png', import.meta.url).href,
			texturePage5: new URL('../../assets/spines/cardSymbols/SYMBOLS_5.png', import.meta.url).href,
		},
	},
	reelsFrame: {
		type: 'sprite',
		src: new URL('../../assets/sprites/reelsFrame/VENDING-FRAME-LOGO-SHADOW.png', import.meta.url).href,
	},
	slab: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/slab/SLAB.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/slab/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/slab/SLAB.png', import.meta.url).href,
		},
	},
	cinzYellowFont: {
		type: 'font',
		src: {
			xml: new URL('../../assets/fonts/cinz-yellow/CINZEL-Q-YELLOW-5.xml', import.meta.url).href,
			image: new URL('../../assets/fonts/cinz-yellow/CINZEL-Q-YELLOW-5.png', import.meta.url).href,
			scaleMode: 'linear',
		},
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/BIG-WIN-V2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/bigwin/BIG-WIN-V2.png', import.meta.url).href,
			texturePage2: new URL('../../assets/spines/bigwin/BIG-WIN-V2_2.png', import.meta.url).href,
			scale: 2,
		},
	},
	fsModal: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsModal/FREE_SPINS_MODAL.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsModal/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/fsModal/FREE_SPINS_MODAL.png', import.meta.url).href,
			scale: 2,
		},
	},
	foregroundAnimation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/foregroundAnimation/CARDS_BG.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/foregroundAnimation/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/foregroundAnimation/CARDS_BG.png', import.meta.url).href,
			texturePage2: new URL('../../assets/spines/foregroundAnimation/CARDS_BG_2.png', import.meta.url).href,
			texturePage3: new URL('../../assets/spines/foregroundAnimation/CARDS_BG_3.png', import.meta.url).href,
		},
		preload: true,
	},
	progressBar: {
		type: 'sprites',
		src: {
			json: new URL('../../assets/sprites/progressBar/LOADING.json', import.meta.url).href,
			image: new URL('../../assets/sprites/progressBar/LOADING.png', import.meta.url).href,
		},
		preload: true,
	},
	howToPlayPanelBg: {
		type: 'sprite',
		src: new URL('../../assets/sprites/introCards/INTRO-CARD-BACK.png', import.meta.url).href,
		preload: true,
	},
	howToPlayWays: {
		type: 'sprite',
		src: new URL('../../assets/sprites/introCards/CARD-1-FG.png', import.meta.url).href,
		preload: true,
	},
	howToPlayMultiplier: {
		type: 'sprite',
		src: new URL('../../assets/sprites/introCards/CARD-2-FG.png', import.meta.url).href,
		preload: true,
	},
	howToPlayFreeSpins: {
		type: 'sprite',
		src: new URL('../../assets/sprites/introCards/CARD-3-FG.png', import.meta.url).href,
		preload: true,
	},
	uiButtons: {
		type: 'sprites',
		src: {
			json: new URL('../../assets/sprites/uiSlotsAssetsBespoke/UI-BUTTONS.json', import.meta.url).href,
			image: new URL('../../assets/sprites/uiSlotsAssetsBespoke/UI-BUTTONS.png', import.meta.url).href,
		},
		preload: true,
	},
	bonusTransition: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bonusTransition/TRANSITION.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bonusTransition/skeleton.json', import.meta.url).href,
			texturePage1: new URL('../../assets/spines/bonusTransition/TRANSITION.png', import.meta.url).href,
		},
	},
} as const;
