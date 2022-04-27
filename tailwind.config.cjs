module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        sk: '#046DBF',
        c1: '#099DBA',
        c2: '#33D9DA',
        c3: '#BDF8F9',
        c4: '#F3FEFE',
        c5: '#474551',
      },
      fontFamily:{
        'gilroy-700' : ['Gilroy-Bold', 'sans-serif'],
        'gilroy-600' : ['Gilroy-Semi-Bold', 'sans-serif'],
        'gilroy-500' : ['Gilroy-Medium', 'sans-serif'],
        'gilroy-400' : ['Gilroy-Regular', 'sans-serif'],
      }
    }
  },
  plugins: []
};