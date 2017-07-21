# marstyle-ts

Set of tslint rules

## How to use?

Install the dependency

```shell
npm i marstyle-typescript --save-dev
```

Use it from your tslint.json file

```json
{
  "extends": [ "marstyle-typescript" ]
}
```

If you prefer you can overwrite some rules:

```json
{
  "extends": [ "marstyle-typescript" ],
  "rules": {
    "adjacent-overload-signatures": false
  }
}
```
