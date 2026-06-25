import { createAsset } from 'pixi-svelte';

import img from './BIG-WIN.png';
import rawAtlas from './BIG-WIN.atlas?raw';
import spine from './skeleton.json';

export default createAsset({ img, rawAtlas, spine });
