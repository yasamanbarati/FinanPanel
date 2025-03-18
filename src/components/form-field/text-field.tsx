import {
  FormLabel,
  Grid,
  OutlinedInput,
  SxProps,
  useTheme,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface CustomizeTextFieldProps {
  label: string;
  title: string;
  placeholder?: string;
  sxStyle?: SxProps;
  type?: string;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
  onBlur?: () => void;
}

const CustomizeTextField: React.FC<CustomizeTextFieldProps> = ({
  label,
  title,
  placeholder,
  sxStyle,
  type = 'text',
  handleOnChange,
  value,
  error,
  onBlur,
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <Grid item sx={sxStyle}>
      <FormLabel htmlFor={title} sx={{ color: theme.palette.black.main }}>
        {label}
      </FormLabel>
      <OutlinedInput
        id={title}
        name={title}
        type={inputType}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        fullWidth
        error={error}
        onBlur={onBlur}
        endAdornment={
          type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                sx={{
                  marginRight: 0,
                  color: theme.palette.black.contrastText,
                  '& svg': {
                    fill: theme.palette.black.contrastText,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        sx={{
          mt: 1,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: error
              ? theme.palette.error.main
              : theme.palette.black.contrastText,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: error
              ? theme.palette.error.main
              : theme.palette.primary.main,
          },
        }}
      />
    </Grid>
  );
};

export default CustomizeTextField;
