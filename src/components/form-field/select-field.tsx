import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';

interface Props {
  defaultValue: string | undefined;
  list: (string | number)[];
}

const CustomizeSelectField = ({ list, defaultValue }: Props) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(defaultValue);

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: { md: '94px' }, justifyContent: 'flex-end' }}>
      <Select
        value={selectedValue || ''} // Ensure value is never undefined
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          '& .MuiSelect-select': {
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#CBCAD7!important',
            padding: '0px !important',
          },
        }}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        {list.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item} Month
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomizeSelectField;
