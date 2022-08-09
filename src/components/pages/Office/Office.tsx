import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetBaseDto, GetSupplierDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { BaseOfficeGridColDef, SupplierOfficeGridColDef } from '../../model/DataGrid/OfficeGrid';
import { OfficeForm } from '../../model/Form/OfficeForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Office = () => {
  const [supplierRows, setSupplierRows] = useState<GetSupplierDto[]>([]);
  const [baseRows, setBaseRows] = useState<GetBaseDto[]>([]);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const supplierRes = await client.api.office.supplier.get({
          config: headerWithAuthToken(token),
        });
        const baseRes = await client.api.office.base.get({ config: headerWithAuthToken(token) });
        setSupplierRows(supplierRes.body);
        setBaseRows(baseRes.body);
      }
    })();
  }, [currentUser]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <OfficeForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={supplierRows} colDef={SupplierOfficeGridColDef} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={baseRows} colDef={BaseOfficeGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
