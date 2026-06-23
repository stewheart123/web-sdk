import { createAsset } from 'pixi-svelte';

import img from './TRANSITION.png';
import rawAtlas from './TRANSITION.atlas?raw';
import spine from './skeleton.json';

export default createAsset({ img, rawAtlas, spine });
