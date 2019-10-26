module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends:  [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',  
    'prettier/@typescript-eslint', 
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'arrow-body-style': [
      2,
      'as-needed'
    ],
    'comma-dangle': 0,
    'consistent-return': 0,
    'func-names': 0,
    'import': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/href-no-hash': 0,
    'max-len': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-param-reassign': [
      2,
      {
        'props': false
      }
    ],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-return-assign': [
      'error',
      'except-parens'
    ],
    'no-shadow': [
      2,
      {
        'hoist': 'all',
        'allow': [
          'resolve',
          'reject',
          'done',
          'next',
          'err',
          'error'
        ]
      }
    ],
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      2,
      {
        'allowTaggedTemplates': true
      }
    ],
    'no-unused-vars': [
      1,
      {
        'ignoreSiblings': true,
        'argsIgnorePattern': 'res|next|^err'
      }
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'all'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'trailingComma': 'es5',
        'singleQuote': true,
        'printWidth': 80
      }
    ],
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'radix': 0,
    'react/destructuring-assignment': 0,
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.ts',
          '.tsx'
        ]
      }
    ],
    'react/jsx-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'space-before-function-paren': 0
  },
  settings:  {
    react:  {
      version:  'detect', 
    },
  },
};
