import { SvgIcon, SvgIconProps } from '@mui/material';

export function TrashIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="49"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 12h4m0 0h32m-32 0v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V12m-22 0V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4m-12 10v12m8-12v12"
        stroke="#DC2626"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
