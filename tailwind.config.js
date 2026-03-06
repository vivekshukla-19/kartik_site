/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0a"
        },
        sand: {
          50: "#fbf8f2",
          100: "#f5efe4",
          200: "#ede2cf"
        },
        accent: {
          500: "#b45309"
        }
      },
      boxShadow: {
        soft: "0 10px 40px rgba(10,10,10,0.12)",
        lift: "0 16px 60px rgba(10,10,10,0.16)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

