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
//
const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  padding: '8px 16px',
  paddingLeft: '0',
  border: `1px solid ${theme.palette.black.light}`,
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
}));

interface Props {
  openSidebar: () => void;
  drawerWidth: number;
  headerHeight: number;
}

//================================//
export default function Header({
  openSidebar,
  drawerWidth,
  headerHeight,
}: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: headerHeight,
        boxShadow: 'none',
        bgcolor: '#fff',
        color: '#000',
      }}
    >
      <Toolbar
        sx={{
          padding: '20px 32px!important',
          borderBottom: '1px solid rgba(223, 234, 242, 0.5)',
        }}
      >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={openSidebar}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <StyledSearch
          placeholder="Search transactions, contracts,etc..."
          sx={{ pt: 5 }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Toolbar>
    </AppBar>
  );
}
