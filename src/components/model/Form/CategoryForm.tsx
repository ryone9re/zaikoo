import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete, FormControl, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CreateCategoryDto, GetParentCategoryDto } from '../../../../api/@types';

import { FormSubmitProps, FormTemplate } from './FormTemplate';

const schema = yup.object({
  parent: yup.object({
    name: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
  }),
  name: yup.string().typeError('有効な文字を入力してください').required('必須項目です'),
});

type Props = FormSubmitProps<CreateCategoryDto> & {
  parents: GetParentCategoryDto[];
};

export const CategoryForm = ({ onSubmit, parents }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateCategoryDto>({
    resolver: yupResolver(schema),
  });
  return (
    <FormTemplate onClick={handleSubmit(onSubmit)} submitString='登録'>
      <Controller
        name='parent'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              options={parents}
              {...field}
              renderInput={(params) => (
                <TextField
                  required
                  label='親カテゴリ名'
                  type='text'
                  {...params}
                  {...register('parent.name')}
                  error={field.name in errors}
                  helperText={errors.parent?.name?.message}
                />
              )}
            />
          </FormControl>
        )}
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
