module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'monorepo',
  ],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:eslint-comments/recommended'
  ],
  overrides: [
    {
      files: ['**.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: [
          './tsconfig.json',
          './packages/*/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    },
    {
      files: ['**/*.spec.ts'],
      plugins: ['jest'],
      rules: {
        // allow console logs in tools and tests
        'no-console': 'off',
      },
    },
  ],
};
