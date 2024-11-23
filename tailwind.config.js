module.exports = {
  content: [
<<<<<<< HEAD
    
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  plugins: [
    
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
  
    },
  },
=======
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Source Sans Pro"', 'sans-serif'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
>>>>>>> 911d7cf (Inicio limpio sin credenciales)
}



