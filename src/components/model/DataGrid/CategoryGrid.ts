import { GridColDef } from '@mui/x-data-grid';

import { GetCategoryDto } from '../../../../api/@types';

export const CategoryGridColDef: GridColDef<GetCategoryDto>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'parent_id', headerName: '親カテゴリ名', flex: 1 },
  { field: 'name', headerName: '子カテゴリ名', flex: 1 },
  { field: 'created_at', headerName: '登録日', flex: 1 },
  { field: 'updated_at', headerName: '最終更新日', flex: 1 },
];
