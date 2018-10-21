module.exports = {
  // Order matters, since some packages redefined common TSLint rules
  extends: [
    'tslint-microsoft-contrib',
    'tslint:latest',
    'tslint-consistent-codestyle',
    'tslint-eslint-rules-recommended',
    'tslint-config-prettier'
  ],
  rules: {
    // Overwrite or declare tslint:latest rules.
    // style rules similar to prettier are not included
    'array-type': [true, 'array'],
    'ban-comma-operator': true,
    'ban-types': [
      true,
      ['Array', 'Avoid using the `Array` type. Did you mean `[]`?'],
      ['Object', 'Avoid using the `Object` type. Did you mean `{}`?'],
      ['String', 'Avoid using the `String` type. Did you mean `string`?'],
      ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?']
    ],
    'cyclomatic-complexity': [true, 20],
    'import-blacklist': [true, 'rxjs'],
    'member-access': [true, 'no-public'],
    'member-ordering': [
      true,
      {
        order: [
          'static-field',
          'instance-field',
          'static-method',
          'public-constructor',
          'public-instance-method',
          'private-instance-method'
        ]
      }
    ],
    'newline-before-return': true,
    'no-duplicate-imports': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-dynamic-delete': true,
    'no-implicit-dependencies': true,
    'no-invalid-this': true,
    'no-magic-numbers': [true, -1, 1, 0, 10],
    'no-parameter-reassignment': true,
    'no-redundant-jsdoc': true,
    'no-require-imports': true,
    'no-return-await': true,
    'no-submodule-imports': false,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-class': true,
    'no-unnecessary-type-assertion': true,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'no-unused-variable': true,
    'object-literal-sort-keys': false,
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'case-insensitive',
        'named-imports-order': 'any'
      }
    ],
    'prefer-function-over-method': [true, 'allow-public'],
    'prefer-method-signature': true,
    'prefer-readonly': true,
    'prefer-template': [true, 'allow-single-concat'],
    'prefer-while': true,
    'switch-default': true,
    'triple-equals': true,
    /*
    * typedef rule deactivated -> Waiting for an alternative:
    *
    * Right now typedef doesn't check if an inferred type is available. 
    * Enabling this rule will cause lots of false warnings.
    */
    typedef: false,

    // tslint-consistent-codestyle
    'no-collapsible-if': true,
    'no-return-undefined': true,
    'no-unnecessary-else': true,
    'no-unnecessary-type-annotation': true,
    'no-unused': true,
    'no-var-before-return': true,
    'object-shorthand-properties-first': false,

    // tslint-microsoft-contrib
    'export-name': false,
    'missing-jsdoc': false,
    'no-relative-imports': false
  }
};
