import { createAsset } from 'pixi-svelte';

import img from './CARDS_BG.png';
import rawAtlas from './CARDS_BG.atlas?raw';
import spine from './skeleton.json';

export default createAsset({ img, rawAtlas, spine, preload: true });
