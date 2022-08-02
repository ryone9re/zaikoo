import { GridColDef } from '@mui/x-data-grid';

export type OfficeGridRow = {
  id: number;
  name: string;
  postalCode: string;
  address: string;
  emailAddress: string;
  phoneNumber?: string;
  divisionName?: string;
  responsibleName?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const OfficeGridColDef: GridColDef<OfficeGridRow>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: '場所名', flex: 1 },
  { field: 'postalCode', headerName: '郵便番号', flex: 1 },
  { field: 'address', headerName: '住所', flex: 1 },
  { field: 'emailAddress', headerName: 'メールアドレス', flex: 1 },
  { field: 'phoneNumber', headerName: '電話番号', flex: 1 },
  { field: 'divisionName', headerName: '部署名', flex: 1 },
  { field: 'responsibleName', headerName: '担当者名', flex: 1 },
  { field: 'createdAt', headerName: '作成日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
