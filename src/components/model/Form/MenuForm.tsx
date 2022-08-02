import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

export type MenuInputs = {
  requestProductName: string;
  requiredProductName: string;
  requiredNumber: number;
}

const schema = yup.object({
  requestProductName: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  requiredProductName: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  requiredNumber: yup
    .number()
    .typeError('有効な数を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .min(1, '下限以下の値が指定されています')
    .required('必須項目です'),
});

export const MenuForm = ({ onSubmit }: FormSubmitProps<MenuInputs>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MenuInputs>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='登録'>
      <TextField
        required
        label='商品名'
        type='text'
        {...register('requestProductName')}
        error={'requestProductName' in errors}
        helperText={errors.requestProductName?.message}
      />
      <TextField
        required
        label='商品名'
        type='text'
        {...register('requiredProductName')}
        error={'requiredProductName' in errors}
        helperText={errors.requiredProductName?.message}
      />
      <TextField
        required
        label='商品名'
        type='text'
        {...register('requiredNumber')}
        error={'requiredNumber' in errors}
        helperText={errors.requiredNumber?.message}
      />
    </FormTemplate>
  );
};
