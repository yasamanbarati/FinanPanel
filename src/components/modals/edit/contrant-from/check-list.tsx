import { ListFeaturesProps } from '@/services/servers/type';
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
} from '@mui/material';
import React, { useState } from 'react';

interface Props {
  list: ListFeaturesProps[];
  sxStyle?: SxProps;
}

const CheckList = ({ list, sxStyle }: Props) => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: { md: '94px' } }}>
      {list.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;
        return (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(item.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(item.id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckList;
