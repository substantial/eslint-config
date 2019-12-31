# @substantial/eslint-config

A base, hopefully non-controversial eslint config for our projects.

## Installation

```sh
$ yarn add --dev @substantial/eslint-config
```

## Usage

Add this to your eslint config, leaving out any configs that do not apply to
your project:

```json
{
  "extends": [
    "@substantial/eslint-config",
    "@substantial/eslint-config/react",
    "@substantial/eslint-config/jest"
  ]
}
```

## Details

### @substantial/eslint-config

Uses `eslint:recommended` as well as some of the TypeScript overrides from [eslint-config-react-app][]

### @substantial/eslint-config/react

Uses [eslint-config-react-app][]

### @substantial/eslint-config/jest

Assumes tests are in files ending in `.test.js` (or `jsx`, `ts`, `tsx`).

[eslint-config-react-app]: https://www.npmjs.com/package/eslint-config-react-app
