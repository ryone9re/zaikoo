import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormTemplate } from './FormTemplate';

export type OfficeInputs = {
  name: string;
  postalCode: string;
  address: string;
  phoneNumber?: string;
  emailAddress?: string;
  divisionName?: string;
  responsibleName?: string;
  isSupplier: boolean;
};

const schema = yup.object({
  name: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  postalCode: yup.number().typeError('有効な数字を入力してください').required('必須項目です'),
  address: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  phoneNumber: yup.number().typeError('有効な数字を入力してください').notRequired(),
  emailAddress: yup.string().typeError('有効な文字を入力してください').email().notRequired(),
  divisionName: yup.string().typeError('有効な文字を入力してください').notRequired(),
  responsibleName: yup.string().typeError('有効な文字を入力してください').notRequired(),
  isSupplier: yup.boolean(),
});

export const OfficeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OfficeInputs>({
    resolver: yupResolver(schema),
  });

  const [isSupplier, setIsSupplier] = useState<boolean>(false);

  return (
    <FormTemplate
      onClick={handleSubmit(() => {
        console.log('sub');
      })}
      submitString='登録'
    >
      <TextField
        required
        label='名前'
        type='text'
        {...register('name')}
        error={'name' in errors}
        helperText={errors.name?.message}
      />
      <TextField
        required
        label='郵便番号'
        type='text'
        {...register('postalCode')}
        error={'postalCode' in errors}
        helperText={errors.postalCode?.message}
      />
      <TextField
        required
        label='住所'
        type='text'
        {...register('address')}
        error={'address' in errors}
        helperText={errors.address?.message}
      />
      <TextField
        label='電話番号'
        type='tel'
        {...register('phoneNumber')}
        error={'phoneNumber' in errors}
        helperText={errors.phoneNumber?.message}
      />
      <TextField
        label='メールアドレス'
        type='email'
        {...register('emailAddress')}
        error={'emailAddress' in errors}
        helperText={errors.phoneNumber?.message}
      />
      <TextField
        label='担当部署名'
        type='text'
        {...register('divisionName')}
        error={'divisionName' in errors}
        helperText={errors.divisionName?.message}
      />
      <TextField
        label='担当者名'
        type='text'
        {...register('responsibleName')}
        error={'responsibleName' in errors}
        helperText={errors.responsibleName?.message}
      />
      <FormControlLabel
        label='仕入先として登録'
        control={<Checkbox required defaultChecked={isSupplier} />}
      />
    </FormTemplate>
  );
};
