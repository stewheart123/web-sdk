import { stateI18n, stateI18nDerived, stateUrlDerived } from 'state-shared';

const trackLocale = () => {
	void stateI18n.locale;
};

const trackSocial = () => {
	void stateUrlDerived.social();
};

export const i18nDerived = {
	get bet() {
		trackLocale();
		trackSocial();
		return stateUrlDerived.social()
			? stateI18nDerived.translate('SPIN')
			: stateI18nDerived.translate('BET');
	},
	get max() {
		trackLocale();
		return stateI18nDerived.translate('MAX');
	},
	get betMenu() {
		trackLocale();
		trackSocial();
		return stateUrlDerived.social()
			? stateI18nDerived.translate('SPIN MENU')
			: stateI18nDerived.translate('BET MENU');
	},
	get selectYourBet() {
		trackLocale();
		trackSocial();
		return stateUrlDerived.social()
			? stateI18nDerived.translate('SELECT YOUR SPIN')
			: stateI18nDerived.translate('SELECT YOUR BET');
	},
	get confirm() {
		trackLocale();
		return stateI18nDerived.translate('CONFIRM');
	},
	get masterVolume() {
		trackLocale();
		return stateI18nDerived.translate('MASTER VOLUME');
	},
	get musicVolume() {
		trackLocale();
		return stateI18nDerived.translate('MUSIC VOLUME');
	},
	get soundEffectVolume() {
		trackLocale();
		return stateI18nDerived.translate('SOUND EFFECT VOLUME');
	},
	get autoSpins() {
		trackLocale();
		return stateI18nDerived.translate('AUTO SPINS');
	},
	get numberOfRounds() {
		trackLocale();
		return stateI18nDerived.translate('NUMBER OF ROUNDS');
	},
	get advanced() {
		trackLocale();
		return stateI18nDerived.translate('ADVANCED');
	},
	get singleWinLimit() {
		trackLocale();
		return stateI18nDerived.translate('SINGLE WIN LIMIT');
	},
	get lossLimit() {
		trackLocale();
		return stateI18nDerived.translate('LOSS LIMIT');
	},
	get startAutoplay() {
		trackLocale();
		return stateI18nDerived.translate('START AUTOPLAY');
	},
	get notification() {
		trackLocale();
		return stateI18nDerived.translate('NOTIFICATION');
	},
	get autoSpinsStopInfo() {
		trackLocale();
		return stateI18nDerived.translate('AUTO PLAY HAS STOPPED DUE TO');
	},
	get insufficientFunds() {
		trackLocale();
		trackSocial();
		return stateUrlDerived.social()
			? stateI18nDerived.translate(
					'INSUFFICIENT FUNDS TO PLACE THIS SPIN. PLEASE ADD FUNDS TO YOUR ACCOUNT OR LOWER THE SPIN LEVEL.',
				)
			: stateI18nDerived.translate(
					'INSUFFICIENT FUNDS TO PLACE THIS BET. PLEASE ADD FUNDS TO YOUR ACCOUNT OR LOWER THE BET LEVEL.',
				);
	},
	get lossLimitReached() {
		trackLocale();
		return stateI18nDerived.translate('LOSS LIMIT REACHED');
	},
	get singleWinLimitReached() {
		trackLocale();
		return stateI18nDerived.translate('SINGLE WIN LIMIT REACHED');
	},
	get settings() {
		trackLocale();
		return stateI18nDerived.translate('SETTINGS');
	},
	get info() {
		trackLocale();
		return stateI18nDerived.translate('INFO');
	},
	get payTable() {
		trackLocale();
		trackSocial();
		return stateUrlDerived.social()
			? stateI18nDerived.translate('WIN TABLE')
			: stateI18nDerived.translate('PAYTABLE');
	},
	get gameRules() {
		trackLocale();
		return stateI18nDerived.translate('GAME RULES');
	},
	get balance() {
		trackLocale();
		return stateI18nDerived.translate('BALANCE');
	},
	get win() {
		trackLocale();
		return stateI18nDerived.translate('WIN');
	},
	get stop() {
		trackLocale();
		return stateI18nDerived.translate('STOP');
	},
	get buyBonus() {
		trackLocale();
		trackSocial();
		return stateUrlDerived.social()
			? stateI18nDerived.translate('PLAY BONUS')
			: stateI18nDerived.translate('BUY BONUS');
	},
	get disable() {
		trackLocale();
		return stateI18nDerived.translate('DISABLE');
	},
	get turbo() {
		trackLocale();
		return stateI18nDerived.translate('TURBO');
	},
	get autoSpin() {
		trackLocale();
		return stateI18nDerived.translate('AUTO SPIN');
	},
	get menu() {
		trackLocale();
		return stateI18nDerived.translate('MENU');
	},
	get sound() {
		trackLocale();
		return stateI18nDerived.translate('SOUND');
	},
	get music() {
		trackLocale();
		return stateI18nDerived.translate('MUSIC');
	},
	get freeSpins() {
		trackLocale();
		return stateI18nDerived.translate('FREE SPINS');
	},
	get playAgain() {
		trackLocale();
		return stateI18nDerived.translate('PLAY AGAIN');
	},
};
