import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CreateCategoryDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({
  parentName: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  name: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
});

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
      <TextField
        required
        label='親カテゴリ名'
        type='text'
        {...register('parent.name')}
        error={'parent.name' in errors}
        helperText={errors.parent?.name?.message}
      />
      <TextField
        required
        label='子カテゴリ名'
        type='text'
        {...register('name')}
        error={'name' in errors}
        helperText={errors.name?.message}
      />
    </FormTemplate>
  );
};
