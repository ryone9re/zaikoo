import { GridColDef } from '@mui/x-data-grid';

import { GetMenuDto } from '../../../../api/@types';

export const MenuGridColDef: GridColDef<GetMenuDto>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'requestProductName', headerName: '希望商品', flex: 1 },
  { field: 'requiredProductName', headerName: '必要材料', flex: 1 },
  { field: 'requiredNumber', headerName: '必要数', flex: 1 },
  { field: 'createdAt', headerName: '登録日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
