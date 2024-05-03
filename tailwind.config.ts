import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        animateWave: {
          '0%': { transform: 'scale(1, 0)' },
          '100%': { transform: 'scale(1, 1)' }
        },
        moveForever: {
          '0%': { transform: 'translate3d(-90px, 0, 0)' },
          '100%': { transform: 'translate3d(85px, 0, 0)' }
        }
      },
      animation: {
        'wave': 'animateWave 1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'move-forever': 'moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
        'move-forever-fast': 'moveForever 7s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
        'move-forever-medium': 'moveForever 10s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
        'move-forever-slow': 'moveForever 13s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
        'move-forever-slowest': 'moveForever 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite'
      }
    },
  },
  plugins: [],
};
export default config;
