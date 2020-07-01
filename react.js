module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    ...[
      './node-es6',
      './configs/plugin-flowtype',
      './configs/plugin-react',
      './configs/plugin-react-pug',
      './configs/plugin-react-hooks'
    ].map(require.resolve)
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'class-methods-use-this': [2, {
      exceptMethods: [
        'componentDidCatch',
        'componentDidMount',
        'componentDidUpdate',
        'componentWillUnmount',
        'shouldComponentUpdate',
        'render'
      ]
    }]
  }
}
