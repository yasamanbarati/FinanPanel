import { SvgIcon, SvgIconProps } from '@mui/material';

export function PasswordIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ marginRight: '8px' }}
    >
      <path
        d="M14 6a5 5 0 0 1-6 4v1H6v1l-1 1H4v2H1l-1-1v-3l5-4-1-1a5 5 0 1 1 10 0ZM9 4l2 2 1-2-1-1-2 1Z"
        fill="#667085"
      />
    </SvgIcon>
  );
}
