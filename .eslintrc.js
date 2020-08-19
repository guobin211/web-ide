const OFF = 0
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'never'
    }],
    'array-callback-return': 'error',
    'react/prop-types': OFF,
    'no-var-requires': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/no-explicit-any': OFF
  }
}
