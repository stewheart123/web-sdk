// @ts-ignore
import baseConfig from 'config-vite';
import { mergeConfig } from 'vite';

const isDev = process.env.NODE_ENV === 'development';

export default () =>
	mergeConfig(baseConfig(), {
		build: {
			// Keep assets as separate hashed files under _app/immutable/assets/.
			// Inlined data URLs break spine/sprite relative texture resolution on Stake Engine.
			assetsInlineLimit: isDev ? undefined : 0,
		},
	});
