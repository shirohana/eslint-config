Changelog
=========

Unreleased
----------

[0.0.6] - 2021-08-11
--------------------

### Changed
- Modify 4 rules
      ##### ./configs/plugin-react.js
      ```diff
      - 'react/prefer-read-only-props': 1,
      + 'react/prefer-read-only-props': 2,

      - 'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
      + 'react/prefer-stateless-function': 2,

      - 'react/self-closing-comp': 1,
      + 'react/self-closing-comp': 2,

      - 'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],
      + 'react/jsx-curly-spacing': [2, { when: 'never', children: true }, { allowMultiline: true }],
      ```

[0.0.5] - 2021-07-25
--------------------

### Changed
- Modify 1 rule
      ##### ./configs/style.js
      ```diff
      - 'no-multiple-empty-lines': 2,
      + 'no-multiple-empty-lines': [2, { max: 1 }],
      ```
- Migrate new rules of `eslint-plugin-import` and `eslint-plugin-jest`

[0.0.4] - 2021-06-05
--------------------

### Added
- Enable JSX related rules in:
    - `@shirohana/eslint-config/react`

### Changed
- Ignore `camelcase` when match `/^_/`.


[0.0.3] - 2020-12-25
--------------------

### Added
- Create 1 new preset:
    - `@shirohana/eslint-config/jest`
- and remove 1 optional plugin:
    - `@shirohana/eslint-config/plugin-jest`

[0.0.2] - 2020-07-28
--------------------
> Upgrade lockfile due to [security vulnerability](https://github.com/shirohana/eslint-config/pull/1).

### Changed
- Modify 1 rule
    ##### ./configs/plugin-flowtype.js
    ```diff
    - 'flowtype/space-after-type-colon': 2,
    + 'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],
    ```

[0.0.1] - 2020-06-30
--------------------

### Added
- Create 3 main configs in different situation:
    - `@shirohana/eslint-config/babel-plugin`
    - `@shirohana/eslint-config/node-es6`
    - `@shirohana/eslint-config/react`
- and 2 optional plugins:
    - `@shirohana/eslint-config/plugin-ava`
    - `@shirohana/eslint-config/plugin-jest`

[0.0.3]: https://github.com/shirohana/eslint-config/releases/tag/v0.0.3
[0.0.2]: https://github.com/shirohana/eslint-config/releases/tag/v0.0.2
[0.0.1]: https://github.com/shirohana/eslint-config/releases/tag/v0.0.1
