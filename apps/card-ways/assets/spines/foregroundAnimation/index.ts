import { createAsset } from 'pixi-svelte';

import img from './CARDS_BG.png';
import img2 from './CARDS_BG_2.png';
import rawAtlas from './CARDS_BG.atlas?raw';
import spine from './skeleton.json';

export default createAsset({ img: [img, img2], rawAtlas, spine, preload: true });
