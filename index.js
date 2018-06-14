module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'smart'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-unexpected-multiline': 'error',
    'multiline-ternary': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/tests/**', '**/*.test.js', '**/*.spec.js'],
      },
    ],
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': ['error'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'error',
  },
  parser: 'babel-eslint',
  env: {
    mocha: true,
    browser: true,
  },
  globals: {
    __DEV__: true,
    __TEST__: true,
  },
}
