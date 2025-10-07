import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js and TypeScript recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore unnecessary folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // Custom rule overrides
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];

export default eslintConfig;
