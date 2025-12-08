import traxionPreset from "@traxion-global/design-system/tailwind-preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [traxionPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@traxion-global/design-system/**/*.{js,ts,jsx,tsx}"
  ]
};