import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '400px',
        tablet: '700px',
        laptop: '1024px',
        desktop: '1280px',
      },

      fontFamily: {
        sub: ['var(--font-pretendard)', 'var(--font-patua)', 'serif'],
        main: ['var(--font-sb)', 'var(--font-patua)', 'sans-serif'],
      },
      animation: {
        typing: 'typing 1.5s steps(7), blink 0.5s step-end infinite alternate',
        flip: 'flip 1s ease-in-out forwards',
        'flip-reverse': 'flipReverse 1s ease-in-out forwards',
      },

      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '7em' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },

        flip: {
          from: {
            transform: ' perspective(2500px) rotateY(0deg)',
          },
          to: {
            transform: ' perspective(2500px) rotateY(-180deg)',
          },
        },

        flipReverse: {
          from: {
            transform: ' perspective(2500px) rotateY(-180deg)',
          },
          to: {
            transform: ' perspective(2500px) rotateY(deg)',
          },
        },
      },

      colors: {
        baseBlack: '#000000',
        baseWhite: '#FFFFFF',
        mainBg: '#FFFFFF',
        subBg: '#000000',
        mainFont: '#000000',
        subFont: '#FFFFFF',
        headerColor: 'rgba(255,255,255,0.5)',
        lightGray: '#B1B1B1',
        darkGray: '#6D6D6D',
        backdrop: 'rgba(0,0,0,0.5)',
      },

      spacing: {
        mainH: '179.4375rem',
        '7em': '7em',
        '10em': '10em',
        '12em': '12em',
        '20rem': '20rem',
        '30rem': '30rem',
        '40rem': '40rem',
        '0.9rem': '0.9rem',
      },

      boxShadow: {
        headerShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
        AboutCardShadow: '5px 0px 8px -1px #555555',
        ProfileImageShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        ProjectCardShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      transitionProperty: {
        z: 'z-index',
        h: 'height',
      },
      transitionDelay: {
        2000: '2s',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.flip': {
          transform: 'rotateY(180deg)',
        },
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    }),
  ],
};
export default config;
