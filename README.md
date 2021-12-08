# quick-alias

Configure alias for project once and maintain with ease.

## Introduction

Module alias is a way to get rid of notorious long relative import
statements like

```js
import MyAwesomeAPIRequest from '../../../../api/awesome'
```

With alias `@api` to `../../../../api`, we could write shorter and more
maintainable code,

```js
import MyAwesomeAPIRequest from '@api/awesome'
```

However, it is awfully painful work to make alias work, given current
JavaScript eco-system. There are tremendously many tools in a project, like
TypeScript compiler, Webpack, linters and testing framework. They have
their own way to specify an alias, like
[path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
for TS,
[eslint-import-resolver-alias](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
for eslint and so on.

It means we must configure every tools if we want to add an alias. It is
not the best practice in software development.

The package aims to ease the laborious work to config alias and makes you
configure once and alway only once is needed.

## Usage

Install with npm, yarn or your favorite package managers.

```bash
# with npm
npm install @ayase-lab/quick-alias --save-dev

# with yarn
yarn add @ayase-lab/quick-alias -D
```

Next, create a `js` file and export a pain object describing the map between
alias and its module like:

```js
// aliasrc.js
const path = require('path');

module.exports = {
  '@utils': path.join(__dirname, 'src/utils'),
  '@runtime': path.join(__dirname, 'src/runtime') 
}
```

It specifies 2 aliases, `@utils` to `src/utils` and `@runtime` to `src/runtime`.

Then let's create alias config in tools configuration file. E.g. `.eslintrc.js`
for eslint. modify it like

```js
const { configAliasForEslint } = require('@ayase-lab/quick-alias');
const AliasConfig = require('./aliasrc.js')

module.exports = {
  //...
  settings: {
    'import/resolver': {
      ...configAliasForEslint(AliasConfig)
    },
  },
};
```

Alias for eslint depends on package
[`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias).
Don't forget to install it.

We provide similar APIs to config all supported tools. If you want to know
how to configure them, see [API](#API).

From now, all you need is to add an entry in `aliasrc.js` when you want to
add an alias.

## API

There are supported tools supported now as listed below:

- `eslint`
- `snowpack`

### `configAliasForEslint(aliasConfig: UnifiedConfig): PartialEsLintImportResolverConfig`

Create `alias` option for `eslint-import-resolver-alias` based on given config.

Depend on [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)

#### Usage

1. Install `eslint-import-resolver-alias` via npm/yarn or any your favorite package manager.
2. Modify your `.eslintrc.js` like

```js
const { configAliasForEslint } = require('@ayase-lab/quick-alias');
const AliasConfig = require('./aliasrc.js')

module.exports = {
  //...
  settings: {
    'import/resolver': {
      ...configAliasForEslint(AliasConfig)
    },
  },
};
```

### `configAliasForSnowpack(aliasConfig: UnifiedConfig): SnowpackAliasConfig`

Create [`alias`](https://www.snowpack.dev/reference/configuration#alias) option for `snowpack`
based on given config.

#### Usage

1. Modify your `snowpack.config.js` like

```js
const { configAliasForSnowpack } = require('@ayase-lab/quick-alias');

module.exports = {
  ...configAliasInSnowpack(),
  //... other configurations
};
```
