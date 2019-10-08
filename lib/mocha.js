module.exports = {
  env: {
    browser: false,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint-config-habitrpg/lib/defaults',
    'plugin:mocha/recommended',
  ],
};
