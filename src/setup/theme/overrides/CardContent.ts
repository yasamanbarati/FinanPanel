import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  ThemeOptions,
} from '@mui/material';

export function CardContent(theme: ThemeOptions): {
  defaultProps?: ComponentsProps['MuiCardContent'];
  styleOverrides?: ComponentsOverrides['MuiCardContent'];
  variants?: ComponentsVariants['MuiCardContent'];
} {
  return {
    styleOverrides: {
      root: {
        padding: '24px 16px',
      },
    },
  };
}
