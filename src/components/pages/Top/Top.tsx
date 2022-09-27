import { Button, Grid, Paper, Typography } from '@mui/material';

import { DrawerContents } from '../../ui/Drawer/DrawerContents';
import { Link } from '../../ui/Link/Link';

export const Top = () => {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Grid
        sx={{ pt: 2, px: '2rem', width: '75%' }}
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        rowSpacing={4}
        columnSpacing={0}
      >
        {DrawerContents.map((v, i) => {
          if (v.title === 'トップ') return;
          return (
            <Grid key={i} item xs={6} container justifyContent='center'>
              <Link href={v.link}>
                <Button variant='contained' size='large' sx={{ height: 150, width: 300 }}>
                  <Typography align='center' variant='h5'>
                    {v.title}
                  </Typography>
                </Button>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
