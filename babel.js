module.exports = {
  extends: 'habitrpg/es6',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['babel'],
  rules: {
    'babel/new-cap': 2,
    'babel/object-shorthand': 2,
    'babel/no-await-in-loop': 2,
  },
};
