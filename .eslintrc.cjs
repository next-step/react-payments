const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type { import("eslint").Linter.BaseConfig } */
module.exports = {
  parserOptions: {
    ecmaVersion: 'es6',
    sourceType: 'module',
    project,
  },
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  plugins: ['unused-imports', 'react-hooks', 'prettier', 'react-refresh'],
  ignorePatterns: [
    'public',
    'dist',
    'node_modules',
    '.cache',
    '.vscode',
    '.idea',
    '!.lintstagedrc.*',
    '!.storybook',
    '!.eslintrc.*js',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
    },
    {
      // Specify the extension or pattern you want to parse as JSON.
      files: ['**/*.json'],
      parser: 'jsonc-eslint-parser',
    },
    {
      // preventing eslint-ts to check js file
      files: ['**/*.js?(x)', '**/*.cjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      files: ['**/*.js?(x)'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: '2015',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'require-await': 'error',
    'no-unused-expressions': [2, { allowShortCircuit: false, allowTernary: false }],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
