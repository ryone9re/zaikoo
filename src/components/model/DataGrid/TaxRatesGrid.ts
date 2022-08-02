import { GridColDef } from '@mui/x-data-grid';

export type TaxRatesGridRow = {
  id: number;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
};

export const TaxRatesGridColDef: GridColDef<TaxRatesGridRow>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'rate', headerName: '税率', flex: 1 },
  { field: 'createdAt', headerName: '作成日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
