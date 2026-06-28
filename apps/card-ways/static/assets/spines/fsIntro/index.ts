import { createAsset } from 'pixi-svelte';

import modalImg from './MODAL.png';
import modalRawAtlas from './MODAL.atlas?raw';
import fsIntro from './skeleton.json';

import img from './fs_screen.webp';
import rawAtlas from './fs_screen.atlas?raw';
import fsIntroNumber from './fs_screen_number.json';
import fsOutroNumber from './fs_total_number.json';

export default createAsset({
	img: modalImg,
	rawAtlas: modalRawAtlas,
	spines: {
		fsIntro,
	},
});

export const fsIntroNumbers = createAsset({
	img,
	rawAtlas,
	spines: {
		fsIntroNumber,
		fsOutroNumber,
	},
});
