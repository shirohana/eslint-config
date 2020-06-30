module.exports = {
  env: {
    node: true
  },
  rules: {
    // Enforce return after callback
    'callback-return': 1,

    // Enforce `require()` on the top-level module scope
    'global-require': 0,

    // Enforce callback error handling
    'handle-callback-err': 1,

    // Disallow use of the `Buffer()` constructor
    'no-buffer-constructor': 2,

    // Disallow `require` calls to be mixed with regular variable declarations
    'no-mixed-requires': 0,

    // Disallow `new require()`
    'no-new-require': 2,

    // Disallow string concatenation when using `__dirname` and `__filename`
    'no-path-concat': 2,

    // Disallow `process.env`
    'no-process-env': 0,

    // Disallow `process.exit()`
    'no-process-exit': 0,

    // Disallow Node.js modules
    'no-restricted-modules': 0,

    // Disallow synchronous methods
    'no-sync': 0
  }
}
