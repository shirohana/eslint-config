module.exports = {
  plugins: [
    'import'
  ],
  settings: {
    'import/internal-regex': '~'
  },
  rules: {
    // Static analysis
    ...{
      // Ensure imports point to a file/module that can be resolved
      // We use Flow to check unresolved imports
      'import/no-unresolved': 0,

      // Ensure named imports correspond to a named export in the remote file
      'import/named': 2,

      // Ensure a default export is present, given a default import
      'import/default': 2,

      // Ensure imported namespaces contain dereferenced properties as they are dereferenced
      'import/namespace': 0,

      // Restrict which files can be imported in a given folder
      'import/no-restricted-paths': 0,

      // Forbid import of modules using absolute paths
      'import/no-absolute-path': 2,

      // Forbid require() calls with expressions
      'import/no-dynamic-require': 1,

      // Prevent importing the submodules of other modules
      'import/no-internal-modules': 0,

      // Forbid webpack loader syntax in imports
      'import/no-webpack-loader-syntax': 2,

      // Forbid a module from importing itself
      'import/no-self-import': 2,

      // Forbid a module from importing a module with a dependency path back to itself
      'import/no-cycle': 2,

      // Prevent unnecessary path segments in import and require statements
      'import/no-useless-path-segments': 2,

      // Forbid importing modules from parent directories
      'import/no-relative-parent-imports': 0,

      // Forbid modules without any export, and exports not imported by any modules
      'import/no-unused-modules': 1
    },

    // Helpful warnings
    ...{
      // Report any invalid exports, i.e. re-export of the same name
      'import/export': 2,

      // Report use of exported name as identifier of default export
      'import/no-named-as-default': 2,

      // Report use of exported name as property of default export
      'import/no-named-as-default-member': 2,

      // Report imported names marked with @deprecated documentation tag
      'import/no-deprecated': 0,

      // Forbid the use of extraneous packages
      'import/no-extraneous-dependencies': 0,

      // Forbid the use of mutable exports with var or let
      'import/no-mutable-exports': 2,

      // Report modules without exports, or exports without matching import in another module
      'import/no-unused-modules': 0
    },

    // Module systems
    ...{
      // Report potentially ambiguous parse goal (script vs. module)
      'import/unambiguous': 0,

      // Report CommonJS require calls and module.exports or exports.*
      'import/no-commonjs': 0,

      // Report AMD require and define calls
      'import/no-amd': 0,

      // No Node.js builtin modules
      'import/no-nodejs-modules': 0
    },

    // Style guide
    ...{
      // Ensure all imports appear before other statements
      'import/first': 2,

      // Ensure all exports appear after other statements
      'import/exports-last': 0,

      // Report repeated import of the same module in multiple places
      'import/no-duplicates': 2,

      // Forbid namespace (a.k.a. "wildcard" *) imports
      'import/no-namespace': 0,

      // Ensure consistent use of file extension within the import path
      'import/extensions': 0,

      // Enforce a convention in module import order
      'import/order': [2, {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
        ]
      }],

      // Enforce a newline after import statements
      'import/newline-after-import': 2,

      // Prefer a default export if module exports a single name
      'import/prefer-default-export': 0,

      // Limit the maximum number of dependencies a module can have
      'import/max-dependencies': 0,

      // Forbid unassigned imports
      'import/no-unassigned-import': 0,

      // Forbid named default exports
      'import/no-named-default': 2,

      // Forbid default exports
      'import/no-default-export': 0,

      // Forbid named exports
      'import/no-named-export': 0,

      // Forbid anonymous values as default exports
      'import/no-anonymous-default-export': 0,

      // Prefer named exports to be grouped together in a single export declaration
      'import/group-exports': 0,

      // Enforce a leading comment with the webpackChunkName for dynamic imports
      'import/dynamic-import-chunkname': 0
    }
  }
}
