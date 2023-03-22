module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/', 'public/'],
      },
    },
  },
};
