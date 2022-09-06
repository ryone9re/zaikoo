import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';
import { Error } from '../../ui/Error/Error';
import { Loading } from '../../ui/Loading/Loading';

import { Top } from './Top';

export const TopPage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Top />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
