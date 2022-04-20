module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin: @typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
