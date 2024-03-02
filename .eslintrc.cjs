module.exports = {
  root: true,
  env: { node:true, browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:vitest/recommended',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-import'],
  rules: {
    'func-style': ['error', 'expression'],
    'react/react-in-jsx-scope': 'off'
  }
}
