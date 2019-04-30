[![npm version](https://badge.fury.io/js/%40marsbased%2Fmarstyle-angular.svg)](https://badge.fury.io/js/%40marsbased%2Fmarstyle-angular)
[![dependencies](https://david-dm.org/marsbased/marstyle?path=angular.svg)](https://david-dm.org/marsbased/marstyle?path=angular)

# marstyle-angular

Set of tslint rules for Angular projects.

It imports TypeScript rules from [@marsbased/marstyle-typescript](https://github.com/MarsBased/marstyle/tree/master/typescript)

It includes codelyzer rules.

## How to use?

Install the dependency

```shell
npm i @marsbased/marstyle-angular --save-dev
```

Use it from your tslint.json file

```json
{
  "extends": ["@marsbased/marstyle-angular"]
}
```

If you prefer you can overwrite some rules:

```json
{
  "extends": ["@marsbased/marstyle-angular"],
  "rules": {
    "adjacent-overload-signatures": false
  }
}
```
