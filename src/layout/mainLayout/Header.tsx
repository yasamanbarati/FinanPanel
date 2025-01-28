import { SearchIcon } from '@/components/icons';
import { Menu } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  styled,
} from '@mui/material';
import React from 'react';

// Styled components for better readability and maintainability
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
  [theme.breakpoints.down('md')]: {
    padding: '8px 12px',
    width: '300px',
  },
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  padding: '20px 32px!important',
  borderBottom: '1px solid #F7F8FA80',
  justifyContent: 'space-between',
}));

interface HeaderProps {
  onOpenSidebar: () => void;
  drawerWidth: number;
  headerHeight: number;
}

const Header: React.FC<HeaderProps> = ({ onOpenSidebar, drawerWidth, headerHeight }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
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
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <Menu />
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
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;