module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
  },
  globals: {
    localStorage: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
