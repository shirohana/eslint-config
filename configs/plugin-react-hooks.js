module.exports = {
  plugins: [
    'react-hooks'
  ],
  rules: {
    // Enforce the rules of hooks
    'react-hooks/rules-of-hooks': 2,

    // Verify the list of dependencies for Hooks like useEffect and similar
    'react-hooks/exhaustive-deps': 2
  }
}
