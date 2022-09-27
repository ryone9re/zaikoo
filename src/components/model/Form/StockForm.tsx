import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  CreateStockDto,
  GetBaseNameListDto,
  GetProductNameListDto,
  GetSupplierNameListDto,
} from '../../../../api/@types';

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

type Props = FormSubmitProps<CreateStockDto> & {
  products: GetProductNameListDto[];
  suppliers: GetSupplierNameListDto[];
  bases: GetBaseNameListDto[];
};

export const StockForm = ({ onSubmit, products, suppliers, bases }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateStockDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='在庫登録'>
      <Controller
        name='product_id'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel required id={field.name} error={field.name in errors}>
              商品名
            </InputLabel>
            <Select
              id={field.name}
              required
              type='text'
              label='商品名'
              {...register(field.name)}
              {...field}
              error={field.name in errors}
            >
              {products.map((v) => {
                return (
                  <MenuItem key={v.id} value={v.id}>
                    {v.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={field.name in errors}>
              {errors.product_id?.message}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name='supplier_id'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel required id={field.name} error={field.name in errors}>
              仕入先名
            </InputLabel>
            <Select
              id={field.name}
              required
              type='text'
              label='仕入先名'
              {...register(field.name)}
              {...field}
              error={field.name in errors}
            >
              {}
            </Select>
            <FormHelperText error={field.name in errors}>
              {errors.supplier_id?.message}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name='stock_quantity'
        control={control}
        render={({ field }) => (
          <TextField
            required
            label='数量'
            type='number'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.stock_quantity?.message}
          />
        )}
      />
      <Controller
        name='purchase_unit_price'
        control={control}
        render={({ field }) => (
          <TextField
            required
            label='仕入単価'
            type='number'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.purchase_unit_price?.message}
          />
        )}
      />
      <Controller
        name='selling_unit_price'
        control={control}
        render={({ field }) => (
          <TextField
            label='販売単価'
            type='number'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.selling_unit_price?.message}
          />
        )}
      />
      <Controller
        name='base_id'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel required id={field.name} error={field.name in errors}>
              拠点名
            </InputLabel>
            <Select
              id={field.name}
              type='text'
              label='拠点名'
              {...register(field.name)}
              {...field}
              error={field.name in errors}
            >
              {}
            </Select>
            <FormHelperText error={field.name in errors}>{errors.base_id?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </FormTemplate>
  );
};
