module.exports = {
  env: {
    es6: true
  },
  extends: [
    ...[
      './configs/strict',
      './configs/errors',
      './configs/variables',
      './configs/best-practices',
      './configs/style',
      './configs/es6',
      './configs/plugin-promise',
      './configs/plugin-import'
    ].map(require.resolve)
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
}
