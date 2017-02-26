module.exports = {
  extends: 'habitrpg',
  env: {
    browser: true,
    commonjs: true,
  },
  globals: {
    global: false,
    console: false,
    debugger: false,
  },
  plugins: ['lodash'],
  rules: {
    'lodash/import-scope': [2, 'method'],
  },
};
