import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  ThemeOptions,
} from '@mui/material';

export function Button(theme: ThemeOptions): {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
} {
  return {
    styleOverrides: {
      sizeLarge: {
        height: 56,
        fontSize: '20px',
        borderRadius: '32px',
        padding: '12px 32px',
      },

      root: {
        boxShadow: 'none',
        fontWeight: 500,
        borderRadius: '8px',
        padding: '8px 16px',
      },
      //     fontSize: '1.125rem',
      //     boxShadow: 'none',
      //     textTransform: 'unset',
      //     fontWeight: '500',

      //     '&:hover': {},
      //     // '&.Mui-disabled': {
      //     //   backgroundColor: theme.palette.primary.main,
      //     //   color: '#FFF',
      //     //   opacity: '50%',
      //     // },
      //     // [theme.breakpoints.down('sm')]: {
      //     //   fontSize: '14px',
      //     // },
      //   },
      // outlinedPrimary: {
      //   border: '1px solid #D0D5DD',
      //   color: '#3F3F46',
      // },
      // containedPrimary: {
      //   // background: 'linear-gradient(89deg, #4283C6 -45.88%, #204060 100%)',
      //   fontSize: '1.125rem',
      //   borderRadius: '0.625rem',
      //   '&.Mui-disabled': {
      //     opacity: '0.5',
      //     bcakgroundColor: '#C6DAEE',
      //     color: '#fff',
      //   },
      // },
    },
  };
}
