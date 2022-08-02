import { getAuth, getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetTaxRateDto } from '../../../../api/@types';
import { useClient } from '../../../hooks/useClient';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { TaxRatesGridColDef } from '../../model/DataGrid/TaxRatesGrid';
import { TaxRatesForm } from '../../model/Form/TaxRatesForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const TaxRates = () => {
  const [rows, setRows] = useState<GetTaxRateDto[]>([]);

  const client = useClient();

  useEffect(() => {
    const fetcher = async () => {
      const auth = getAuth();
      if (auth.currentUser) {
        const token = await getIdToken(auth.currentUser);
        const res = await client.api.tax_rates.get({
          config: { headers: { Authorization: token } },
        });
        setRows(res.body);
      }
    };
    fetcher();
  }, [client.api.tax_rates]);

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
