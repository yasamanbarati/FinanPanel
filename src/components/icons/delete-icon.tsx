import { SvgIcon, SvgIconProps } from '@mui/material';

export function DeleteIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4h1.333m0 0H14M3.333 4v9.333a1.333 1.333 0 0 0 1.334 1.333h6.666a1.333 1.333 0 0 0 1.334-1.333V4M5.333 4V2.666a1.333 1.333 0 0 1 1.334-1.333h2.666a1.333 1.333 0 0 1 1.334 1.333V4"
        stroke="#CBCAD7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
