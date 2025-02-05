import { SvgIcon, SvgIconProps } from '@mui/material';

export function TrashIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
       d="M2 10h4m0 0h32M6 10v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10m-22 0V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4M16 20v12m8-12v12"
        stroke="#DC2626"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
