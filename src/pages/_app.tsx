import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_COOKIE_KEY } from 'next-fortress/constants';
import Head from 'next/head';
import { useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import { firebaseApp, firebaseParams } from '../components/model/Auth/firebase';
import { currentUserState } from '../components/model/States/currentUser';
import createEmotionCache from '../libs/createEmotionCache';
import theme from '../styles/theme';

import type { AppProps } from 'next/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function AuthObserver() {
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => (document.cookie = `${FIREBASE_COOKIE_KEY}=${token}; path=/`));
        setCurrentUser(user);
      } else {
        document.cookie = `${FIREBASE_COOKIE_KEY}=; path=/; expires=${new Date(
          '1999-12-31T23:59:59Z'
        ).toUTCString()}`;
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  return null;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const apps = getApps();

  if (apps.length === 0) {
    // firebaseApp();
    initializeApp(firebaseParams);
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RecoilRoot>
          <AuthObserver />
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}
