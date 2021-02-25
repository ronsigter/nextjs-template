import { theme as chakraTheme } from '@chakra-ui/react'

const customColors = {
  brandGreen500: '#C8DA2B',
  brandBlue500: '#226A87',
  brandRed500: '#F23470',
  brandGray500: '#979797',
  textWhite: '#FFFFFF',
  textBlack: '#000000',
}

const customSizes = {
  half: '50%',
  '4xs': '12rem',
  '5xs': '10rem',
  '6xs': '8rem',
  '1xxs': '6rem',
  '2xxs': '4rem',
  '3xxs': '3rem',
  'section-maxWidth': '1440px',
  logo: '150px',
  transactionMD: '600px',
  transactionLG: '800px',
  transactionXL: '958px',
}

const customLineHeights = {
  heading: '1.1',
}

const customLetterSpacings = {
  heading: '0',
}

const breakpointTypes = {
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const breakpoints = Object.assign(Object.values(breakpointTypes), breakpointTypes)

const customFonts = {
  heading:
    'Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  heading400:
    'Montserrat Medium,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  heading700:
    'Montserrat Bold,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  subheading:
    'Intel Clear,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  subtext:
    'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
}

const customSpace = {
  'section-mb-base': '80px',
  'section-mb-md': '200px',
  'section-mb-xl': '200px',
}

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    ...customColors,
  },
  fonts: {
    ...chakraTheme.fonts,
    ...customFonts,
  },
  breakpoints,
  sizes: {
    ...chakraTheme.sizes,
    ...customSizes,
  },
  lineHeights: {
    ...chakraTheme.lineHeights,
    ...customLineHeights,
  },
  letterSpacings: {
    ...chakraTheme.letterSpacings,
    ...customLetterSpacings,
  },
  space: {
    ...chakraTheme.space,
    ...customSpace,
  },
}
export default theme
