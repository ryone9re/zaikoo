import { GetServerSideProps } from 'next';

import LoginPage from '../components/pages/Login';
import { getClient } from '../hooks/useClient';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = getClient();
  try {
    const isAuthed = await client.api.auth.get({
      config: {
        headers: {
          cookie: ctx.req.headers.cookie!,
        },
      },
    });
    if (isAuthed.body.authState) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  } catch {
    return { props: {} };
  }
  return { props: {} };
};

const login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default login;
