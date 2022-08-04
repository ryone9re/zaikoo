import { useState } from 'react';

import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { StockGridColDef, StockGridRow } from '../../model/DataGrid/StockGrid';
import { StockForm } from '../../model/Form/StockForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Stock = () => {
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
