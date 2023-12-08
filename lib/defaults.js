/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'default-param-last': 'warn',
    'func-names': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'space-before-function-paren': ['error', 'always'],
  },
};
