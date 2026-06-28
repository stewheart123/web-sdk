import { createAsset } from 'pixi-svelte';

import img from '../fsIntro/MODAL.png';
import rawAtlas from '../fsIntro/MODAL.atlas?raw';
import spine from '../fsIntro/skeleton.json';

export default createAsset({ img, rawAtlas, spine });
