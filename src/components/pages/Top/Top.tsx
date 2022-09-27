import { Button, Grid, Paper, Typography } from '@mui/material';

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
        <Grid item xs={6} container justifyContent='center'>
          <Button variant='contained' size='large' sx={{ height: 150, width: 300 }}>
            <Typography align='center' variant='h5'>
              在庫登録
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} container justifyContent='center'>
          <Button variant='contained' size='large' sx={{ height: 150, width: 300 }}>
            <Typography align='center' variant='h5'>
              商品登録
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} container justifyContent='center'>
          <Button variant='contained' size='large' sx={{ height: 150, width: 300 }}>
            <Typography align='center' variant='h5'>
              カテゴリ登録
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} container justifyContent='center'>
          <Button variant='contained' size='large' sx={{ height: 150, width: 300 }}>
            <Typography align='center' variant='h5'>
              拠点登録
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
