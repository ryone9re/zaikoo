import { useEffect, useState } from 'react';

import { useClient } from '../../../hooks/useClient';
import { DataGridTemplate } from '../../model/Stock/DataGrid/DataGridTemplate';
import { StockGridColDef, StockGridRow } from '../../model/Stock/DataGrid/StockGrid';
import { StockForm } from '../../model/Stock/Form/StockForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const Top = () => {
  const client = useClient();
  const [rows, setRows] = useState<StockGridRow[]>([]);

  useEffect(() => {
    const date = new Date();
    setRows([
      {
        id: 1,
        productName: 'お茶',
        productDenomination: 'g',
        supplierName: 'お茶屋',
        stockQuantity: 100,
        purchaseUnitPrice: 1000,
        sellingUnitPrice: 2000,
        baseName: '拠点1',
        createdAt: date,
        updatedAt: date,
      },
    ]);
  }, []);

  return (
    <main>
      <GridParent>
        <GridChild>
          <StockForm onSubmit={() => console.log('Sub')} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={StockGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
