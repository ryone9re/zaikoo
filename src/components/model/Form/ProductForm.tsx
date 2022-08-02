import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CreateProductDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({
  deonmination: yup.string().typeError('有効な単位を入力してください').required('必須項目です'),
  name: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  description: yup.string().typeError('有効な文字を入力してください').notRequired(),
  category_id: yup
    .number()
    .typeError('有効な文字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .min(1, '下限以下の値が指定されています')
    .required('必須項目です'),
  tax_id: yup
    .number()
    .typeError('有効な数字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .min(1, '下限以下の値が指定されています')
    .required('必須項目です'),
  part_number: yup
    .number()
    .typeError('有効な文字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .notRequired(),
  reorder_point: yup.number().typeError('有効な文字を入力してください').notRequired(),
});

export const ProductForm = ({ onSubmit }: FormSubmitProps<CreateProductDto>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='登録'>
      <TextField
        required
        label='単位'
        type='text'
        {...register('denomination')}
        error={'denomination' in errors}
        helperText={errors.denomination?.message}
      />
      <TextField
        required
        label='商品名'
        type='text'
        {...register('name')}
        error={'name' in errors}
        helperText={errors.name?.message}
      />
      <TextField
        required
        label='説明'
        type='text'
        {...register('description')}
        error={'description' in errors}
        helperText={errors.description?.message}
      />
      <TextField
        required
        label='品番'
        type='text'
        {...register('part_number')}
        error={'part_number' in errors}
        helperText={errors.part_number?.message}
      />
      <TextField
        required
        label='発注点'
        type='text'
        {...register('reorder_point')}
        error={'reorder_point' in errors}
        helperText={errors.reorder_point?.message}
      />
      <TextField
        required
        label='カテゴリID'
        type='text'
        {...register('category_id')}
        error={'category_id' in errors}
        helperText={errors.category_id?.message}
      />
      <TextField
        required
        label='税率ID'
        type='text'
        {...register('tax_id')}
        error={'tax_id' in errors}
        helperText={errors.tax_id?.message}
      />
    </FormTemplate>
  );
};
