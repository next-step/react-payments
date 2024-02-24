
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "stylelint",
    "prettier", 
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh', 
    'simple-import-sort',
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true,
        "endOfLine": "auto",
        "bracketSpacing": true,
        "htmlWhitespaceSensitivity": "css",
        "printWidth": 100,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "tabWidth": 2,
        "trailingComma": "es5",
        "useTabs": false,
        "parser": "typescript", 
        "filepath": "", 
        "rangeStart": 0,
        "requirePragma": false,
        "insertPragma": false,
        "overrides": [
          {
            "files": "*.json",
            "options": {
              "printWidth": 120
            }
          }
        ]
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
    "n/no-missing-import" : "off"
  },
  root: true,
}
