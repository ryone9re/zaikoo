import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
  height: number;
  rows: any[];
  colDef: GridColDef[];
  pageSize?: number;
};

export const DataGridTemplate = ({ height, rows, colDef, pageSize }: Props) => {
  return (
    <Box sx={{ height: height, width: '100%' }}>
      <DataGrid rows={rows} columns={colDef} pageSize={pageSize} disableSelectionOnClick />
    </Box>
  );
};
