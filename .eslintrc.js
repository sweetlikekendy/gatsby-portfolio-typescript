module.exports = {
  root: true,
  // globals: {
  //   // Gatsby Config
  //   __PATH_PREFIX__: true,
  // },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
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
    project: "tsconfig.js",
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
    // "@typescript-eslint/quotes": [
    //   "error",
    //   2,
    //   "backticks",
    //   {
    //     avoidEscape: true,
    //   },
    // ],
    semi: ["error", "always"],
    "prettier/prettier": ["error"],
    // "@typescript-eslint/explicit-function-return-type": [
    //   "error",
    //   { allowTypedFunctionExpressions: true, allowExpressions: true },
    // ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        // this loads <rootdir>/tsconfig.json to eslint
      } 
    }, 
      // typescript: { alwaysTryTypes: true, project: "./tsconfig.json" }, // this loads <rootdir>/tsconfig.json to eslint
      // node: {
      //   paths: [".", "app", "lib", "functions", "src"], //name the subproject folders here!!!
      //   extensions: [".js", ".jsx", ".ts", ".tsx"],
      // },
    },
  },
  // =================================
  // Overrides for Specific Files
  // =================================
  overrides: [
    // =================================
    // TypeScript Files
    // =================================
    {
      files: ["**/*.{ts,tsx}"],
      // allow ESLint to understand TypeScript syntax
      // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js#L10
      parserOptions: {
        // Lint with Type Information
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
      },

      extends: [
        // ESLint's inbuilt 'recommended' config
        "eslint:recommended",
        // Disables rules from the 'eslint:recommended' that are already covered by TypeScript's typechecker
        "plugin:@typescript-eslint/eslint-recommended",
        // Turns on rules from @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        // Lint with Type Information
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript",
        // Disable rules that conflict with Prettier
        // !!! Prettier must be last to override other configs
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      rules: {
        // This project uses TS. Disable prop-types check
        "react/prop-types": "off",
        // Allow snake_case due to inconsistent APIs
        "@typescript-eslint/camelcase": 0,
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        "@typescript-eslint/explicit-function-return-type": 0,
        // Reduce props spreading rule to a warning, not an error
        "react/jsx-props-no-spreading": 1,
        "no-restricted-imports": [
          "warn",
          {
            paths: [
              {
                name: "@emotion/css",
                message: 'Import from "@emotion/core" instead. import { css } from "@emotion/core"',
              },
            ],
          },
        ],
      },
    },
    // =================================
    // index.ts Files (Re-exporting a directory's files)
    // =================================
    {
      files: ["**/index.{js,ts,tsx}"],
      rules: {
        // Allow named exports in a directory's index files
        "import/prefer-default-export": 0,
      },
    },
    // =================================
    // Gatsby Files
    // =================================
    {
      files: ["**/**/gatsby-*.js"],
      rules: {
        "no-console": 0,
        // Allow import devDependencies in Gatsby files.
        "import/no-extraneous-dependencies": [
          2,
          {
            devDependencies: true,
            // Tells ESLint where the path to the folder containing package.json is for nested files like /plugin/**/gatsby-*.js
            packageDir: "./",
          },
        ],
        "react/no-danger": 0,
        "react/jsx-props-no-spreading": 0,
        // Allow 'jsx' in .js files
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "import/prefer-default-export": 0,
        // Append 'ts' and 'tsx' when importing files from a folder/index.ts
        "import/extensions": [
          baseImportsRules["import/extensions"][0],
          baseImportsRules["import/extensions"][1],
          {
            ...baseImportsRules["import/extensions"][2],
            ts: "never",
            tsx: "never",
          },
        ],
      },
    },
    // =================================
    // Test Files
    // =================================
    {
      files: ["**/test-utils/*.{js,ts,tsx}", "**/**/*.test.{js,ts,tsx}"],
      // Allow `jest` global
      extends: ["plugin:jest/recommended"],
      rules: {
        // Allow import devDependencies in tests
        "import/no-extraneous-dependencies": 0,
        "react/jsx-props-no-spreading": 0,
        "jsx-a11y/alt-text": 0,
      },
    },
    // =================================
    // Storybook Files
    // =================================
    {
      files: ["**/*.stories.{js,ts,tsx}"],
      rules: {
        // Allow import devDependencies in stories
        "import/no-extraneous-dependencies": 0,
        "react/jsx-props-no-spreading": 0,
        "jsx-a11y/alt-text": 0,
      },
    },
  ],
};
