// @ts-ignore
import config from 'config-svelte';

/** @type {import('@sveltejs/kit').Config} */
const shared = config();

export default {
	...shared,
	kit: {
		...shared.kit,
		output: {
			// Smaller index.html; assets load from _app/immutable/ (easier to verify uploads).
			bundleStrategy: 'split',
		},
	},
};
