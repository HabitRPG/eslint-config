habitrpg-eslint-config
===
Shared linting configuration for [HabitRPG, Inc](https://github.com/HabitRPG) projects.

## Version 5
- [index.js](./index.js): link to node.js configuration
- [node.js](./node.js): configuration for server side and Node.js projects
- [vue.js](./vue.js): configuration for Vue.js projects

A set of reusable ESLint rules based on [Airbnb JavaScript Style Guide() {](https://github.com/airbnb/javascript).

Information about installation and usage can be found at http://eslint.org/docs/developer-guide/shareable-configs.

### node

```json
{
  "extends": "habitrpg/node",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### vue

For usage see https://github.com/vuejs/eslint-plugin-vue. Right now all reccomended rules are enabled.

```json
{
  "extends": "habitrpg/vue",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

## Version 4 (currently in use for habitica.com)

- [index.js](./index.js): base configuration
- [server.js](./server.js): special rules for code on the server
- [browser.js](./browser.js): special rules for code on the browser
- [es6.js](./es6.js): special rules for es6 code
- [babel.js](./babel.js): inherits from es6 and adds babel specific rules
- [mocha.js](./mocha.js): special rules for the moch test framework

### Consuming

Install the module

```bash
npm i -D habitrpg-eslint-config
```

In your project's `.eslintrc`:

### default

```json
{
  "extends": "habitrpg",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### browser/browserify

```json
{
  "extends": "habitrpg/browser",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### mocha

**Note:** The mocha config requires you to install [eslint-plugin-mocha](http://npmjs.com/eslint-plugin-mocha)

```bash
npm install -D eslint-plugin-mocha eslint-config-habitrpg
```

```json
{
  "extends": "habitrpg/mocha",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### esnext

This version is meant to be used with code written in ES6+ (babel is ok). 
It will currently parse code according to ecmaScript version 7.

---

You can specify a `.eslintrc` for a subdirectory to change the rules that are enforced. For instance, in a node project you could extend from `habitrpg/server` at the top-level, `habitrpg/mocha` in your `test/.eslintrc` and `habitrpg/browser` at the `browser-files/.eslintrc` level.
