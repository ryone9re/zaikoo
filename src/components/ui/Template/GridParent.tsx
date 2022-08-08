import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode | ReactNode[];
};

export const GridParent = ({ children }: Props) => {
  return (
    <Grid
      sx={{ pt: 2, px: '2rem' }}
      container
      direction='column'
      justifyContent='space-evenly'
      alignItems='stretch'
      spacing={2}
    >
      {children}
    </Grid>
  );
};
