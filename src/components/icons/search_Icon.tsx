import { SvgIcon, SvgIconProps } from '@mui/material';

export function SearchIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20 20-4.343-4.343m0 0A8 8 0 1 0 4.345 4.344a8 8 0 0 0 11.312 11.313Z"
        stroke="#CBCAD7"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
