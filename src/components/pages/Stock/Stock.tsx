import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetStockDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { StockGridColDef } from '../../model/DataGrid/StockGrid';
import { StockForm } from '../../model/Form/StockForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Stock = () => {
  const [rows, setRows] = useState<GetStockDto[]>([]);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.stock.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
      }
    })();
  }, [currentUser]);

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
