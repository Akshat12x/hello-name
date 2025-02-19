/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(265, 89%, 78%)", // Light purple
          foreground: "hsl(265, 89%, 20%)", // Dark purple for contrast
        },
        secondary: {
          DEFAULT: "hsl(265, 50%, 60%)", // Muted purple
          foreground: "hsl(265, 50%, 95%)", // Very light purple
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(265, 20%, 90%)", // Very light purple
          foreground: "hsl(265, 20%, 30%)", // Dark muted purple
        },
        accent: {
          DEFAULT: "hsl(265, 70%, 85%)", // Soft purple
          foreground: "hsl(265, 70%, 25%)", // Dark accent purple
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(265, 89%, 20%)", // Dark purple
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(265, 89%, 20%)", // Dark purple
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

