import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-c1": "#121212",
        "black-c2": "#050505",
        "black-c3": "#333333",
        "black-c4": "rgb(55, 53, 47)",
        "blue-c1": "#0081f2",
        "blue-c2": "#eaf2ff",
        "blue-c3": "#045ac4",
        "blue-c4": "#0a85d1",
        "purple-c1": "#9d34da",
        "purple-c2": "#6e239a",
        "gray-c1": "#999999",
        "gray-c2": "#f7f7f5",
        "gray-c3": "rgba(55, 53, 47, 0.09)",
        "gray-c4": "rgba(55, 53, 47, 0.65)",
        "gray-c5": "#5f5e5b",
        "yellow-c1": "#faa700",
        "yellow-c2": "#d68f00",
        "red-c1": "#ea4e43",
        "red-c2": "#a7271b",
        "orange-c1": "#f8792a",
        "orange-c2": "#e75e08",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
