module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    // ESLint
    eqeqeq: ["error", "always"],
    "max-len": [
      1,
      80,
      2,
      {
        ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
        ignoreUrls: true,
      },
    ],

    // Import Plugin
    "import/default": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/newline-after-import": "error",
    "import/no-unassigned-import": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "object",
        ],
        pathGroups: [
          { pattern: "@angular/**", group: "builtin" },

          { pattern: "@shared/**", group: "internal" },
          { pattern: "@core/**", group: "internal" },
          { pattern: "@env/**", group: "internal" },
          { pattern: "@app/**", group: "internal" },
          { pattern: "@assets/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: [],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // @typescript-eslint (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "static-field",
          "instance-field",
          "static-method",
          "constructor",
          "public-instance-method",
          "private-instance-method",
        ],
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "default", format: ["camelCase"] },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
      },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "enumMember", format: ["PascalCase", "UPPER_CASE"] },
    ],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowShortCircuit: true },
    ],
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        caughtErrors: "none",
      },
    ],
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/typedef": [
      "warn",
      {
        memberVariableDeclaration: false,
        arrowParameter: true,
        parameter: true,
        propertyDeclaration: true,
      },
    ],
    "@typescript-eslint/unbound-method": "off",
  },
};
