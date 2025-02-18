import antfu from "@antfu/eslint-config";

export default antfu(
  {
    ignores: ["node_modules", "dist", ".output", ".nuxt"],

    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },

    typescript: {
      tsconfigPath: "./tsconfig.json",
    },
  },
  {
    files: ["**/*.vue", "**/*.ts", "**/*.mjs"],
    rules: {
      // General
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "comma-dangle": ["error", "always-multiline"],
      "no-console": "warn",
      "unused-imports/no-unused-imports": "error",

      // Node
      "node/prefer-global/process": "off",
      "node/prefer-global/buffer": ["error", "always"],

      // Antfu overrides
      "antfu/no-import-dist": "off",

      // Stylistic
      "style/member-delimiter-style": ["error", {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
      }],

      // Vue
      "vue/max-attributes-per-line": ["error", {
        multiline: {
          max: 1,
        },
        singleline: {
          max: 1,
        },
      }],

      // TypeScript
      "ts/array-type": ["error", { default: "array-simple" }],
      "ts/strict-boolean-expressions": "off",
      "ts/no-unsafe-assignment": "off",
      "ts/no-unsafe-call": "off",
      "ts/no-unsafe-member-access": "off",
      "ts/no-unsafe-return": "off",
      "ts/no-unsafe-argument": "off",
      "unicorn/consistent-function-scoping": "off",
    },
  },
);
