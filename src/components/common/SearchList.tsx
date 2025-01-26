// import {
//   Box,
//   CircularProgress,
//   ClickAwayListener,
//   IconButton,
//   InputAdornment,
//   OutlinedInput,
//   Stack,
//   styled,
// } from '@mui/material';
// import React, { ReactNode, useState } from 'react';
// import { Icon } from './Icon';
// import useDebouncedCallback from '@/hook/useDebouncedCallback';
// import Image from 'next/image';
// //
// const BoxStyled = styled(Box)(({ isOpen }: { isOpen: boolean }) => ({
//   borderRadius: '16px',
//   padding: '10px 16px',
//   display: 'flex',
//   // alignItems: 'center',
//   // justifyContent: 'center',
//   position: 'absolute',
//   backgroundColor: '#fff',
//   right: 0,
//   top: 0,

//   minWidth: 425,
//   zIndex: 999,
//   border: isOpen ? '1px solid #A1A1AA' : 'none',
//   height: isOpen ? 500 : 'auto',
//   // overflowY: 'auto',
//   boxShadow: isOpen ? '0px 4px 10px 0px rgba(0, 0, 0, 0.10)' : 'none',

//   // boxShadow: 3,
// }));

// //
// const InputStyled = styled(OutlinedInput)(
//   ({ isOpen }: { isOpen: boolean }) => ({
//     // const InputStyled = styled(OutlinedInput)({
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#E4E4E7',
//       borderWidth: isOpen ? '0 0 1px 0' : '1px',
//       borderRadius: 0,
//     },
//     '.MuiOutlinedInput-notchedOutline': {
//       borderWidth: isOpen ? '0 0 1px 0' : '1px',
//       borderRadius: isOpen ? 0 : '8px',
//     },

//     marginBottom: '8px',
//   }),
// );
// //
// const ContentStyled = styled(Stack)({
//   height: '100%',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// interface Props {
//   onChange: (value: string) => void;
//   value: string;
//   placeholder: string;
//   isLoading: boolean;
//   noData: boolean;
//   children: ReactNode;
// }

// //==========================//
// export function SearchList({
//   onChange,
//   value,
//   placeholder,
//   isLoading,
//   noData,
//   children,
// }: Props) {
//   const [isOpen, setIsOpen] = useState(false);
//   //debounce search
//   const debouncedSearch = useDebouncedCallback((value) => onChange(value));
//   //open box
//   const handleOpen = () => setIsOpen(true);
//   //close box
//   const handleClose = () => setIsOpen(false);

//   const handler = () => {
//     if (isLoading)
//       return (
//         <ContentStyled>
//           <CircularProgress color="inherit" />
//         </ContentStyled>
//       );
//     if (!isLoading && noData)
//       return (
//         <ContentStyled>
//           <Image
//             src="/static/images/NoData.svg"
//             alt="noData"
//             width={250}
//             height={250}
//           />
//         </ContentStyled>
//       );
//     return children;
//   };

//   //
//   return (
//     <ClickAwayListener onClickAway={handleClose}>
//       <Box position={'relative'} height={'62px'}>
//         <BoxStyled isOpen={isOpen}>
//           <Box height={'62px'} />
//           <Stack>
//             <InputStyled
//               isOpen={isOpen}
//               placeholder={placeholder}
//               onFocus={() => handleOpen()}
//               onChange={(e) => debouncedSearch(e.target.value)}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <IconButton>
//                     <Icon icon={isOpen ? 'search-normal-2' : 'search-normal'} />
//                   </IconButton>
//                 </InputAdornment>
//               }
//             />
//             {isOpen && handler()}
//           </Stack>
//         </BoxStyled>
//       </Box>
//     </ClickAwayListener>
//   );
// }
