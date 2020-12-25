module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    ...[
      './node-es6',
      './configs/plugin-flowtype',
      './configs/plugin-jest'
    ].map(require.resolve)
  ],
  parserOptions: {
    ecmaVersion: 11
  }
}
