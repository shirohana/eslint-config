module.exports = {
  rules: {
    // Enforce getter/setter pairs in objects and classes
    'accessor-pairs': 0,

    // Enforce return statements in callbacks of array's methods
    'array-callback-return': [2, { allowImplicit: true }],

    // Treat `var` as block-scoped
    'block-scoped-var': 2,

    // Enforce that class methods utilize `this`
    'class-methods-use-this': 2,

    // Limit cyclomatic complexity
    'complexity': 0,

    // Require return statements to either always or never specify values
    'consistent-return': 2,

    // Require following curly brace conventions
    'curly': 2,

    // Require `default-case` in switch statements
    'default-case': 2,

    // Enforce `default` clauses in switch statements to be last
    // TODO Enable rule when ESLint v7 released
    // 'default-case-last': 2,

    // Enforce default parameters to be last
    'default-param-last': 0,

    // Enforce newline before and after dot
    'dot-location': [2, 'property'],

    // Require dot-notation
    'dot-notation': 2,

    // Require `===` and `!==`
    'eqeqeq': [2, 'always', { null: 'ignore'}],

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': [2, 'getBeforeSet'],

    // Require guarding `for-in`
    'guard-for-in': 2,

    // Enforce a maximum number of classes per file
    'max-classes-per-file': 0,

    // Disallow use of `alert()`
    'no-alert': 1,

    // Disallow use of caller/callee
    'no-caller': 2,

    // Disallow lexical declarations in case/default clauses
    'no-case-declarations': 2,

    // Disallow returning value in constructor
    'no-constructor-return': 2,

    // Disallow regular expressions that look like division
    'no-div-regex': 0,

    // Disallow `return` before `else`
    // disable the rule for istanbul
    'no-else-return': 0,

    // Disallow empty functions
    'no-empty-function': 2,

    // Disallow empty destructuring patterns
    'no-empty-pattern': 2,

    // Disallow `null` comparisons
    'no-eq-null': 0,

    // Disallow `eval()`
    'no-eval': 2,

    // Disallow extending of native objects
    'no-extend-native': 2,

    // Disallow unnecessary function binding
    'no-extra-bind': 2,

    // Disallow unnecessary labels
    'no-extra-label': 2,

    // Disallow case statements fallthrough
    'no-fallthrough': 0,

    // Disallow floating decimals
    'no-floating-decimal': 2,

    // Disallow assignment to native objects or read-only global variables
    'no-global-assign': 2,

    // Disallow the type conversion with shorter notations
    'no-implicit-coercion': 0,

    // Disallow declarations in the global scope
    'no-implicit-globals': 0,

    // Disallow implied `eval()`
    'no-implied-eval': 2,

    // Disallow `this` keywords outside of classes or class-like objects
    'no-invalid-this': 0,

    // Disallow `iterator`
    'no-iterator': 2,

    // Disallow labeled statements
    'no-labels': 2,

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 2,

    // Disallow functions in loops
    'no-loop-func': 2,

    // Disallow magic numbers
    'no-magic-numbers': 0,

    // Disallow multiple spaces
    'no-multi-spaces': 2,

    // Disallow multiline strings
    'no-multi-str': 2,

    // Disallow `new` for side effects
    'no-new': 2,

    // Disallow function constructor
    'no-new-func': 2,

    // Disallow primitive wrapper instances
    'no-new-wrappers': 2,

    // Disallow octal literals
    'no-octal': 2,

    // Disallow octal escape sequences in string literals
    'no-octal-escape': 2,

    // Disallow reassignment of function parameters
    'no-param-reassign': 2,

    // Disallow use of `__proto__`
    'no-proto': 2,

    // Disallow variable redeclaration
    'no-redeclare': 2,

    // Disallow certain object properties
    'no-restricted-properties': 0,

    // Disallow assignment in return statements
    'no-return-assign': 2,

    // Disallow unnecessary `return await`
    'no-return-await': 2,

    // Disallow script urls
    'no-script-url': 2,

    // Disallow self assignment
    'no-self-assign': 2,

    // Disallow self compare
    'no-self-compare': 2,

    // Disallow use of the comma operator
    'no-sequences': 2,

    // Restrict what can be thrown as an exception
    'no-throw-literal': 2,

    // Disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 0,

    // Disallow unused expressions
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],

    // Disallow unused labels
    'no-unused-labels': 2,

    // Disallow unnecessary `.call()` and `.apply()`
    'no-useless-call': 0,

    // Disallow unnecessary catch clauses
    'no-useless-catch': 2,

    // Disallow unnecessary concatenation of strings
    'no-useless-concat': 2,

    // Disallow unnecessary escape usage
    'no-useless-escape': 2,

    // Disallow redundant return statements
    'no-useless-return': 2,

    // Disallow use of the void operator
    'no-void': 2,

    // Disallow warning comment
    'no-warning-comments': [1, { terms: ['todo', 'fixme'] }],

    // Disallow with statements
    'no-with': 2,

    // Suggest using named capture group in regular expression
    'prefer-named-capture-group': 0,

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],

    // Disallow use of the RegExp constructor in favor of regular expression literals
    'prefer-regex-literals': 0,

    // Require radix parameter
    'radix': 2,

    // Disallow async functions which have no await expression
    'require-await': 1,

    // Enforce the use of `u` flag on RegExp
    'require-unicode-regexp': 0,

    // Require variable declarations to be at the top of their scope
    'vars-on-top': 2,

    // Require IIFEs to be wrapped
    'wrap-iife': [2, 'inside'],

    // Require or disallow Yoda conditions
    'yoda': [2, 'never', { exceptRange: true }]
  }
}
