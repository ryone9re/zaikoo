import { GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns-tz';

import { GetTaxRateDto } from '../../../../api/@types';

export const TaxRatesGridColDef: GridColDef<GetTaxRateDto>[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'rate', headerName: '税率', flex: 1 },
  {
    field: 'createdAt',
    headerName: '作成日',
    flex: 1,
    valueGetter: function (params) {
      return `${format(new Date(params.row.created_at), 'yyyy-MM-dd', { timeZone: 'Asia/Tokyo' })}`;
    },
  },
  {
    field: 'updatedAt',
    headerName: '最終更新日',
    flex: 1,
    valueGetter: function (params) {
      return `${format(new Date(params.row.updated_at), 'yyyy-MM-dd', { timeZone: 'Asia/Tokyo' })}`;
    },
  },
];
