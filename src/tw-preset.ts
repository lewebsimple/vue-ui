import tailwindForms from "@tailwindcss/forms";
import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export const vueUiPreset = {
  content: [],
  plugins: [tailwindForms],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.indigo },
      },
    },
  },
} satisfies Config;
