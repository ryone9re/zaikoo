import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Alert, Avatar, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import GoogleButton from 'react-google-button';

import { login } from '../../model/Auth/firebase';

const ErrorDialog = () => {
  return <Alert severity='error'>ログイン失敗</Alert>;
};

export const Login = () => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <Grid container sx={{ pt: 2 }}>
      <Grid item xs={4} />
      <Grid item xs>
        {isError && <ErrorDialog />}
        <Paper elevation={4} sx={{ my: 2 }}>
          <Grid container direction='column' justifyContent='space-evenly' alignItems='center'>
            <Grid item xs sx={{ my: 3 }}>
              <Avatar sx={{ bgcolor: '#011CFF' }}>
                <LockOpenIcon />
              </Avatar>
            </Grid>
            <Grid item xs sx={{ mb: 3 }}>
              <Typography align='center' variant='h4'>
                サインイン
              </Typography>
            </Grid>
            <Grid item xs sx={{ my: 3 }}>
              <Typography align='center' variant='body1'>
                Googleでサインイン
              </Typography>
              <GoogleButton onClick={() => login(setIsError)} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};
