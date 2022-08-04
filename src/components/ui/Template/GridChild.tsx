import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode | ReactNode[];
};

export const GridChild = ({ children }: Props) => {
  return (
    <Grid item xs>
      {children}
    </Grid>
  );
};
