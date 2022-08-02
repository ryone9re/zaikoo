import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';
import { Error } from '../../ui/Error/Error';
import { Loading } from '../../ui/Loading/Loading';

import { Stock } from './Stock';

export const StockPage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Stock />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
