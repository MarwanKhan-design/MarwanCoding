module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeLeft: 'fadeLeft 0.8s ease forwards',
        fadeRight: 'fadeRight 0.8s ease forwards 0.2s',
      },
    },
  },
};