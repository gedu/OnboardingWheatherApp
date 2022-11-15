module.exports = {
  root: true,
  extends: ['@react-native-community/eslint-config'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'typescript-sort-keys', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'typescript-sort-keys/interface': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'expression'],
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['cjs-import', 'import'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['cjs-import', 'import'],
        next: ['cjs-import', 'import'],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: 1,
        ignoreExternal: true,
      },
    ],
    'import/exports-last': 2,
    'react-native/no-unused-styles': 2,
    quotes: ['error', 'single'],
  },
};
