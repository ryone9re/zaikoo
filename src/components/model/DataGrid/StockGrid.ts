import { GridColDef } from '@mui/x-data-grid';

import { GetStockDto } from '../../../../api/@types';

export const StockGridColDef: GridColDef<GetStockDto>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'product_id', headerName: '商品名', flex: 1 },
  { field: 'supplier_id', headerName: '仕入先', flex: 1 },
  { field: 'stock_quantity', headerName: '在庫量', flex: 1 },
  { field: 'purchase_unit_price', headerName: '仕入単価', flex: 1 },
  { field: 'selling_unit_price', headerName: '販売単価', flex: 1 },
  { field: 'base_id', headerName: '拠点', flex: 1 },
  { field: 'created_at', headerName: '作成日', flex: 1 },
  { field: 'updated_at', headerName: '最終更新日', flex: 1 },
];
