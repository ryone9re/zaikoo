import { Button } from '@mui/material';

import { login } from '../../model/Auth/firebase';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Login = () => {
  return (
    <GridParent>
      <GridChild>
        <Button variant='contained' onClick={login}>
          ログイン
        </Button>
      </GridChild>
    </GridParent>
  );
};
