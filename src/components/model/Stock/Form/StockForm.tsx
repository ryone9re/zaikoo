import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

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

export const StockForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StockInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<StockInputs> = async (data) => {
    console.log(data);
  };
  return (
    <Paper sx={{ minWidth: 275, maxWidth: 600, mx: 'auto' }}>
      <Box sx={{ width: '80%', mx: 'auto', py: 2 }}>
        <Stack spacing={3}>
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
          <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
            在庫登録
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
