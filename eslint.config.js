import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

// Flat config does not support extend yet, so we need to do this to enable the Tailwindcss plugin.
const compat = new FlatCompat();

export default antfu(
  {
    ignores: ["node_modules", "dist", ".output", ".nuxt", "prisma/migrations"],

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
  ...compat.config({
    // TODO
    // extends: ["plugin:tailwindcss/recommended"],
    // rules: {
    //   "tailwindcss/no-custom-classname": ["warn", {
    //     whitelist: [
    //       "^(bg|border|ring|fill|divide|shadow|stroke|text|from|via|to|prose)-primary(-((50|100|200|300|400|500|600|700|800|900|950)(\/(5|10|15|20|25|30|35|40|45|50|55|60|65|70|75|80|85|90|95|100))?))?$",
    //       "shiny-button",
    //     ],
    //   }],
    //   "tailwindcss/migration-from-tailwind-2": "off",
    //   "tailwindcss/enforces-negative-arbitrary-values": "off",
    // },
  }),
);
