'use client';

import { PaletteColor, PaletteColorOptions } from '@mui/material';

export const palette = {
  neutral: {
    main: '#FBFBFB',
    dark: '#9096A2',
    light: '#DFEAF280',
  },
  primary: {
    main: '#FB8500',
  },
  secondary: {
    main: '#376DA4',
  },
  error: {
    main: '#DD6B5C',
    light: '#E2B6B6',
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
  },
};
declare module '@mui/material/styles' {
  interface Palette {
    neutral: PaletteColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    black: PaletteColor;
   
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
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
    error: true;
    success: true;
    black: true;
  }
}
