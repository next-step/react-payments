module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  parser: '@typescript-eslint/eslint-plugin',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 'error',
  },
};
