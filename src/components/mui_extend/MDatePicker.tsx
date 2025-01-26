// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

// interface Props {
//   format?: string;
//   value: string;
//   onChange: (value: string) => void;
//   views?: ['year' | 'month' | 'day'];
// }
// //==========================//
// export function MDatePicker({
//   format = 'YYYY-MM-DD',
//   value,
//   onChange,
//   ...other
// }: Props) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         slotProps={{ textField: { size: 'small' } }}
//         value={value ? dayjs(value) : null} // Initialize with dayjs
//         onChange={(date) => {
//           const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : '';
//           onChange(formattedDate); // Update the form with the formatted date
//         }}
//         {...other}
//       />
//     </LocalizationProvider>
//   );
// }
