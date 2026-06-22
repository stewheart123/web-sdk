import { createAsset } from 'pixi-svelte';

import img from './LOADING.png';
import atlas from './LOADING.json';

export default createAsset({ img, atlas, preload: true });