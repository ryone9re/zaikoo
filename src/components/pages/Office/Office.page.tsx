import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';
import { Error } from '../../ui/Error/Error';
import { Loading } from '../../ui/Loading/Loading';

import { Office } from './Office';

export const OfficePage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Office />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
