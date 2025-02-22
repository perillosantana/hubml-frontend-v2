import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        default: "72rem",
      },
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    fontSize: {
      "6xl": ["5.5rem", "6.1875rem"],
      "5xl": ["5.125rem", "6rem"],
      "4xl": ["4.768rem", "6rem"],
      "3xl": ["3.815rem", "4.5rem"],
      "2xl": ["3.052rem", "4.5rem"],
      xl: ["2.441rem", "1.875rem"],
      lg: ["1.953rem", "1.875rem"],
      md: ["1.563rem", "1.875rem"],
      base: ["1.25rem", "1.875rem"],
      sm: ["1rem", "1.5rem"],
      xs: ["0.8rem", "1.5rem"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "ml-help": {
          "50": "#f1f9fe",
          "100": "#e3f1fb",
          "200": "#c0e4f7",
          "300": "#89cff0",
          "400": "#4ab6e6",
          "500": "#239dd4",
          "600": "#157eb4",
          "700": "#126592",
          "800": "#135579",
          "900": "#154865",
          "950": "#0e2e43",
        },
        "blue-gray": {
          "50": "#eceff1",
          "100": "#cfd8dc",
          "200": "#b0bec5",
          "300": "#90a4ae",
          "400": "#78909c",
          "500": "#607d8b",
          "600": "#546e7a",
          "700": "#455a64",
          "800": "#37474f",
          "900": "#263238",
        },
        "hub-grey": {
          "50": "#ffffff",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
        body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        whiten: "#F1F5F9",
        primary: "#0ea5e9",
        gray: {
          default: "#EFF4FB",
        },
        stroke: "#E2E8F0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
