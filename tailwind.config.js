module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#39b6d4',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      backgroundColor: ['responsive', 'hover', 'focus'],
      borderColor: ['responsive', 'hover', 'focus'],
      display: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexWrap: ['responsive'],
      height: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      overflow: ['responsive'],
      padding: ['responsive'],
      textColor: ['responsive', 'hover', 'focus'],
      textDecoration: ['hover', 'focus'],
      width: ['responsive'],
      tableLayout: ['responsive', 'hover', 'focus'],
      borderColors: ['responsive', 'hover', 'focus', 'group-hover'],
      visibility: ['responsive', 'group-hover'],
    },
  },
  plugins: [],
}
