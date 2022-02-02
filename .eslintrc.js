module.exports = {
  extends: ['react-app'],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
}
