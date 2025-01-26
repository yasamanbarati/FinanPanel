import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControlLabel,
  Checkbox as MCheckBox,
  FormHelperText,
  CheckboxProps,
  FormControlLabelProps,
} from '@mui/material';

interface Props {
  name: string;
  // labelProps: FormControlLabelProps;
  label: string;
}

export function Checkbox({ name, label, ...other }: CheckboxProps & Props) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <FormControlLabel
            label={label}
            control={
              <MCheckBox
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
                {...other}
              />
            }
          />
          <FormHelperText color="red">{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}
