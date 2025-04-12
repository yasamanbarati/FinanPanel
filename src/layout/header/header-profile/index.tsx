import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import { NotificationIcon } from '@/components/icons';
import { useAuth, User } from '@/services/servers/context/AuthContext';
import { profileMenuSetting } from '@/services/servers/mock';
import TextSlider from './text-slider';

// تنظیمات منو
const PROFILE_SETTINGS = ['Manage Account', 'Change Password', 'Log out'];

const HeaderProfileContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  height: '35px',
  '& .MuiButtonBase-root:first-child': {
    padding: '0',
    '& .MuiBadge-root': {
      width: '24px',
      height: '24px',
      '& .MuiBadge-badge.MuiBadge-dot': {
        top: '6px',
        right: '8px',
      },
    },
  },
  '& .MuiButtonBase-root:last-child': {
    borderLeft: `0.5px solid ${theme.palette.borderBG}`,
    borderRadius: '0',
    paddingLeft: '16px',
    display: 'flex',
    gap: '12px',
    '& .MuiAvatar-root': {
      width: '35px',
      height: '35px',
      '@media (max-width: 525px)': {
        width: '30px',
        height: '30px',
      },
    },
    '& .MuiListItemText-root': {
      '& span': {
        fontWeight: '600',
        fontSize: '0.75rem',
      },
      '& p': {
        fontWeight: '500',
        fontSize: '0.625rem',
        textAlign: 'left',
      },
    },

    '@media (max-width: 768px)': {
      paddingLeft: '8px',
      gap: '0',
      '& .MuiListItemText-root': {
        display: 'none',
      },
      '& .MuiSvgIcon-root': {
        display: 'none',
      },
    },
    '& svg': {
      fill: theme.palette.neutral.dark,
    },
  },
  '@media (max-width: 525px)': {
    gap: '8px',
    height: '30px',
  },
}));
const HeaderProfile = () => {
  const { user, logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  if (!user || user === 'logOut') return null;
  // باز کردن منوی کاربر
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // بستن منوی کاربر
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {/* بخش محتوای هدر */}
      <HeaderProfileContent>
        {/* دکمه نوتیفیکیشن */}
        <IconButton size="large" color="inherit" sx={{ p: 0 }}>
          <Badge variant="dot" color="error">
            <NotificationIcon />
          </Badge>
        </IconButton>

        {/* دکمه پروفایل کاربر */}
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="admin-image"
            src={(user as User)?.image || '/static/images/Ellipse.svg'}
          />

          <TextSlider text={(user as User).name} />
          <KeyboardArrowDown sx={{ fill: '#9096A2' }} />
        </IconButton>
      </HeaderProfileContent>

      {/* منوی تنظیمات کاربر */}
      <Menu
        sx={{ mt: '55px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {profileMenuSetting.map((setting) => {
          const Icon = setting.icon;
          return (
            // eslint-disable-next-line react/jsx-key
            <MenuItem onClick={handleCloseUserMenu}>
              {<Icon />}
              <Typography sx={{ textAlign: 'center' }}>
                {setting.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default HeaderProfile;
