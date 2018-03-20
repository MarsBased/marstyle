# Marstyle

Write code the Martian way (with style)!

MarsBased code linter rules for Ruby and Typescript.

## Rubocop install instructions

To add a martian .rubocop.yml into your project, download the file directly from Github executing this script in your Ruby project root folder:

```
curl https://raw.githubusercontent.com/MarsBased/marstyle/master/ruby/.rubocop.yml > .rubocop.yml
```

## Typescript install instructions

Typescript code linter rules are distributed as a npm package (https://www.npmjs.com/package/@marsbased/marstyle-typescript).

Install the dependency

`npm i @marsbased/marstyle-typescript --save-dev`

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

## Prettier install instructions

### Option 1

You can install it as a dependency

```shell
npm i @marsbased/marstyle-prettier --save-dev
```

Use it from your prettier.config.js file

```js
module.exports = require('@marsbased/marstyle-prettier');
```

### Option 2

To add the prettier configuration file to your project, download the file directly from Github executing this script in your project root folder:

```
curl https://raw.githubusercontent.com/MarsBased/marstyle/master/prettier/prettier.config.js > prettier.config.js
```
