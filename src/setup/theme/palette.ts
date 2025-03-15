'use client';

import { PaletteColor, PaletteColorOptions } from '@mui/material';

export const palette = {
  neutral: {
    main: '#FBFBFB',
    dark: '#9096A2',
    light: '#DFEAF280',
  },
  primary: {
    main: '#53389E',
    light: '#6941C6',
  },
  secondary: {
    main: '#939393',
    contrastText: '#CCCCCE',
    light: '#FBFBFB',
  },
  info: {
    main: '#376DA4',
  },
  error: {
    main: '#DD6B5C',
    light: '#E2B6B6',
    dark: '#DD331D',
  },
  success: {
    main: '#98C729',
    light: '#B6CAAE',
  },
  warning: {
    main: '#E8B93F',
    light: '#EBDCB3',
  },
  black: {
    dark: '#3F3F46',
    main: '#18181B',
    light: '#CBCAD7',
    contrastText: '#667085',
  },
  borderBG: '#E0E0E0',
};
declare module '@mui/material/styles' {
  interface Palette {
    neutral: PaletteColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    info: PaletteColor;
    error: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    black: PaletteColor;
    borderBG: string;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    info?: PaletteColorOptions;
    error?: PaletteColorOptions;
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    primary: true;
    secondary: true;
    info: true;
    error: true;
    success: true;
    black: true;
  }
}
