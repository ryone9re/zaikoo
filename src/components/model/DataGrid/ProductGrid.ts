import { GridColDef } from '@mui/x-data-grid';

export type ProductGridRow = {
  id: number;
  denomination: string;
  name: string;
  description?: string;
  partNumber?: number;
  reorderPoint?: number;
  categoryId: number;
  taxId: number;
  createdAt: Date;
  updatedAt: Date;
};

export const ProductGridColDef: GridColDef<ProductGridRow>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'denomination', headerName: '単位', flex: 1 },
  { field: 'name', headerName: '商品名', flex: 1 },
  { field: 'description', headerName: '説明', flex: 1 },
  { field: 'partNumber', headerName: '品番', flex: 1 },
  { field: 'reorderPoint', headerName: '発注点', flex: 1 },
  { field: 'categoryId', headerName: 'カテゴリID', flex: 1 },
  { field: 'taxId', headerName: '税率ID', flex: 1 },
  { field: 'createdAt', headerName: '作成日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
