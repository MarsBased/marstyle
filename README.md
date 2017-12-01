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
  "extends": [
    "@marsbased/marstyle-typescript"
  ]
}
```

If you prefer you can overwrite some rules:

```json
{
  "extends": [ "@marsbased/marstyle-typescript" ],
  "rules": {
    "adjacent-overload-signatures": false
  }
}
```
