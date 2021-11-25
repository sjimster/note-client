/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es6: true,
		"jest/globals": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "jest"],
	rules: {
		indent: ["warn", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		eqeqeq: "error",
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"arrow-spacing": ["error", { before: true, after: true }],
		"no-console": 0,
		"react/prop-types": 0,
		"no-case-declarations": 0,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
