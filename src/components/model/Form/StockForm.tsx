import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

export type StockInputs = {
  productName: string;
  supplierName: string;
  stockQuantity: number;
  purchaseUnitPrice: number;
  sellingUnitPrice?: number;
  baseName: string;
};

const schema = yup.object({
  productName: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  supplierName: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  stockQuantity: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .required('必須項目です'),
  purchaseUnitPrice: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .required('必須項目です'),
  sellingUnitPrice: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .notRequired(),
  baseName: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
});

export const StockForm = ({ onSubmit }: FormSubmitProps<StockInputs>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StockInputs>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='在庫登録'>
      <TextField
        required
        label='商品名'
        type='text'
        {...register('productName')}
        error={'productName' in errors}
        helperText={errors.productName?.message}
      />
      <TextField
        required
        label='仕入先名'
        type='text'
        {...register('supplierName')}
        error={'supplierName' in errors}
        helperText={errors.supplierName?.message}
      />
      <TextField
        required
        label='数量'
        type='number'
        {...register('stockQuantity')}
        error={'stockQuantity' in errors}
        helperText={errors.stockQuantity?.message}
      />
      <TextField
        required
        label='仕入単価'
        type='number'
        {...register('purchaseUnitPrice')}
        error={'purchaseUnitPrice' in errors}
        helperText={errors.purchaseUnitPrice?.message}
      />
      <TextField
        label='販売単価'
        type='number'
        {...register('sellingUnitPrice')}
        error={'sellingUnitPrice' in errors}
        helperText={errors.sellingUnitPrice?.message}
      />
      <TextField
        required
        label='拠点名'
        type='text'
        {...register('baseName')}
        error={'baseName' in errors}
        helperText={errors.baseName?.message}
      />
    </FormTemplate>
  );
};
