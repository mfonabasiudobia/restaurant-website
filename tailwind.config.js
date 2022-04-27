module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
        backgroundImage : {
          'intro' : "url('/public/images/page_title.jpg')",
        },
        animation : {
          'spin-slow' : 'spin 10s linear infinite'
        },
      colors: {
        green : {
          200 : '#00a398'
        },
        orange : {
          500 : '#FF5100'
        },
        yellow : {
          500 : '#e9b947',
        }
      }
    },
  },
  plugins: [],
}
