import { Brightness1, ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MenuItemType, SidbarItems } from './config';
import Link from 'next/link';
import { Icon } from '@/components/common';

interface Props {
  drawerWidth: number;
  headerHeight: number;
  open: boolean;
  onClose: () => void;
}

const MenuItemStyled = styled(ListItemButton)({
  color: ' #9096A2',
  '&.Mui-selected': {
    backgroundColor: '#F1F8FF',
    color: '#376DA4',
    borderRadius: '8px',
    padding: '16px',
    '&:hover': {
      backgroundColor: '#F1F8FF',
      color: '#376DA4',
    },
  },
});

const SubMenuStyled = styled(ListItemButton)({
  color: ' #9096A2',
  '&.Mui-selected': {
    backgroundColor: '#F1F8FF',
    color: '#376DA4',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#F1F8FF',
      color: '#376DA4',
    },
  },
});

//=============================================================//
const MenuItem = ({ icon, activeIcon, title, path, subMenu }: MenuItemType) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = router.pathname.startsWith(path);

  useEffect(() => {
    if (isActive) setOpen(true);
  }, [isActive]);

  return (
    <>
      {subMenu ? (
        <>
          <ListItem>
            <MenuItemStyled
              onClick={() => setOpen((prev) => !prev)}
              selected={isActive}
            >
              <Icon icon={isActive ? activeIcon : icon} />
              <ListItemText
                sx={{ pl: 1.5 }}
                primary={<Typography variant="subtitle1">{title}</Typography>}
                disableTypography
              />

              {open ? <ExpandLess /> : <ExpandMore />}
            </MenuItemStyled>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {subMenu?.map(({ path, title }, index) => (
                <Link href={path} key={path}>
                  <ListItem sx={{ py: 0 }}>
                    <SubMenuStyled selected={router.pathname === path}>
                      <ListItemIcon>
                        <Brightness1
                          sx={{ color: '#376DA4', fontSize: '12px' }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography>{title}</Typography>}
                      />
                    </SubMenuStyled>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <Link href={path}>
          <ListItem>
            <MenuItemStyled
              onClick={() => setOpen((prev) => !prev)}
              selected={isActive}
            >
              <Icon icon={isActive ? activeIcon : icon} />
              <ListItemText
                sx={{ pl: 1.5 }}
                primary={<Typography variant="subtitle1">{title}</Typography>}
                disableTypography
              />
            </MenuItemStyled>
          </ListItem>
        </Link>
      )}
    </>
  );
};

//====================================//
const Menu = ({ items }: { items: MenuItemType[] }) => {
  return (
    <>
      <Toolbar
        sx={{
          padding: '12px 24px',
          height: 80,
          borderBottom: '1px solid rgba(223, 234, 242, 0.5)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          width={154}
          height={40}
          src="/static/icons/dashboardLogo.svg"
          alt="logo"
        />
      </Toolbar>
      <List sx={{ pt: 8 }}>
        {items.map(({ subMenu, icon, activeIcon, path, id, title }) => (
          <MenuItem
            key={id}
            path={path}
            title={title}
            icon={icon}
            activeIcon={activeIcon}
            id={id}
            subMenu={subMenu}
          />
        ))}
      </List>
    </>
  );
};

//================================//
export default function Sidebar({ drawerWidth, open, onClose }: Props) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Menu items={SidbarItems} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: 'transparent',
            // border: 'none',
            borderColor: 'rgba(223, 234, 242, 0.5)',
          },
        }}
        open
      >
        <Menu items={SidbarItems} />
      </Drawer>
    </Box>
  );
}
