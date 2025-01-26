import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider as M_ThemeProvider,
  createTheme,
} from '@mui/material';
import typography from './typography';
import { Button, Card, CardContent, Chip, OutlinedInput } from './overrides';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: ChildComponentProps) {
  //
  const themeOptions: ThemeOptions = {
    typography,
    shape: { borderRadius: 8 },
    palette: {
      primary: {
        main: '#0074EF',
        // contrastText: '#fff',
      },
    },
  };

  const theme = createTheme(themeOptions);
  theme.components = {
    MuiButton: Button(theme),
    MuiCard: Card(theme),
    MuiChip: Chip(theme),
    MuiCardContent: CardContent(theme),
    MuiOutlinedInput: OutlinedInput(theme),
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
