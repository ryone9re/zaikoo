import { GridColDef } from '@mui/x-data-grid';

export type OfficeGridRow = {
  id: number;
  postal_code: string;
  address: string;
  email_address: string;
  phone_number?: string;
  division_name?: string;
  responsible_name?: string;
  created_at: Date;
  updated_at: Date;
};

export const SupplierOfficeGridColDef: GridColDef<OfficeGridRow & { supplier_name: string }>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'supplier_name', headerName: '仕入先名', flex: 1 },
  { field: 'postal_code', headerName: '郵便番号', flex: 1 },
  { field: 'address', headerName: '住所', flex: 1 },
  { field: 'email_address', headerName: 'メールアドレス', flex: 1 },
  { field: 'phone_number', headerName: '電話番号', flex: 1 },
  { field: 'division_name', headerName: '部署名', flex: 1 },
  { field: 'responsible_name', headerName: '担当者名', flex: 1 },
  { field: 'created_at', headerName: '作成日', flex: 1 },
  { field: 'updated_at', headerName: '最終更新日', flex: 1 },
];

export const BaseOfficeGridColDef: GridColDef<OfficeGridRow & { base_name: string }>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'base_name', headerName: '拠点名', flex: 1 },
  { field: 'postal_code', headerName: '郵便番号', flex: 1 },
  { field: 'address', headerName: '住所', flex: 1 },
  { field: 'email_address', headerName: 'メールアドレス', flex: 1 },
  { field: 'phone_number', headerName: '電話番号', flex: 1 },
  { field: 'division_name', headerName: '部署名', flex: 1 },
  { field: 'responsible_name', headerName: '担当者名', flex: 1 },
  { field: 'created_at', headerName: '作成日', flex: 1 },
  { field: 'updated_at', headerName: '最終更新日', flex: 1 },
];
