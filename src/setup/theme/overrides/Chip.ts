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
        height: '22px',
        width: '95px',
        borderRadius: '72px',
        padding: '4px 11px',
        fontSize: '11px',
        fontWeight: '600',
        lineHeight: '13.12px',
      },
      colorError: {
        border: '1.5px solid #E2B6B6',
        color: '#5F5F5F',
        backgroundColor: '#EED3D3',
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
        border: '1.5px solid #B6CAAE',
        color: '#5F5F5F',
        backgroundColor: '#D3DFCE',
      },
    },
  };
}
