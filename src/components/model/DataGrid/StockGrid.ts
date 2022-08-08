import { GridColDef } from '@mui/x-data-grid';

import { GetStockDto } from '../../../../api/@types';

export const StockGridColDef: GridColDef<GetStockDto>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'productName', headerName: '商品名', flex: 1 },
  { field: 'supplierName', headerName: '仕入先', flex: 1 },
  { field: 'stockQuantity', headerName: '在庫量', flex: 1 },
  { field: 'purchaseUnitPrice', headerName: '仕入単価', flex: 1 },
  { field: 'sellingUnitPrice', headerName: '販売単価', flex: 1 },
  { field: 'baseName', headerName: '拠点', flex: 1 },
  { field: 'createdAt', headerName: '作成日', flex: 1 },
  { field: 'updatedAt', headerName: '最終更新日', flex: 1 },
];
