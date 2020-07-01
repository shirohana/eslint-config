module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    // Require braces in arrow function body
    'arrow-body-style': [2, 'as-needed'],

    // Require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],

    // Require space before/after arrow function's arrow
    'arrow-spacing': [2, { after: true, before: true }],

    // Verify calls of `super()` in constructors
    'constructor-super': 2,

    // Enforce spacing around the * in generator functions
    'generator-star-spacing': [2, 'after'],

    // Disallow modifying variables of class declarations
    'no-class-assign': 2,

    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 0,

    // Disallow modifying variables that are declared using `const`
    'no-const-assign': 2,

    // Disallow duplicate name in class members
    'no-dupe-class-members': 2,

    // Disallow duplicate imports
    // Use `plugin:import/no-duplicates` instead
    'no-duplicate-imports': 0,

    // Disallow `Symbol` constructor
    'no-new-symbol': 2,

    // Disallow specified names in exports
    'no-restricted-exports': 0,

    // Disallow specific imports
    'no-restricted-imports': 0,

    // Disallow use of `this`/`super` before calling `super()` in constructors
    'no-this-before-super': 2,

    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 2,

    // Disallow unnecessary constructor
    'no-useless-constructor': 2,

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 2,

    // require `let` or `const` instead of `var`
    'no-var': 2,

    // Require object literal shorthand syntax
    'object-shorthand': [2, 'always'],

    // Require using arrow functions for callbacks
    'prefer-arrow-callback': 2,

    // Suggest using `const`
    'prefer-const': [2, { ignoreReadBeforeAssign: true }],

    // Prefer destructuring from arrays and objects
    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: true,
        object: false
      }
    }, {
      enforceForRenamedProperties: false
    }],

    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 2,

    // Suggest using the rest parameters instead of `arguments`
    'prefer-rest-params': 2,

    // Suggest using spread syntax instead of `.apply()`
    'prefer-spread': 2,

    // Suggest using template literals instead of string concatenation
    'prefer-template': 0,

    // Disallow generator functions that do not have `yield`
    'require-yield': 2,

    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [2, 'never'],

    // Import sorting
    // Use `plugin:import/order` to handle declarationSort
    'sort-imports': [2, {
      ignoreDeclarationSort: true,
      memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
    }],

    // Require `Symbol` description
    'symbol-description': 2,

    // Enforce usage of spacing in template strings
    'template-curly-spacing': 2,

    // Enforce spacing around the `*` in `yield*` expressions
    'yield-star-spacing': [2, 'both']
  }
}
