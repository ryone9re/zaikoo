import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CreateStockDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({
  product_id: yup
    .number()
    .typeError('有効なIDを入力してください')
    .integer('IDは正の整数のみ入力できます')
    .positive('IDは正の整数のみ入力できます')
    .required('必須項目です'),
  supplier_id: yup
    .number()
    .typeError('有効な数値を入力してください')
    .integer('IDは正の整数のみ入力できます')
    .positive('IDは正の整数のみ入力できます')
    .required('必須項目です'),
  stock_quantity: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .required('必須項目です'),
  purchase_unit_price: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .required('必須項目です'),
  selling_unit_price: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます'),
  base_id: yup
    .number()
    .typeError('有効な数値を入力してください')
    .integer('IDは正の整数のみ入力できます')
    .positive('IDは正の整数のみ入力できます')
    .required('必須項目です'),
});

export const StockForm = ({ onSubmit }: FormSubmitProps<CreateStockDto>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateStockDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='在庫登録'>
      <TextField
        required
        label='商品ID'
        type='text'
        {...register('product_id')}
        error={'product_id' in errors}
        helperText={errors.product_id?.message}
      />
      <TextField
        required
        label='仕入先ID'
        type='text'
        {...register('supplier_id')}
        error={'supplier_id' in errors}
        helperText={errors.supplier_id?.message}
      />
      <TextField
        required
        label='数量'
        type='number'
        {...register('stock_quantity')}
        error={'stock_quantity' in errors}
        helperText={errors.stock_quantity?.message}
      />
      <TextField
        required
        label='仕入単価'
        type='number'
        {...register('purchase_unit_price')}
        error={'purchase_unit_price' in errors}
        helperText={errors.purchase_unit_price?.message}
      />
      <TextField
        label='販売単価'
        type='number'
        {...register('selling_unit_price')}
        error={'selling_unit_price' in errors}
        helperText={errors.selling_unit_price?.message}
      />
      <TextField
        required
        label='拠点ID'
        type='text'
        {...register('base_id')}
        error={'base_id' in errors}
        helperText={errors.base_id?.message}
      />
    </FormTemplate>
  );
};
