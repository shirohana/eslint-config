module.exports = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    'array-bracket-newline': [1, 'consistent'],

    // Disallow or enforce spaces inside of brackets
    'array-bracket-spacing': [2, 'never'],

    // Enforce line breaks between array elements
    'array-element-newline': [1, 'consistent'],

    // Disallow or Enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': [2, 'always'],

    // Require brace style
    'brace-style': [2, '1tbs'],

    // Require camelcase
    'camelcase': [2, { properties: 'never', ignoreDestructuring: true, allow: ['\\$_'] }],

    // Enforce or Disallow capitalization of the first letter of a comment
    'capitalized-comments': 0,

    // Require or Disallow trailing commas
    'comma-dangle': [2, 'never'],

    // Enforces spacing around commas
    'comma-spacing': [2, { after: true, before: false }],

    // Comma style
    'comma-style': [2, 'last'],

    // Disallow or Enforce spaces inside of computed properties
    'computed-property-spacing': 2,

    // Require consistent `this`
    'consistent-this': [1, 'self'],

    // Require or Disallow newline at the end of files
    'eol-last': [2, 'always'],

    // Require or Disallow spacing between function identifiers and their invocations
    'func-call-spacing': [2, 'never'],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 0,

    // Require or Disallow named function expressions
    'func-names': [1, 'as-needed'],

    // Enforce the consistent use of either function declarations or expressions
    'func-style': [1, 'declaration', { allowArrowFunctions: true }],

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': [2, 'consistent'],

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': [2, 'consistent'],

    // Disallow specified identifiers
    'id-blacklist': 0,

    // Enforce minimum and maximum identifier lengths
    'id-length': 0,

    // Require identifiers to match a specified regular expression
    'id-match': 0,

    // Enforce the location of arrow function bodies with implicit returns
    'implicit-arrow-linebreak': [2, 'beside'],

    // Enforce consistent indentation
    'indent': [2, 2, {
      SwitchCase: 0,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      ignoredNodes: [],
      ignoreComments: false,
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': [2, 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 2,

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': 2,

    // Enforce position of line comments
    'line-comment-position': [1, 'above'],

    // Enforce consistent linebreak style
    'linebreak-style': [2, 'unix'],

    // Require empty lines around comments
    'lines-around-comment': 0,

    // Require or Disallow an empty line between class members
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],

    // Enforce a maximum depth that blocks can be nested
    'max-depth': 0,

    // Enforce a maximum line length
    'max-len': [2, 140, 2, {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    // Enforce a maximum file length
    'max-lines': 0,

    // Enforce a maximum function length
    'max-lines-per-function': 0,

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 0,

    // Enforce a maximum number of parameters in function definitions
    'max-params': 0,

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': 0,

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': 0,

    // Enforce a particular style for multiline comments
    'multiline-comment-style': 0,

    // Enforce or Disallow newlines between operands of ternary expressions
    'multiline-ternary': 0,

    // Require constructor names to begin with a capital letter
    'new-cap': [2, { newIsCap: true, capIsNew: false }],

    // Require parentheses when invoking a constructor with no arguments
    'new-parens': 2,

    // Require a newline after each call in a method chain
    'newline-per-chained-call': [1, { ignoreChainWithDepth: 4 }],

    // Disallow `Array` constructors
    'no-array-constructor': 2,

    // Disallow bitwise operators
    'no-bitwise': 0,

    // Disallow continue statements
    'no-continue': 0,

    // Disallow inline comments after code
    'no-inline-comments': 0,

    // Disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': 2,

    // Disallow mixes of different operators
    'no-mixed-operators': [1, {
      allowSamePrecedence: true,
      groups: [
        ['&&', '||'],
        ['&', '|', '<<', '>>', '>>>']
      ]
    }],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,

    // Disallow use of chained assignment expressions
    'no-multi-assign': 2,

    // Disallow multiple empty lines
    'no-multiple-empty-lines': 2,

    // Disallow negated conditions
    'no-negated-condition': 0,

    // Disallow nested ternary expressions
    'no-nested-ternary': 1,

    // Disallow `Object` constructors
    'no-new-object': 2,

    // Disallow the unary operators `++` and `--`
    'no-plusplus': 0,

    // Disallow specified syntax
    'no-restricted-syntax': 0,

    // Disallow all tabs
    'no-tabs': 2,

    // Disallow ternary operators
    'no-ternary': 0,

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': [2, { defaultAssignment: false }],

    // Disallow whitespace before properties
    'no-whitespace-before-property': 2,

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': [2, 'below'],

    // Enforce consistent line breaks inside braces
    'object-curly-newline': [2, {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true },
    }],

    // Enforce consistent spacing inside braces
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],

    // Enforce placing object properties on separate lines
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],

    // Enforce variables to be declared either together or separately in functions
    'one-var': [2, { var: 'never', const: 'never' }],

    // Require or Disallow newlines around variable declarations
    'one-var-declaration-per-line': [2, 'initializations'],

    // Require or Disallow assignment operator shorthand where possible
    'operator-assignment': [1, 'always'],

    // Enforce consistent linebreak style for operators
    'operator-linebreak': [2, 'before'],

    // Require or Disallow padding within blocks
    'padded-blocks': [2, 'never'],

    // Require or Disallow padding lines between statements
    'padding-line-between-statements': 0,

    // Disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 1,

    // Prefer use of an object spread over `Object.assign`
    'prefer-object-spread': 1,

    // Require quotes around object literal property names
    'quote-props': [2, 'consistent-as-needed'],

    // Enforce the consistent use of either backticks, double, or single quotes
    'quotes': [2, 'single', { avoidEscape: true }],

    // Require or Disallow semicolons instead of ASI
    'semi': [2, 'never'],

    // Enforce spacing before and after semicolons
    'semi-spacing': [2, { after: true, before: false }],

    // Enforce location of semicolons
    'semi-style': [2, 'last'],

    // Require object keys to be sorted
    'sort-keys': 0,

    // Enforce variable sorting
    'sort-vars': 0,

    // Require or Disallow space before blocks
    'space-before-blocks': [2, 'always'],

    // Require or Disallow a space before function parenthesis
    'space-before-function-paren': [2, 'always'],

    // Disallow or Enforce spaces inside of parentheses
    'space-in-parens': [2, 'never'],

    // Require spacing around infix operators
    'space-infix-ops': 2,

    // Require or Disallow spaces before/after unary operators
    'space-unary-ops': [2, { words: true, nonwords: false }],

    // Requires or Disallows a whitespace beginning a comment
    'spaced-comment': [2, 'always'],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': 2,

    // Require or Disallow spacing between template tags and their literals
    'template-tag-spacing': [2, 'never'],

    // Require or Disallow the Unicode Byte Order Mark
    'unicode-bom': [2, 'never'],

    // Require regex literals to be wrapped
    'wrap-regex': 0
  }
}
