module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "eslint:recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["@emotion", "@typescript-eslint", "import", "jsx-a11y", "prettier", "react-hooks"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    // turn on errors for missing imports
    "import/no-unresolved": "error",
    // "react/prop-types": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "@emotion/pkg-renaming": "error",
    "@emotion/jsx-import": "error",
    quotes: "off",
    "@typescript-eslint/quotes": [
      "error",
      // 2,
      // "quotes",
      // {
      //   avoidEscape: true,
      // },
    ],
    "max-len": ["error", 80, 2],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        printWidth: 80,
        useTabs: false,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": ["error", { allowTypedFunctionExpressions: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
}
