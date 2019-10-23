/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ],
  rules: {
    'space-before-function-paren': ['error', 'always'],
    'func-names': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'import/no-commonjs': 'error',
    'import/prefer-default-export': 'off',
  },
};
