import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { CreateStockDto, GetStockDto } from '../../../../api/@types';
import { getClient, useClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { StockGridColDef } from '../../model/DataGrid/StockGrid';
import { FormSubmitFunction } from '../../model/Form/FormTemplate';
import { StockForm } from '../../model/Form/StockForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Stock = () => {
  const [rows, setRows] = useState<GetStockDto[]>([]);
  const { currentUser } = useCurrentUser();
  const client = useClient();

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
          <StockForm
            onSubmit={async (d) => {
              const data: CreateStockDto = {
                product_id: d.productID,
                supplier_id: 1,
                stock_quantity: d.stockQuantity,
                purchase_unit_price: d.purchaseUnitPrice,
                base_id: 1,
              };
              try {
                await FormSubmitFunction<CreateStockDto, GetStockDto>({
                  data: data,
                  f: client.api.stock.post,
                  currentUser: currentUser,
                });
                window.alert('登録に成功しました');
                location.reload();
              } catch {
                window.alert('登録に失敗しました');
                location.reload();
              }
            }}
          />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={StockGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
