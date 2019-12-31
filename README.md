# @substantial/eslint-config

[![CircleCI](https://circleci.com/gh/substantial/eslint-config.svg?style=svg)](https://circleci.com/gh/substantial/eslint-config)

A base, hopefully non-controversial eslint config for our projects.

## Installation

```sh
$ yarn add --dev @substantial/eslint-config eslint-config-prettier eslint-plugin-prettier
```

For jest also run:

```sh
$ yarn add --dev eslint-plugin-jest
```

For react also run:

```sh
$ yarn add --dev eslint-config-react-app @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

Add this to your eslint config, leaving out any configs that do not apply to
your project:

```json
{
  "extends": [
    "@substantial/eslint-config",
    "@substantial/eslint-config/react",
  ],

  "overrides": [
    {
      "files": ["**/*.test.[jt]s?(x)"],
      "extends": [
          "@substantial/eslint-config/jest"
      ]
    }
  ]
}
```

## Details

### @substantial/eslint-config

Uses `eslint:recommended` as well as some of the TypeScript overrides from [eslint-config-react-app][]

### @substantial/eslint-config/react

Uses [eslint-config-react-app][]

### @substantial/eslint-config/jest

The usage guide assumes tests are in files ending in `.test.js` (or `jsx`, `ts`,
`tsx`), but you may change the files override to anything you like.

[eslint-config-react-app]: https://www.npmjs.com/package/eslint-config-react-app
