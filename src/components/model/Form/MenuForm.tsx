import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

export type MenuInputs = {
  requestProductID: number;
  requiredProductID: number;
  requiredNumber: number;
};

const schema = yup.object({
  requestProductID: yup
    .number()
    .typeError('有効なIDを入力してください')
    .integer('IDは正の整数のみ入力できます')
    .positive('IDは正の整数のみ入力できます')
    .required('必須項目です'),
  requiredProductID: yup
    .number()
    .typeError('有効なIDを入力してください')
    .integer('IDは正の整数のみ入力できます')
    .positive('IDは正の整数のみ入力できます')
    .required('必須項目です'),
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
        label='希望商品'
        type='text'
        {...register('requestProductID')}
        error={'requestProductID' in errors}
        helperText={errors.requestProductID?.message}
      />
      <TextField
        required
        label='必要材料'
        type='text'
        {...register('requiredProductID')}
        error={'requiredProductID' in errors}
        helperText={errors.requiredProductID?.message}
      />
      <TextField
        required
        label='必要数'
        type='text'
        {...register('requiredNumber')}
        error={'requiredNumber' in errors}
        helperText={errors.requiredNumber?.message}
      />
    </FormTemplate>
  );
};
