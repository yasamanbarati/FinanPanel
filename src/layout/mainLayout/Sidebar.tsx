import {
  Brightness1,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
} from '@mui/icons-material';
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
  AppBar,
  IconButton,
  InputBase,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MenuItemType, SidbarItems } from './config';
import Link from 'next/link';
import { Icon } from '@/components/common';
import { LogOutIcon, SettingIcon } from '@/components/icons';

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
    margin: '0',
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
          <ListItem sx={{ p: 0, pb: 8 }}>
            <MenuItemStyled
              onClick={() => setOpen((prev) => !prev)}
              selected={isActive}
            >
              <Icon icon={isActive ? activeIcon : icon} />
              <ListItemText
                sx={{ pl: 1.5 }}
                primary={
                  <Typography variant="h6" component="h3" ml={2}>
                    {title}
                  </Typography>
                }
                disableTypography
              />

              {open ? <ExpandLess /> : <ExpandMore />}
            </MenuItemStyled>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {subMenu?.map(({ path, title }, index) => (
                <Link href={path} key={path}>
                  <ListItem sx={{ p: 0 }}>
                    <SubMenuStyled selected={router.pathname === path}>
                      <ListItemIcon>
                        <Brightness1
                          sx={{ color: '#376DA4', fontSize: '12px' }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6" component="h3" ml={2}>
                            {title}
                          </Typography>
                        }
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
          <ListItem sx={{ p: 0, pb: 8 }}>
            <MenuItemStyled
              onClick={() => setOpen((prev) => !prev)}
              selected={isActive}
            >
              <Icon icon={isActive ? activeIcon : icon} />
              <ListItemText
                sx={{ pl: 1.5 }}
                primary={
                  <Typography variant="h6" component="h3" ml={2}>
                    {title}
                  </Typography>
                }
                disableTypography
              />
            </MenuItemStyled>
          </ListItem>
        </Link>
      )}
    </>
  );
};

const MenuItemDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  borderTop: `0.6px solid ${theme.palette.borderBG}`,
  padding: '16px 8px',
  '& svg': {
    width: '24px',
    height: '24px',
    fill: 'none',
  },
  '& a': {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '17.64px',
    textAlign: 'left',
    color: theme.palette.neutral.dark,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 12px',
  },
}));

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
      <List
        sx={{
          pt: 21,
          px: 12,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '90%',
        }}
      >
        <div>
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
        </div>
        <MenuItemDiv>
          <Link href={'/'}>
            <SettingIcon />
            Setting
          </Link>
          <Link href={'/'}>
            <LogOutIcon />
            Log out
          </Link>
        </MenuItemDiv>
      </List>
    </>
  );
};

export default function Sidebar({ drawerWidth, open, onClose }: Props) {
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
          display: { xs: 'block', md: 'none' },
          justifyContent: 'space-between',
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
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: 'transparent',
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
