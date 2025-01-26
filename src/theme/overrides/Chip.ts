import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  ThemeOptions,
} from '@mui/material';

export function Chip(theme: ThemeOptions): {
  defaultProps?: ComponentsProps['MuiChip'];
  styleOverrides?: ComponentsOverrides['MuiChip'];
  variants?: ComponentsVariants['MuiChip'];
} {
  return {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        padding: '4px, 16px, 4px, 16px',
      },
      colorError: {
        border: '1px solid #DC2626',
        color: '#991B1B',
        backgroundColor: '#FEF2F2',
      },
      colorWarning: {
        border: '1px solid #D97706',
        color: '#92400E',
        backgroundColor: '#FFFBEB',
      },
      colorInfo: {
        color: '#33A3DC',
        backgroundColor: 'rgba(225, 241, 250, 1)',
      },
      colorSuccess: {
        border: '1px solid #16A34A',
        color: '#166534',
        backgroundColor: '#F0FDF4',
      },
    },
  };
}
