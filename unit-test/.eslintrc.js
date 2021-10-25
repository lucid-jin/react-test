module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'testing-library', 'jest-dom'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 130,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
