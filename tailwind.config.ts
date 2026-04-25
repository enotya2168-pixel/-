import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        glass: "radial-gradient(circle at top, rgba(99,102,241,0.2), transparent 40%), radial-gradient(circle at bottom right, rgba(14,165,233,0.18), transparent 30%)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
