import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Suspense, useEffect } from 'react';

import { useCurrentUser } from '../../model/Auth/firebase';
import Header from '../../ui/AppBar/Header';
import { useDrawer } from '../../ui/Drawer/Drawer';

import { Login } from './Login';

export const LoginPage = () => {
  const [isOpenDrawer, toggleDrawer, Drawer] = useDrawer(false);

  const router = useRouter();
  const user = useCurrentUser();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
