import { useState } from 'react';

import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { StockGridColDef, StockGridRow } from '../../model/DataGrid/StockGrid';
import { StockForm } from '../../model/Form/StockForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const Stock = () => {
  const [rows, setRows] = useState<StockGridRow[]>([]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <StockForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={StockGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
