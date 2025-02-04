import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

const drawerWidth = 272;
const mobileDrawerWidth = 245;
const headerHeight = 80;
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar((prev) => !prev);
  };

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
          width: {
            tablet: `calc(100% - ${mobileDrawerWidth}px)`,
            lg: `calc(100% - ${drawerWidth}px)`,
          },
          minHeight: '100svh',
          overflowY: 'auto',
        }}
      >
        <Header
          onOpenSidebar={handleSidebarToggle}
          drawerWidth={drawerWidth}
          headerHeight={headerHeight}
        />

        <Box
          padding={'104px 32px 37px 32px'}
          bgcolor="rgba(247, 248, 250, 0.5)"
          minHeight="100vh"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
