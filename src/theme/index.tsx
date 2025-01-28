import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider as M_ThemeProvider,
  createTheme,
} from '@mui/material';
import { Button, Card, CardContent, Chip, OutlinedInput } from './overrides';
import { palette } from './palette';

export default function ThemeProvider({ children }: ChildComponentProps) {
  //
  const themeOptions: ThemeOptions = {
    shape: { borderRadius: 4 },
    palette: palette,
    spacing: 2,
    typography: {
      h3: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '40.32px',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: '700',
        lineHeight: '30.24px',
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
          fontSize: '0.86rem',
          lineHeight: '180%',
          whiteSpace: 'nowrap',
        },
      },
      body2: {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '15.12px',
      },
      subtitle1:{
        fontSize: '0.625rem',
        fontWeight: '500',
        lineHeight: '15.12px',
        color: `${palette.black.dark}!important`,
      }
    },
  };

  const theme = createTheme(themeOptions);
  theme.components = {
    MuiButton: Button(theme),
    MuiCard: Card(theme),
    MuiChip: Chip(theme),
    MuiCardContent: CardContent(theme),
    MuiOutlinedInput: OutlinedInput(theme),
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
        },
      },
    },
    //  {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '1rem',
    //       padding: '1rem',
    //       fontSize: '1.125rem',
    //       boxShadow: 'none',
    //       textTransform: 'unset',
    //       fontWeight: '500',

    //       '&:hover': {},
    //       // '&.Mui-disabled': {
    //       //   backgroundColor: theme.palette.primary.main,
    //       //   color: '#FFF',
    //       //   opacity: '50%',
    //       // },
    //       [theme.breakpoints.down('sm')]: {
    //         fontSize: '14px',
    //       },
    //     },
    //     // outlinedPrimary: {
    //     //   border: '1px solid #D0D5DD',
    //     //   color: '#3F3F46',
    //     // },
    //     // containedPrimary: {
    //     //   // background: 'linear-gradient(89deg, #4283C6 -45.88%, #204060 100%)',
    //     //   fontSize: '1.125rem',
    //     //   borderRadius: '0.625rem',
    //     //   '&.Mui-disabled': {
    //     //     opacity: '0.5',
    //     //     bcakgroundColor: '#C6DAEE',
    //     //     color: '#fff',
    //     //   },
    //     // },
    //   },
    // },

    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       height: '62px',
    //       borderColor: '#CBCAD7',
    //       lineHeight: '24px',
    //       // '& .MuiOutlinedInput-notchedOutline': {
    //       //   border: '1px solid #D0D5DD',
    //       // },
    //       borderRadius: '1rem',
    //       padding: '20px, 14px, 20px, 14px',
    //     },
    //     error: {
    //       // background: 'red',
    //       '& .MuiOutlinedInput-notchedOutline ': {
    //         borderColor: '#DD331D',
    //       },
    //     },
    //   },
    // },

    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       '&.MuiCheckbox-sizeMedium': {
    //         // width: '16px',
    //         // height: '16px',
    //         // border: '1px solid #D0D5DD',
    //         // borderRadius: '4px',
    //       },
    //     },
    //   },
    // },

    // MuiLink: {
    //   defaultProps: {
    //     color: '#6941C6',
    //     underline: 'none',
    //   },
    // },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'rgba(255, 255, 255, 1)',
    //       boxShadow: 'none',
    //       border: '1px solid rgba(223, 234, 242, 0.5)',
    //       borderRadius: '14px',
    //     },
    //   },
    // },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       border: 'none',
    //     },
    //   },
    // },
    // },
  };

  return (
    <M_ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GlobalStyles /> */}
      {children}
    </M_ThemeProvider>
  );
}
