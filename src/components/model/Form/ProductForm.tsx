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

import { CreateProductDto, GetCategoryDto, GetTaxRateDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({
  denomination: yup.string().typeError('有効な単位を入力してください').required('必須項目です'),
  description: yup.string().typeError('有効な文字を入力してください'),
  name: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  part_number: yup
    .number()
    .typeError('有効な文字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます'),
  reorder_point: yup.number().typeError('有効な文字を入力してください'),
  memo: yup.string().typeError('有効な文字を入力してください'),
  category1_id: yup
    .number()
    .typeError('有効な文字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .min(1, '下限以下の値が指定されています')
    .required('必須項目です'),
  category2_id: yup
    .number()
    .typeError('有効な文字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .min(1, '下限以下の値が指定されています'),
  tax_id: yup
    .number()
    .typeError('有効な数字を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .min(1, '下限以下の値が指定されています')
    .required('必須項目です'),
});

type Props = FormSubmitProps<CreateProductDto> & {
  taxs: GetTaxRateDto[];
  cat: GetCategoryDto[];
};

export const ProductForm = ({ onSubmit, taxs, cat }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='登録'>
      <Controller
        name='denomination'
        control={control}
        render={({ field }) => (
          <TextField
            required
            label='単位'
            type='text'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.denomination?.message}
          />
        )}
      />
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <TextField
            required
            label='商品名'
            type='text'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <TextField
            label='説明'
            type='text'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.description?.message}
          />
        )}
      />
      <Controller
        name='part_number'
        control={control}
        render={({ field }) => (
          <TextField
            label='品番'
            type='text'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.part_number?.message}
          />
        )}
      />
      <Controller
        name='reorder_point'
        control={control}
        render={({ field }) => (
          <TextField
            label='発注点'
            type='text'
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.reorder_point?.message}
          />
        )}
      />
      <Controller
        name='memo'
        control={control}
        render={({ field }) => (
          <TextField
            label='メモ'
            type='text'
            multiline
            rows={4}
            {...register(field.name)}
            {...field}
            error={field.name in errors}
            helperText={errors.memo?.message}
          />
        )}
      />
      <Controller
        name='category1_id'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id={field.name} error={field.name in errors}>
              メインカテゴリー
            </InputLabel>
            <Select
              id={field.name}
              required
              type='text'
              label='メインカテゴリー'
              {...register(field.name)}
              {...field}
              error={field.name in errors}
            >
              {cat.map((v) => {
                return (
                  <MenuItem key={v.id} value={v.id}>
                    {v.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={field.name in errors}>
              {errors.category1_id?.message}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name='category2_id'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id={field.name} error={field.name in errors}>
              サブカテゴリー
            </InputLabel>
            <Select
              id={field.name}
              type='text'
              label='サブカテゴリー'
              {...register(field.name)}
              {...field}
              error={field.name in errors}
            >
              {cat.map((v) => {
                return (
                  <MenuItem key={v.id} value={v.id}>
                    {v.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={field.name in errors}>
              {errors.category2_id?.message}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name='tax_id'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id={field.name} error={field.name in errors}>
              税率
            </InputLabel>
            <Select
              id={field.name}
              required
              type='text'
              label='税率'
              {...register(field.name)}
              {...field}
              error={field.name in errors}
            >
              {taxs.map((v) => {
                return (
                  <MenuItem key={v.id} value={v.id}>
                    {v.rate * 100} %
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={field.name in errors}>{errors.tax_id?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </FormTemplate>
  );
};
