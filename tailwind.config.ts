import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF8C00', // Custom luxury orange
        },
        white: {
          DEFAULT: '#FFFFFF', // Pure white for luxury feel
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'scale-up': 'scaleUp 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});

/
 * Tailwind CSS configuration for luxury LRP cosmetics.
 * 
 * This configuration extends the default Tailwind theme to include a custom 
 * orange color that aligns with the luxury branding of "luxury LRP cosmetics".
 * Additionally, it introduces elegant animations for a high-end user experience.
 * 
 * Key Features:
 * - Custom orange and white color scheme to reflect the luxury cosmetics brand.
 * - Luxurious animations for smooth transitions and effects.
 * 
 * @see https://tailwindcss.com/docs/configuration for more information on Tailwind config
 */