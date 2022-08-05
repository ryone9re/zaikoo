import { Box, Button, Paper, Stack } from '@mui/material';
import { AspidaResponse } from 'aspida';
import { AxiosRequestConfig } from 'axios';
import { getIdToken, User } from 'firebase/auth';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { headerWithAuthToken } from '../../../libs/personalizedData';

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
          {children}
          <Button variant='outlined' onClick={onClick}>
            {submitString}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

type submitFunctionProps<C, G> = {
  data: C;
  f: (option: {
    body: C;
    config?: AxiosRequestConfig<any> | undefined;
  }) => Promise<AspidaResponse<G>>;
  currentUser: User | undefined | null;
};

export async function FormSubmitFunction<C, G>({
  data,
  f,
  currentUser,
}: submitFunctionProps<C, G>) {
  try {
    const token = await getIdToken(currentUser!);
    f;
    await f({ body: data, config: headerWithAuthToken(token) });
  } catch {
    throw new Error('登録に失敗しました');
  }
}
