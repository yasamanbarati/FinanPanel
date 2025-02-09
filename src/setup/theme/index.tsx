import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider as M_ThemeProvider,
  createTheme,
} from '@mui/material';
import { Card, CardContent, Chip, OutlinedInput } from './overrides';
import { palette } from './palette';

export default function ThemeProvider({ children }: ChildComponentProps) {
  //
  const themeOptions: ThemeOptions = {
    shape: { borderRadius: 4 },
    palette: palette,
    spacing: 2,
    typography: {
      h3: {
        fontSize: '2rem', //32px
        fontWeight: '700',
        lineHeight: '40.32px',
      },
      h4: {
        fontSize: '1.5rem', //24px
        fontWeight: '700',
        lineHeight: '30.24px',
        '@media (max-width: 667px)': {
          fontSize: '1.25rem',
          lineHeight: '180%',
        },
      },
      h5: {
        fontSize: '1.25rem', //20
        lineHeight: '140%',
        fontWeight: '700',
        '@media (max-width: 667px)': {
          fontSize: '1rem',
          lineHeight: '180%',
        },
      },
      h6: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '17.64px',
        textAlign: 'left',
      },
      body1: {
        fontSize: '1rem', //16
        lineHeight: '180%',
        fontWeight: '500',
        color: `${palette.black.dark}!important`,
        '@media (max-width: 667px)': {
          fontSize: '0.875rem',
          lineHeight: '180%',
          whiteSpace: 'nowrap',
        },
      },
      body2: {
        fontSize: '0.75rem', //12
        fontWeight: '600',
        lineHeight: '15.12px',
      },
      subtitle1: {
        fontSize: '0.625rem',
        fontWeight: '500',
        lineHeight: '15.12px',
        color: `${palette.black.dark}!important`,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        mobileM: 525,
        tabletM: 667,
        tablet: 768,
        md: 940,
        lg: 1025,
        xl: 1200,
        xxl: 1370,
      },
    },
  };

  const theme = createTheme(themeOptions);
  theme.components = {
    MuiCard: Card(theme),
    MuiChip: Chip(theme),
    MuiCardContent: CardContent(theme),
    MuiOutlinedInput: OutlinedInput(theme),
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
          whiteSpace: 'normal!important',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: 'none',
        },
      },
    },
  };

  return (
    <M_ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </M_ThemeProvider>
  );
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    mobileM: true;
    tabletM: true;
    tablet: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
