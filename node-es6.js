module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    ...[
      './base',
      './configs/node',
      './configs/plugin-node'
    ].map(require.resolve)
  ],
  rules: {
    'prefer-object-spread': 0
  }
}
