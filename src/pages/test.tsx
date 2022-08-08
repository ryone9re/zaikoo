import { Button } from '@mui/material';

import { logout } from '../components/model/Auth/firebase';

import type { GetServerSideProps } from 'next';

const Page = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Button variant='contained' onClick={logout}>
        ログアウト
      </Button>
    </>
  );
};

export default Page;
