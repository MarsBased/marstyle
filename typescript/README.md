[![npm version](https://badge.fury.io/js/%40marsbased%2Fmarstyle-typescript.svg)](https://badge.fury.io/js/%40marsbased%2Fmarstyle-typescript)
[![dependencies](https://david-dm.org/marsbased/marstyle?path=typescript.svg)](https://david-dm.org/marsbased/marstyle?path=typescript)

# marstyle-typescript

Set of tslint rules

## How to use?

Install the dependency

```shell
npm i @marsbased/marstyle-typescript --save-dev
```

Use it from your tslint.json file

```json
{
  "extends": ["@marsbased/marstyle-typescript"]
}
```

If you prefer you can overwrite some rules:

```json
{
  "extends": ["@marsbased/marstyle-typescript"],
  "rules": {
    "adjacent-overload-signatures": false
  }
}
```
