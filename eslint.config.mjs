import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...fixupConfigRules(
		compat.extends(
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"plugin:react-hooks/recommended",
			"plugin:jest/recommended",
			"prettier",
		),
	),
	{
		plugins: {
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
			jest: fixupPluginRules(jest),
			"react-refresh": reactRefresh,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",

			parserOptions: {
				project: ["./tsconfig.json"],

				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"prefer-spread": "off",
			"no-case-declarations": "off",
			"no-console": "off",
			"@typescript-eslint/consistent-type-imports": "warn",
			"@typescript-eslint/no-unnecessary-condition": "warn",

			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],

			"react-refresh/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
				},
			],
		},
	},
];
