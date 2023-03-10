module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-debugger': 1,
    'no-bitwise': ['error', { allow: ['~'] }],
    'linebreak-style': 0,
    'func-names': ['warn', 'as-needed', { generators: 'as-needed' }],
    camelcase: [
      'warn',
      {
        properties: 'always',
      },
    ],
    'consistent-this': ['warn', 'self', 'that'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'as-needed'],
    'no-async-promise-executor': 0,
    'no-unresolved': 0,
    'import/no-unresolved': 0,
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0,
    'import/no-self-import': 0,
    'import/order': 0,
    'import/prefer-default-export': 'off',
    'object-curly-spacing': 1,
    'array-bracket-spacing': 1,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [0],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     semi: true,
    //     tabWidth: 2,
    //     quoteProps: 'as-needed',
    //     arrowParens: 'avoid',
    //     trailingComma: 'es5',
    //     bracketSpacing: true,
    //     bracketSameLine: false,
    //     singleQuote: true,
    //     printWidth: 160,
    //     useTabs: false,
    //   },
    // ],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'e'] }],
  },
};
