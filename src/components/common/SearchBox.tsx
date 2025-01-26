// import { Search } from '@mui/icons-material';
// import {
//   Avatar,
//   Box,
//   Button,
//   ButtonGroup,
//   CircularProgress,
//   ClickAwayListener,
//   IconButton,
//   InputAdornment,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemButton,
//   ListItemText,
//   OutlinedInput,
//   Stack,
//   Typography,
//   styled,
// } from '@mui/material';
// import React, { useState } from 'react';
// import { Icon } from './Icon';
// import { useSearchUsers } from '@/api/dashboard/admin/api.users';
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
//   onSelect: (user: User) => void | undefined;
// }

// type UserType = 'owner' | 'charterer';

// //==========================//
// export function SearchBox({ onSelect }: Props) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [type, setType] = useState<UserType>('owner');
//   const [name, setName] = useState('');
//   //get users
//   const { users, isLoading } = useSearchUsers({ name, type });
//   //debounce search
//   const debouncedSearch = useDebouncedCallback((value) => setName(value));
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
//     if (!isLoading && !users?.length)
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
//     return (
//       <List disablePadding sx={{ overflow: 'auto' }}>
//         {users?.map((user) => (
//           <ListItemButton onClick={() => onSelect(user)} key={user.id}>
//             <ListItemAvatar>
//               <Avatar src={user?.user_information?.profile_image} />
//             </ListItemAvatar>
//             <ListItemText primary={user?.name} secondary={user?.email} />
//             <Typography variant="caption">{user?.user_type}</Typography>
//           </ListItemButton>
//         ))}
//       </List>
//     );
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
//               placeholder="Search by name , email"
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
//             {isOpen && (
//               <>
//                 <ButtonGroup fullWidth>
//                   {TYPES.map(({ key, title }) => (
//                     <Button
//                       variant={key === type ? 'contained' : 'outlined'}
//                       onClick={() => setType(key)}
//                       key={key}
//                     >
//                       {title}
//                     </Button>
//                   ))}
//                 </ButtonGroup>
//                 {handler()}
//               </>
//             )}
//           </Stack>
//         </BoxStyled>
//       </Box>
//     </ClickAwayListener>
//   );
// }
// interface Types {
//   key: UserType;
//   title: string;
// }
// const TYPES: Types[] = [
//   {
//     key: 'owner',
//     title: 'Ship Owner',
//   },
//   {
//     key: 'charterer',
//     title: 'Charterer',
//   },
// ];
