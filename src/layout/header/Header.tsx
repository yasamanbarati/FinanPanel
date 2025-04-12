import React from 'react';
import {
  AppBar,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  styled,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { SearchIcon } from '@/components/icons';
import HeaderProfile from './header-profile';

const SearchInput = styled(OutlinedInput)(({ theme }) => ({
  padding: '8px 16px',
  paddingLeft: '0',
  border: `0.5px solid ${theme.palette.black.light}`,
  borderRadius: '12px',
  width: '446px',
  height: '40px',
  display: 'flex',
  gap: '8px',
  '& .MuiInputAdornment-root': {
    width: '20px',
    '& .MuiButtonBase-root': {
      padding: '8px 16px',
      '& .MuiSvgIcon-root': {
        width: '18px',
        height: '18px',
        fill: 'none',
      },
    },
  },
  [theme.breakpoints.down('lg')]: {
    padding: '8px 12px',
    width: '350px',
    margin: '0 16px',
  },
  [theme.breakpoints.down('mobileM')]: {
    width: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px',
  },
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  padding: '20px 32px!important',
  borderBottom: '1px solid #F7F8FA80',
  justifyContent: 'space-between',
  [theme.breakpoints.up('tablet')]: {
    padding: '20px 12px!important',
  },
  [theme.breakpoints.down('mobileM')]: {
    padding: '16px 14px!important',
  },
}));

interface HeaderProps {
  onOpenSidebar: () => void;
  drawerWidth: number;
  headerHeight: number;
}

const Header: React.FC<HeaderProps> = ({
  onOpenSidebar,
  drawerWidth,
  headerHeight,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          tablet: `calc(100% - 245px)`,
          lg: `calc(100% - ${drawerWidth}px)`,
        },
        height: headerHeight,
        boxShadow: 'none',
        bgcolor: '#fff',
        color: '#000',
      }}
    >
      <CustomToolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={onOpenSidebar}
          sx={{ display: { tablet: 'none' } }}
        >
          <Menu sx={{ fill: '#3F3F46' }} />
        </IconButton>
        <SearchInput
          placeholder="Search transactions, contracts, etc..."
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        <HeaderProfile />
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;
