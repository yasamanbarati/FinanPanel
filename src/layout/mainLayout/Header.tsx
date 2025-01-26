import { Menu, Search } from '@mui/icons-material';
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
const StyledSearch = styled(OutlinedInput)({
  padding: ' 12px, 16px, 12px, 16px',
  border: '1px solid #E4E4E7',
  height: '40px',
});

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
          padding: '20px 32px',
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
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </Toolbar>
    </AppBar>
  );
}
