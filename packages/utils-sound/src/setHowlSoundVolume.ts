import { Howler, type Howl } from 'howler';

type HowlSoundNode = {
	_muted?: boolean;
	_node?: { gain: AudioParam };
};

type HowlWithSoundLookup = Howl & {
	_soundById: (id: number) => HowlSoundNode | null;
};

/** Howler ignores volume() values outside 0–1; boost via Web Audio gain when needed. */
export function setHowlSoundVolume(howl: Howl, soundId: number, volume: number) {
	const vol = Math.max(0, volume);

	if (vol <= 1) {
		howl.volume(vol, soundId);
		return;
	}

	const sound = (howl as HowlWithSoundLookup)._soundById(soundId);

	if (Howler.usingWebAudio && sound?._node?.gain) {
		howl.volume(1, soundId);
		if (!sound._muted) {
			sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
		}
		return;
	}

	howl.volume(1, soundId);
}
