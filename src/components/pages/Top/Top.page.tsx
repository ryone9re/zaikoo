import { Suspense, useState } from 'react';

import Header from '../../ui/AppBar/Header';
import Drawer from '../../ui/Drawer/Drawer';

import { Top } from './Top';

export const TopPage = () => {
  const [isOpenDrawer, setDrawer] = useState(false);

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

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Top />
      </Suspense>
    </>
  );
};
