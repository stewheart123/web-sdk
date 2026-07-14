import { stateI18n, stateI18nDerived, stateUrlDerived } from 'state-shared';

const trackLocale = () => {
	void stateI18n.locale;
};

export const i18nDerived = {
	get audio() {
		trackLocale();
		return stateI18nDerived.translate('AUDIO');
	},
	get balance() {
		trackLocale();
		return stateI18nDerived.translate('BALANCE');
	},
	get win() {
		trackLocale();
		return stateI18nDerived.translate('WIN');
	},
	get bet() {
		trackLocale();
		return stateUrlDerived.social() ? stateI18nDerived.translate('SPIN') : stateI18nDerived.translate('BET');
	},
	get stop() {
		trackLocale();
		return stateI18nDerived.translate('STOP');
	},
	get buyBonus() {
		trackLocale();
		return stateUrlDerived.social()
			? stateI18nDerived.translate('PLAY BONUS')
			: stateI18nDerived.translate('BUY BONUS');
	},
	get disable() {
		trackLocale();
		return stateI18nDerived.translate('DISABLE');
	},
	get freeSpins() {
		trackLocale();
		return stateI18nDerived.translate('FREE SPINS');
	},
	get decrease() {
		trackLocale();
		return stateI18nDerived.translate('-');
	},
	get increase() {
		trackLocale();
		return stateI18nDerived.translate('+');
	},
	get menu() {
		trackLocale();
		return stateI18nDerived.translate('MENU');
	},
	get turbo() {
		trackLocale();
		return stateI18nDerived.translate('TURBO');
	},
	get autoSpin() {
		trackLocale();
		return stateI18nDerived.translate('AUTO SPIN');
	},
	get payTable() {
		trackLocale();
		return stateI18nDerived.translate('PAYTABLE');
	},
	get info() {
		trackLocale();
		return stateI18nDerived.translate('INFO');
	},
	get sound() {
		trackLocale();
		return stateI18nDerived.translate('SOUND');
	},
	get music() {
		trackLocale();
		return stateI18nDerived.translate('MUSIC');
	},
	get settings() {
		trackLocale();
		return stateI18nDerived.translate('SETTINGS');
	},
	get soundOn() {
		trackLocale();
		return stateI18nDerived.translate('SOUND ON');
	},
	get soundOff() {
		trackLocale();
		return stateI18nDerived.translate('SOUND OFF');
	},
	get menuExit() {
		trackLocale();
		return stateI18nDerived.translate('EXIT');
	},
	get watchReplayAgain() {
		trackLocale();
		return stateI18nDerived.translate('WATCH REPLAY AGAIN');
	},
};
