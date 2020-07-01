module.exports = {
  plugins: [
    'react-pug'
  ],
  globals: {
    pug: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Manage empty lines in Pug
    'react-pug/empty-lines': 0,

    // Lint JavaScript code inside Pug
    'react-pug/eslint': 2,

    // Enforce consistent indentation
    'react-pug/indent': 2,

    // Disallow broken template
    'react-pug/no-broken-template': 2,

    // Disallow JavaScript interpolation
    'react-pug/no-interpolation': 2,

    // Disallow undeclared variables in Pug
    'react-pug/no-undef': 2,

    // Manage prop-types usage
    'react-pug/prop-types': 0,

    // Manage quotes in Pug
    'react-pug/quotes': 2,

    // Prevent React to be marked as unused
    'react-pug/uses-react': 2,

    // Prevent variables used in Pug to be marked as unused
    'react-pug/uses-vars': 2,

    // Inherit pug-lint to validate pug
    'react-pug/pug-lint': 1
  }
}
