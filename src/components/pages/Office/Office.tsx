import useAspidaSWR from '@aspida/swr';

import { useClient } from '../../../hooks/useClient';
import { DataGridTemplate } from '../../model/Stock/DataGrid/DataGridTemplate';
import { OfficeGridColDef } from '../../model/Stock/DataGrid/OfficeGrid';
import { OfficeForm } from '../../model/Stock/Form/OfficeForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const Office = () => {
  const client = useClient();

  const { data } = useAspidaSWR(client.api.office.supplier, { suspense: true });

  return (
    <main>
      <GridParent>
        <GridChild>
          <OfficeForm />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={data} colDef={OfficeGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
