import { SvgIcon, SvgIconProps } from '@mui/material';

export function SettingIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="20"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5a2 2 0 0 1 1 2v8l-1 1-7 5a2 2 0 0 1-2 0l-7-5a2 2 0 0 1-1-1V7l1-2 7-4a2 2 0 0 1 2 0l7 4h0Z"
        stroke="#9096A2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
        stroke="#9096A2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
