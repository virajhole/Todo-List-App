/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        // Add custom blur values if needed
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },

  plugins: [],
};
