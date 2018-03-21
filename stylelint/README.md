[![npm version](https://badge.fury.io/js/%40marsbased%2Fmarstyle-stylelint.svg)](https://badge.fury.io/js/%40marsbased%2Fmarstyle-stylelint)

# marstyle-stylelint

Set of stylelint rules

## How to use?

Install the dependency

```shell
npm i @marsbased/marstyle-stylelint --save-dev
```

Use it from your .stylelintrc file

```json
{
  "extends": [
    "@marsbased/marstyle-stylelint"
  ]
}
```

If you prefer you can overwrite some rules:

```json
{
  "extends": [ "@marsbased/marstyle-stylelint" ],
  "rules": {
    "declaration-no-important": false
  }
}
```
