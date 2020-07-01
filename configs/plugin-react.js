module.exports = {
  plugins: [
    'react'
  ],
  settings: {
    'react': {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': 0,

    // Forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 0,

    // Enforce all defaultProps are defined and not "required" in propTypes
    'react/default-props-match-prop-types': 0,

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': 0,

    // Prevent missing displayName in a React component definition
    'react/display-name': 2,

    // Forbid certain props on components
    'react/forbid-component-props': 0,

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 0,

    // Forbid certain elements
    'react/forbid-elements': 0,

    // Forbid using another component's propTypes
    'react/forbid-foreign-prop-types': 0,

    // Forbid certain propTypes
    'react/forbid-prop-types': 0,

    // Standardize the way function component get defined (fixable)
    'react/function-component-definition': 0,

    // Reports when this.state is accessed within setState
    'react/no-access-state-in-setstate': 0,

    // Prevent adjacent inline elements not separated by whitespace
    'react/no-adjacent-inline-elements': 0,

    // Prevent usage of Array index in keys
    'react/no-array-index-key': 0,

    // Prevent passing of children as props
    'react/no-children-prop': 2,

    // Prevent usage of dangerous JSX props
    'react/no-danger': 0,

    // Report when a DOM element is using both children and dangerouslySetInnerHTML
    'react/no-danger-with-children': 2,

    // Prevent usage of deprecated methods
    'react/no-deprecated': 2,

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 0,

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 0,

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 2,

    // Prevent usage of isMounted
    'react/no-is-mounted': 2,

    // Prevent multiple component definition per file
    'react/no-multi-comp': 0,

    // Flag shouldComponentUpdate when extending PureComponent
    'react/no-redundant-should-component-update': 1,

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 2,

    // Prevent usage of setState
    'react/no-set-state': 0,

    // Prevent string definitions for references and prevent referencing this.refs
    'react/no-string-refs': 2,

    // Report "this" being used in stateless components
    'react/no-this-in-sfc': 0,

    // Prevent common typos
    'react/no-typos': 0,

    // Detect unescaped HTML entities, which might represent malformed tags
    'react/no-unescaped-entities': 2,

    // Prevent usage of unknown DOM property (fixable)
    'react/no-unknown-property': 2,

    // Prevent usage of unsafe lifecycle methods
    'react/no-unsafe': 1,

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 0,

    // Prevent definition of unused state fields
    'react/no-unused-state': 0,

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 0,

    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 2,

    // Require read-only props. (fixable)
    'react/prefer-read-only-props': 1,

    // Enforce stateless components to be written as a pure function
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],

    // Prevent missing props validation in a React component definition
    'react/prop-types': 0,

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 0,

    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2,

    // Prevent extra closing tags for components without children (fixable)
    'react/self-closing-comp': 1,

    // Enforce component methods order
    'react/sort-comp': [2, {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'getters',
        'setters',
        // 'instance-methods',
        'everything-else',
        'rendering'
      ],
      groups: {
        lifecycle: [
          'state',
          'constructor',
          'getDerivedStateFromProps',
          'getSnapshotBeforeUpdate',
          'componentDidCatch',
          'componentDidMount',
          'componentDidUpdate',
          'componentWillUnmount',
          'shouldComponentUpdate'
        ],
        'everything-else': [
          '/^dispatch./',
          '/^(?!dispatch|on|emit)./',
          '/^on./',
          '/^emit./'
        ],
        rendering: [
          '/^render./',
          'render'
        ]
      }
    }],

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 0,

    // State initialization in an ES6 class component should be in a constructor
    'react/state-in-constructor': 0,

    // Defines where React component static properties should be positioned
    'react/static-property-placement': 0,

    // Enforce style prop value is an object
    'react/style-prop-object': 2,

    // Prevent passing of children to void DOM elements (e.g. <br />)
    'react/void-dom-elements-no-children': 2

    // No JSX, we use Pug
  }
}
