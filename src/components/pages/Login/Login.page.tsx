import { Suspense } from 'react';

import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';

import { Login } from './Login';

export const LoginPage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <Suspense>
        <Login />
      </Suspense>
    </>
  );
};
