Changelog
=========

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

[0.0.2]: https://github.com/shirohana/eslint-config/releases/tag/v0.0.2
[0.0.1]: https://github.com/shirohana/eslint-config/releases/tag/v0.0.1
