module.exports = {
  extends: '.',
  env: {
    mocha: true,
  },
  globals: {
    expect: true,
    sandbox: true,
    sinon: true,
  },
  plugins: ['mocha'],
  rules: {
    'one-var': 0,
    'func-names': 0,
    'max-nested-callbacks': 0,
    'no-unused-expressions': 0,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-global-tests': 2,
    'mocha/handle-done-callback': 2,
  },
};
