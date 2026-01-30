'use-client'
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      content: string;
      redLight: string;
      shopOrange: string;
      shopBlue: string;
      shopEquine: string;
      shopBleeder: string;
    }
  }
  interface PaletteOptions {
    custom?: {
      content?: string;
      redLight?: string;
      shopOrange?: string;
      shopBlue?: string;
      shopEquine?: string;
      shopBleeder?: string;
    }
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1406,
      xl: 1406,
    },
  },
  palette: {
    primary: { main: "#DF3F44" }, // red
    common: { black: "#000", white: "#fff" },
    text: { primary: "#414142" }, // content
    custom: {
      content: "#414142",
      redLight: "#FFE0E0",
      shopOrange: "#F58220",
      shopBlue: "#00B0AD",
      shopEquine: "#9E3023",
      shopBleeder: "#663179",
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: { fontFamily: "'Lufga', 'Montserrat', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Lufga', 'Montserrat', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Lufga', 'Montserrat', sans-serif", fontWeight: 600 },
    h4: { fontFamily: "'Lufga', 'Montserrat', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Lufga', 'Montserrat', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Lufga', 'Montserrat', sans-serif", fontWeight: 600 },
  },
});

export default theme;
