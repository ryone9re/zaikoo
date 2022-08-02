import { GridColDef } from '@mui/x-data-grid';

export type CategoryGridRow = {
  id: number;
  parentName: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export const CategoryGridColDef: GridColDef<CategoryGridRow>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'parentName', headerName: '親カテゴリ名', flex: 1 },
  { field: 'name', headerName: '子カテゴリ名', flex: 1 },
  { field: 'createdAt', headerName: '登録日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
