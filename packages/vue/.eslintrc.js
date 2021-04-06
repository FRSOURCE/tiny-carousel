module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/essential',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-undef': 'off'
  }
}
