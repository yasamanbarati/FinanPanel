import { Box, Paper, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const drawerWidth = 272;
const headerHeight = 80;
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  //mobile sidebar
  const [openSidebar, setOpenSidebar] = React.useState(false);
  //
  const handleSidebarToggle = () => {
    setOpenSidebar((prev) => !prev);
  };

  //==========================================//

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar
        drawerWidth={drawerWidth}
        open={openSidebar}
        onClose={handleSidebarToggle}
        headerHeight={headerHeight}
      />
      <Box
        component={'main'}
        position={'relative'}
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100svh',
          overflowY: 'auto',
        }}
      >
        <Header
          openSidebar={handleSidebarToggle}
          drawerWidth={drawerWidth}
          headerHeight={headerHeight}
        />

        <Box
          padding={'104px 24px 24px 24px'}
          bgcolor="rgba(247, 248, 250, 0.5)"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
