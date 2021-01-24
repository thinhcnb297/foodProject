module.exports = {
  root: true,
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    'prettier/prettier': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/prefer-stateless-function': 0,
    'no-underscore-dangle': 0,
    'no-useless-catch': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-props-no-spreading': 0,
    radix: 0,
    'no-restricted-globals': 0,
  },
};
