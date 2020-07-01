module.exports = {
  rules: {
    // Require or Disallow initialization in variable declarations
    'init-declarations': 0,

    // Disallow deleting variables
    'no-delete-var': 2,

    // Disallow labels that are variables names
    'no-label-var': 2,

    // Disallow specific global variables
    'no-restricted-globals': 0,

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 2,

    // Disallow shadowing of restricted names
    'no-shadow-restricted-names': 2,

    // Disallow undeclared variables
    'no-undef': 2,

    // Disallow initializing to `undefined`
    'no-undef-init': 1,

    // Disallow use of undefined variable
    'no-undefined': 0,

    // Disallow unused variables
    'no-unused-vars': [2, { args: 'all', ignoreRestSiblings: true, argsIgnorePattern: '^_' }],

    // Disallow early use
    'no-use-before-define': [2, {
      functions: false
    }]
  }
}
