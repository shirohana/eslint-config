module.exports = {
  plugins: [
    'promise'
  ],
  rules: {
    // Enforce the use of catch() on un-returned promises
    'promise/catch-or-return': 0,

    // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
    'promise/no-return-wrap': 2,

    // Enforce consistent param names and ordering when creating new promises
    'promise/param-names': 2,

    // Return inside each then() to create readable and reusable Promise chains
    'promise/always-return': 0,

    // In an ES5 environment, make sure to create a Promise constructor before using
    'promise/no-native': 0,

    // Avoid nested then() or catch() statements
    'promise/no-nesting': 1,

    // Avoid using promises inside of callbacks
    'promise/no-promise-in-callback': 1,

    // Avoid calling cb() inside of a then() (use nodeify instead)
    'promise/no-callback-in-promise': 1,

    // Avoid creating new promises outside of utility libs (use pify instead)
    'promise/avoid-new': 0,

    // Avoid calling new on a Promise static method
    'promise/no-new-statics': 2,

    // Disallow return statements in finally()
    'promise/no-return-in-finally': 2,

    // Ensure the proper number of arguments are passed to Promise functions
    'promise/valid-params': 2,

    // Prefer await to then() for reading Promise value
    'promise/prefer-await-to-then': 0,

    // Prefer async/await to the callback pattern
    'promise/prefer-await-to-callbacks': 0
  }
}
