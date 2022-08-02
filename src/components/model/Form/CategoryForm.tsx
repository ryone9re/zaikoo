import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CreateCategoryDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({});

export const CategoryForm = ({ onSubmit }: FormSubmitProps<CreateCategoryDto>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='登録'>
      {/* <TextField
        required
        label='商品名'
        type='text'
        {...register('')}
        error={'rates' in errors}
        helperText={errors.?.message}
      /> */}
    </FormTemplate>
  );
};
