import { createAsset } from 'pixi-svelte';

import img from './BIG-WIN-V2.png';
import rawAtlas from './BIG-WIN-V2.atlas?raw';
import spine from './skeleton.json';

export default createAsset({ img, rawAtlas, spine });
