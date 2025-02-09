import React from 'react';
import { FormLabel, Grid, OutlinedInput, SxProps } from '@mui/material';

interface CustomizeTextFieldProps {
  label: string;
  title: string;
  placeholder?: string;
  sxStyle?: SxProps;
  type?: string;
  handleOnChange?: (event: { target: { value: string } }) => void;
  value?: string;
}

const CustomizeTextField: React.FC<CustomizeTextFieldProps> = ({
  label,
  title,
  placeholder,
  sxStyle,
  type = 'text',
  handleOnChange,
  value,
}) => {
  return (
    <Grid item sx={sxStyle}>
      <FormLabel htmlFor={title}>{label}</FormLabel>
      <OutlinedInput
        id={title}
        name={title}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        fullWidth
      />
    </Grid>
  );
};

export default CustomizeTextField;