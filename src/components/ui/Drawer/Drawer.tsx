import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

import { Link } from '../Link/Link';

import { DrawerContents } from './DrawerContents';

type Props = {
  isOpenDrawer: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const useDrawer = (initialState: boolean) => {
  const [isOpenDrawer, setDrawer] = useState(initialState);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawer(open);
  };

  return [isOpenDrawer, toggleDrawer, TemporaryDrawer] as const;
};

const TemporaryDrawer = ({ isOpenDrawer, toggleDrawer }: Props) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {DrawerContents.map((v, index) => (
          <Link key={index} href={v.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <v.icon />
                </ListItemIcon>
                <ListItemText primary={v.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <Drawer anchor='left' open={isOpenDrawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
};
