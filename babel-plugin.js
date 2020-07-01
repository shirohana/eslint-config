module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    ...[
      './node-es6',
      './configs/plugin-flowtype'
    ].map(require.resolve)
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0
  }
}
