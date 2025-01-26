import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  ThemeOptions,
} from '@mui/material';

export function Dialog(theme: ThemeOptions): {
  defaultProps?: ComponentsProps['MuiDialog'];
  styleOverrides?: ComponentsOverrides['MuiDialog'];
  variants?: ComponentsVariants['MuiDialog'];
} {
  return {
    styleOverrides: {
      root: {
        '& .MuiDialog-paper': {},
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
