import { Box, Button, Paper, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

export type FormSubmitProps<T> = {
  onSubmit: SubmitHandler<T>;
};

type Props = {
  children: ReactNode;
  onClick: () => void;
  submitString: string;
};

export const FormTemplate = ({ children, onClick, submitString }: Props) => {
  return (
    <Paper sx={{ minWidth: 275, maxWidth: 600, mx: 'auto' }}>
      <Box sx={{ width: '80%', mx: 'auto', py: 2 }}>
        <Stack spacing={3}>
          {children}{' '}
          <Button variant='outlined' onClick={onClick}>
            {submitString}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
