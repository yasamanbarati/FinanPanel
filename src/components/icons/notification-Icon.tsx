import { SvgIcon, SvgIconProps } from '@mui/material';

export function NotificationIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="20"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m3 10-1 4a2 2 0 0 0-1 2l2 2h14l2-2-1-2-1-4a7 7 0 0 0-14 0Z"
        stroke="#3B3B3E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 18a3 3 0 0 1-6 0M9 2l1 2 2-2-2-1-1 1Z"
        stroke="#3B3B3E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
