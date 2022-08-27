module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    // 'prettier,
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // 'no-console': 'error',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'jsx-quotes': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-native/no-inline-styles': 'off',
        'no-shadow': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
