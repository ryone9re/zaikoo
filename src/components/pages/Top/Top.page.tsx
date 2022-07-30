import { Suspense } from 'react';

import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';
import { Loading } from '../../ui/Loading/Loading';

import { Top } from './Top';

export const TopPage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <Suspense fallback={<Loading />}>
        <Top />
      </Suspense>
    </>
  );
};
