/** @type {import('tailwindcss').Config} */
module.exports = {
  // include app and components so NativeWind can process your classes
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
