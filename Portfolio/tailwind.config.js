/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'pb': '32rem'
      },
      width: {
        'g': '100rem'
      },
      backgroundImage: {
        'radial-dark': 'radial-gradient(closest-side, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'zinc-100': theme('colors.zinc.100'),
        'zinc-900': theme('colors.zinc.900'),
      }),
    },
    keyframes: {
      fade_in: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      },
      from_left: {
        '0%': { transform: 'translateX(-20%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      from_right: {
        '0%': { transform: 'translateX(20%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      fall_twinkle: {
        '0%': {transform : 'translateY(0px)', opacity: 0},
        '20%' : { opacity : 100},
        '80%': { opacity : 0},
        '100%': {transform : 'translateY(700px)'}
      },
      twinkle: {
        '0%': {opacity : 0},
        '50%': {opacity : 100},
        '100%': {opacity : 0},
      }
    },
    animation: {
      'spin-slow': 'spin 2s linear infinite',
      'fade-1': 'fade_in 0.5s ease-in forwards',
      'fade-2': 'fade_in 0.5s ease-in 0.4s forwards',
      'fade-3': 'fade_in 0.3s ease-in forwards',
      'fade-left': 'fade_in 0.7s ease-in 0.4s forwards, from_left 0.7s ease-in 0.4s forwards',
      'fade-right': 'fade_in 0.7s ease-in 0.4s forwards, from_right 0.7s ease-in 0.4s forwards',
      'star-fall': 'fall_twinkle 10s ease-in-out infinite',
      'star-twinkle': 'twinkle 10s ease-in-out infinite'
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-radial-light': {
          'background-image': 'radial-gradient(closest-side, rgba(243, 244, 246, 0.8) 20%, rgba(24, 24, 27, 1) 85%)',
        },
        '.bg-radial-dark': {
          'background-image': 'radial-gradient(closest-side, rgba(243, 244, 246, 0.4) 20%, rgba(24, 24, 27, 1) 100%)',
        },
      });
    },
  ]
}
