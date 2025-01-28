import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  ThemeOptions,
} from '@mui/material';

export function OutlinedInput(theme: ThemeOptions): {
  defaultProps?: ComponentsProps['MuiOutlinedInput'];
  styleOverrides?: ComponentsOverrides['MuiOutlinedInput'];
  variants?: ComponentsVariants['MuiOutlinedInput'];
} {
  return {
    styleOverrides: {
      root: {
        '& fieldset': {
          borderColor: '#CBCAD7', // Change border color
          borderWidth: '1px', // Change border width
        },

        borderRadius: '1rem',
        height: '62px',
        fontSize: '1.25rem',
        '& .MuiInputBase-input': {
          borderRadius: '1rem',
          color: '#49475A',
          padding: '1rem',
          fontSize: '1rem', // Change font size inside the input
        },
      },
      sizeSmall: {
        '& fieldset': {
          borderColor: '#CBCAD7', // Change border color
          borderWidth: '1px', // Change border width
        },

        borderRadius: '0.5rem',
        height: '40px',
        fontSize: '1rem',
        '& .MuiInputBase-input': {
          borderRadius: '0.5rem',
          color: '#49475A',
          padding: '1rem',
          // height: '40px',
          // boxSizing: 'border-box',
          fontSize: '1rem', // Change font size inside the input
        },
      },
    },
  };
}
