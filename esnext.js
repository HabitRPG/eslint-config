module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
  },
  rules: {
    'arrow-spacing': 2,
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'generator-star-spacing': 0,
    'no-await-in-loop': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-template': 2,
  },
};