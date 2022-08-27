const tsOption = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@(?:navigators|screens)(.*)$',
    '^@(?:components|atoms|molecules|organisms|templates|templates)(.*)$',
    '^@(?:assets|data|constants|lib|styles|utils|types|config|recoilState|api)(.*)$',
    '^[./]',
  ],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        ...tsOption,
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        ...tsOption,
        printWidth: 80,
      },
    },
    {
      files: '*.{css,scss}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 2,
      },
    },
  ],
};
