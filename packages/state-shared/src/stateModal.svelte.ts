type ModalEmpty = null;

type ModalError = {
	name: 'error';
	error: any;
};

type ModalBetMenu = {
	name: 'betAmountMenu';
};

type ModalBuyBonus = {
	name: 'buyBonus';
};

type ModalBuyBonusConfirm = {
	name: 'buyBonusConfirm';
};

type ModalAutoSpin = {
	name: 'autoSpin';
};

type ModalAutoSpinMessage = {
	name: 'autoSpinMessage';
	message: 'insufficientFunds' | 'lossLimitReached' | 'singleWinLimitReached';
};

type ModalPayTable = {
	name: 'payTable';
};

type ModalGameRules = {
	name: 'gameRules';
};

type ModalGameInfo = {
	name: 'gameInfo';
};

type ModalSettings = {
	name: 'settings';
};

type Modal =
	| ModalEmpty
	| ModalError
	| ModalBetMenu
	| ModalBuyBonus
	| ModalBuyBonusConfirm
	| ModalAutoSpin
	| ModalAutoSpinMessage
	| ModalPayTable
	| ModalGameRules
	| ModalGameInfo
	| ModalSettings;

export const stateModal = $state({
	modal: null as Modal,
	/** Blocks reopen from the same tap that closed a menu (mobile click-through). */
	suppressOpenUntil: 0,
});

export const dismissModal = () => {
	stateModal.modal = null;
	stateModal.suppressOpenUntil = performance.now() + 400;
};

export const openModal = (modal: Exclude<Modal, null>) => {
	if (performance.now() < stateModal.suppressOpenUntil) return;
	stateModal.modal = modal;
};
