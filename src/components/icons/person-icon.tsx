import { SvgIcon, SvgIconProps } from '@mui/material';

export function PersonIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#CBCAD7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.335 14v-1.333A2.667 2.667 0 0 0 10.668 10H5.335a2.667 2.667 0 0 0-2.667 2.667V14m8-9.333a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z"
        stroke="#CBCAD7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
