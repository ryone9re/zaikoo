import { GridColDef } from '@mui/x-data-grid';

import { GetCategoryDto } from '../../../../api/@types';

export const CategoryGridColDef: GridColDef<GetCategoryDto>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'parentName', headerName: '親カテゴリ名', flex: 1 },
  { field: 'name', headerName: '子カテゴリ名', flex: 1 },
  { field: 'createdAt', headerName: '登録日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
