import { dirname, join } from "path";
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath("@storybook/addon-styling"),
        getAbsolutePath("@storybook/addon-mdx-gfm")
    ],

    framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
