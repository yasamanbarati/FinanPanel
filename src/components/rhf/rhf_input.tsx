import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
//
const StyleInput = styled(OutlinedInput)({
  // margin: '0.5rem 0',
});
//
interface Props {
  name: string;
  type?: 'password' | 'phone';
}
//=================================================//
export function Input({ label, type, ...props }: OutlinedInputProps & Props) {
  //

  const { control } = useFormContext();
  const [showPassword, setShowPassword] = React.useState(false);

  if (type == 'password')
    return (
      <Controller
        control={control}
        name={props?.name}
        render={({
          field: { value, onChange, ref },
          fieldState: { error },
        }) => (
          <Stack mb={1.5}>
            <Typography textAlign={'left'} color={'#18181B'}>
              {label}
            </Typography>
            <StyleInput
              ref={ref}
              onChange={onChange}
              value={value}
              {...props}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? (
                      <Visibility sx={{ color: '#667085' }} />
                    ) : (
                      <VisibilityOff sx={{ color: '#667085' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              type={showPassword ? 'text' : 'password'}
            />
            <FormHelperText sx={{ color: 'red' }}>
              {error?.message}
            </FormHelperText>
          </Stack>
        )}
      />
    );

  return (
    <Controller
      control={control}
      name={props?.name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Stack mb={1.5}>
          <Typography color={'#18181B'} textAlign={'left'}>
            {label}
          </Typography>
          <StyleInput
            error={Boolean(error)}
            ref={ref}
            onChange={onChange}
            value={value}
            {...props}
          />
          <FormHelperText sx={{ color: '#DD331D' }}>
            {error?.message}
          </FormHelperText>
        </Stack>
      )}
    />
  );
}
