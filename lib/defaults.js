module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ],
  rules: {
    'space-before-function-paren': ['error', 'always'],
    'func-names': 'error',
    'arrow-parens': ['error', 'as-needed'],
  },
};
