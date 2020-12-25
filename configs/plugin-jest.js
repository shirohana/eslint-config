module.exports = {
  env: {
    'jest/globals': true
  },
  plugins: [
    'jest'
  ],
  rules: {
    // Have control over `test` and `it` usages
    'jest/consistent-test-it': [2, {
      fn: 'test',
      withinDescribe: 'it'
    }],

    // Enforce assertion to be made in a test body
    'jest/expect-expect': [2, {
      assertFunctionNames: ['expect']
    }],

    // Enforce lowercase test names
    'jest/lowercase-name': 0,

    // Disallow alias methods
    'jest/no-alias-methods': 2,

    // Disallow commented out tests
    'jest/no-commented-out-tests': 2,

    // Prevent calling `expect` conditionally
    'jest/no-conditional-expect': 2,

    // Disallow use of deprecated functions
    'jest/no-deprecated-functions': 2,

    // Disallow disabled tests
    'jest/no-disabled-tests': 1,

    // Avoid using a callback in asynchronous tests and hooks
    'jest/no-done-callback': 2,

    // Disallow duplicate setup and teardown hooks
    'jest/no-duplicate-hooks': 2,

    // Disallow using `exports` in files containing tests
    'jest/no-export': 2,

    // Disallow focused tests
    'jest/no-focused-tests': 2,

    // Disallow setup and teardown hooks
    'jest/no-hooks': 1,

    // Disallow identical titles
    'jest/no-identical-title': 2,

    // Disallow conditional logic
    'jest/no-if': 1,

    // Disallow string interpolation inside snapshots
    'jest/no-interpolation-in-snapshots': 2,

    // Disallow Jasmine globals
    'jest/no-jasmine-globals': 2,

    // Disallow importing Jest
    'jest/no-jest-import': 2,

    // disallow large snapshots
    'jest/no-large-snapshots': 0,

    // Disallow manually importing from `__mocks__`
    'jest/no-mocks-import': 2,

    // Disallow specific matchers & modifiers
    'jest/no-restricted-matchers': 0,

    // Disallow using `expect` outside of `it` or `test` blocks
    'jest/no-standalone-expect': 2,

    // Use `.only` and `.skip` over `f` and `x`
    'jest/no-test-prefixes': 2,

    // Disallow explicitly returning from tests
    'jest/no-test-return-statement': 2,

    // Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
    'jest/prefer-called-with': 0,

    // Suggest using `expect.assertions()` or `expect.hasAssertions()`
    'jest/prefer-expect-assertions': 0,

    // Suggest having hooks before any test cases
    'jest/prefer-hooks-on-top': 2,

    // Suggest using `jest.spyOn()`
    'jest/prefer-spy-on': 2,

    // Suggest using `toStrictEqual()`
    'jest/prefer-strict-equal': 0,

    // Suggest using `toBeNull()`
    'jest/prefer-to-be-null': 0,

    // Suggest using `toBeUndefined()`
    'jest/prefer-to-be-undefined': 0,

    // Suggest using `toContain()`
    'jest/prefer-to-contain': 0,

    // Suggest using `toHaveLength()`
    'jest/prefer-to-have-length': 0,

    // Suggest using `test.todo`
    'jest/prefer-todo': 2,

    // Require a message for `toThrow()`
    'jest/require-to-throw-message': 0,

    // Require test cases and hooks to be inside a `describe` block
    'jest/require-top-level-describe': 0,

    // Enforce valid `describe()` callback
    'jest/valid-describe': 0,

    // Enforce valid `expect()` usage
    'jest/valid-expect': 0,

    // Enforce having return statement when testing with promises
    'jest/valid-expect-in-promise': 0,

    // Enforce valid titles
    'jest/valid-title': 2
  }
}
