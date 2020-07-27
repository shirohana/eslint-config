module.exports = {
  plugins: [
    'flowtype'
  ],
  settings: {
    'flowtype': {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    // Disallow unnecessary parentheses
    'no-extra-parens': [1, 'functions'],

    // Enforces a particular annotation style of complex types
    'flowtype/array-style-complex-type': 2,

    // Enforces a particular array type annotation style of simple types
    'flowtype/array-style-simple-type': 2,

    // Enforces the consistent use of parentheses in arrow functions
    // Use ESLint built-in `arrow-parens`
    'flowtype/arrow-parens': 0,

    // Enforces a particular style for boolean type annotations
    'flowtype/boolean-style': 2,

    // Marks Flow type identifiers as defined
    // Used to suppress no-undef reporting of type identifiers
    'flowtype/define-flow-type': 1,

    // Enforces consistent use of trailing commas in Object and Tuple annotations
    'flowtype/delimiter-dangle': 2,

    // Enforces consistent spacing within generic type annotation parameters
    'flowtype/generic-spacing': 2,

    // Require an empty line after the Flow annotation
    'flowtype/newline-after-flow-annotation': 0,

    // Checks for duplicate properties in Object annotations
    'flowtype/no-dupe-keys': 2,

    // Disallows use of the existential type `*`
    'flowtype/no-existential-type': 0,

    // Disallows `$FlowFixMe` comment suppressions
    'flowtype/no-flow-fix-me-comments': [1, 'IGNORE|WONTFIX'],

    // Warns against `mixed` type annotations
    'flowtype/no-mixed': 1,

    // Requires use of `$ReadOnlyArray` instead of just `Array` or array shorthand notation
    'flowtype/no-mutable-array': 0,

    // Disallows use of primitive constructors as types, such as `Boolean`, `Number` and `String`
    'flowtype/no-primitive-constructor-types': 2,

    // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration
    'flowtype/no-types-missing-file-annotation': 1,

    // An extension of ESLint's `no-unused-expressions`
    'flowtype/no-unused-expressions': 0,

    // Warns against weak type annotations any, Object and Function
    'flowtype/no-weak-types': [2, { any: false }],

    // Enforces consistent separators between properties in Flow object types
    'flowtype/object-type-delimiter': 0,

    // Requires to make a type alias for all union and intersection types
    'flowtype/require-compound-type-alias': 0,

    // This rule enforces exact object types
    'flowtype/require-exact-type': 0,

    // This rule validates Flow object indexer name
    'flowtype/require-indexer-name': 0,

    // This rule enforces explicit inexact object types
    'flowtype/require-inexact-type': 0,

    // Requires that all function parameters have type annotations
    'flowtype/require-parameter-type': 0,

    // This rule validates that React props are marked as `$ReadOnly`
    'flowtype/require-readonly-react-props': 0,

    // Requires that functions have return type annotation
    'flowtype/require-return-type': 0,

    // Requires all type declarations to be at the top of the file, after any import declarations
    'flowtype/require-types-at-top': 0,

    // This rule validates Flow file annotations
    'flowtype/require-valid-file-annotation': [2, 'always'],

    // Requires that all variable declarators have type annotations
    'flowtype/require-variable-type': 0,

    // Enforces consistent use of semicolons after type aliases
    'flowtype/semi': [2, 'never'],

    // Enforces sorting of Object annotations
    'flowtype/sort-keys': 0,

    // Enforces consistent spacing after the type annotation colon
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],

    // Enforces consistent spacing before the opening `<` of generic type annotation parameters
    'flowtype/space-before-generic-bracket': 2,

    // Enforces consistent spacing before the type annotation colon
    'flowtype/space-before-type-colon': 2,

    // Enforce object types, that are spread to be exact type explicitly
    'flowtype/spread-exact-type': 0,

    // Enforces a consistent naming pattern for type aliases
    'flowtype/type-id-match': 0,

    // Enforces a particular style for type imports
    'flowtype/type-import-style': [2, 'declaration'],

    // Enforces consistent spacing around union and intersection type separators
    'flowtype/union-intersection-spacing': 2,

    // Marks Flow type alias declarations as used
    'flowtype/use-flow-type': 2
  }
}
