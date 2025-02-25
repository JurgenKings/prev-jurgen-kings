import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-hover": "#e5e7eb",
        "bg-primary": "#f9fafb", 
        "bg-darker": "#9ca3af",  
        "text-darker": "#9ca3af",
        "text-primary": "#363b45",  
        "text-secondary": "#6b7280",
        "text-hover": "#e5e7eb",

        "dark-bg-hover": "#1f2937",
        "dark-bg-primary": "#111827",  
        "dark-bg-darker": "#1f2937",  
        "dark-text-darker": "#1f2937",
        "dark-text-primary": "#e5e7eb",  
        "dark-text-secondary": "#e5e7eb",
        "dark-text-hover": "#e5e7eb",
      },
    },
  },
  plugins: [],
} satisfies Config
