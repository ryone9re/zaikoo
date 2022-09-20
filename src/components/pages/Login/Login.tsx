import { Alert, Button } from '@mui/material';
import { useState } from 'react';

import { login } from '../../model/Auth/firebase';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

const ErrorDialog = () => {
  return <Alert severity='error'>ログイン失敗</Alert>;
};

export const Login = () => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <GridParent>
      <GridChild>
        {isError && <ErrorDialog />}
        <Button variant='contained' onClick={() => login(setIsError)}>
          ログイン
        </Button>
      </GridChild>
    </GridParent>
  );
};
