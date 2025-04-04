import { ReactElement } from 'react';
import { Menu, MenuItem, Box, styled, SvgIconProps } from '@mui/material';

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    position: 'absolute',
    minWidth: 133,
    borderRadius: 8,
    border: '1px solid #eceff2',
    boxShadow: '0px 6px 9px rgba(0, 0, 0, 0.05)',
    marginTop: theme.spacing(1),
  },
  '& .MuiList-root': {
    padding: 0,
  },
}));

const MenuItemContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  width: '100%',
  '& svg': {
    width: '16px!important',
    height: '16px!important',
  },
});

const MenuText = styled('span')<{ color?: string }>(
  ({ color = '#667085' }) => ({
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: '13px',
    color: color,
  }),
);

interface SettingsMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  items?: {
    title: string;
    icon: ReactElement | SvgIconProps | SVGRectElement | any;
    handelOpenModel: () => void;
  }[];
}

export const SettingsMenu = ({
  open,
  anchorEl,
  onClose,
  items,
}: SettingsMenuProps) => {
  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {items?.map((item, index) => {
        return (
          <MenuItem
            key={index}
            onClick={item.handelOpenModel}
            sx={{
              padding: '8px 8px',
            }}
          >
            <MenuItemContent>
              {item.icon}
              <MenuText>{item.title}</MenuText>
            </MenuItemContent>
          </MenuItem>
        );
      })}
    </StyledMenu>
  );
};
