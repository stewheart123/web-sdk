import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: ['@storybook/addon-svelte-csf', '@storybook/addon-docs'],
	framework: {
		name: '@storybook/sveltekit',
		options: {},
	},
	staticDirs: ['../static'],
	viteFinal: async (config) => {
		config.build = config.build ?? {};
		// Keep assets as separate files so spine/spritesheet relative paths resolve in dev.
		config.build.assetsInlineLimit = 0;
		return config;
	},
};

export default config;
