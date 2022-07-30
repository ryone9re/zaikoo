import { Suspense } from 'react';

import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';
import { Loading } from '../../ui/Loading/Loading';

import { Office } from './Office';

export const OfficePage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <Suspense fallback={<Loading />}>
        <Office />
      </Suspense>
    </>
  );
};
