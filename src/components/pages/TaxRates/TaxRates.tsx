import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetTaxRateDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { TaxRatesGridColDef } from '../../model/DataGrid/TaxRatesGrid';
import { TaxRatesForm } from '../../model/Form/TaxRatesForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const TaxRates = () => {
  const [rows, setRows] = useState<GetTaxRateDto[]>([]);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.tax_rates.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
      }
    })();
  }, [currentUser]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <TaxRatesForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={TaxRatesGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
