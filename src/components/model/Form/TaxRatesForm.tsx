import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CreateTaxRateDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({
  rate: yup
    .number()
    .typeError('有効な数値を入力してください')
    .positive('マイナスの値はセットできません')
    .integer('整数値のみ登録できます')
    .required('必須項目です'),
});

export const TaxRatesForm = ({ onSubmit }: FormSubmitProps<CreateTaxRateDto>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaxRateDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='登録'>
      <TextField
        required
        label='税率'
        type='text'
        {...register('rate')}
        error={'rates' in errors}
        helperText={errors.rate?.message}
      />
    </FormTemplate>
  );
};
