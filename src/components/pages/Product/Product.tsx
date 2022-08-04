import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetProductDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { ProductGridColDef } from '../../model/DataGrid/ProductGrid';
import { ProductForm } from '../../model/Form/ProductForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Product = () => {
  const [rows, setRows] = useState<GetProductDto[]>([]);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.product.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
      }
    });
  }, [currentUser]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <ProductForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={ProductGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
