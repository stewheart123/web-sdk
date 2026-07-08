import { stateI18n, stateI18nDerived } from 'state-shared';

const trackLocale = () => {
	void stateI18n.locale;
};

export const i18nDerived = {
	get bet() {
		trackLocale();
		return stateI18nDerived.translate('BET');
	},
	get max() {
		trackLocale();
		return stateI18nDerived.translate('MAX');
	},
	get betMenu() {
		trackLocale();
		return stateI18nDerived.translate('BET MENU');
	},
	get selectYourBet() {
		trackLocale();
		return stateI18nDerived.translate('SELECT YOUR BET');
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
		return stateI18nDerived.translate(
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
		return stateI18nDerived.translate('PAYTABLE');
	},
	get gameRules() {
		trackLocale();
		return stateI18nDerived.translate('GAME RULES');
	},
};
