import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { CreateTaxRateDto, GetTaxRateDto } from '../../../../api/@types';
import { getClient, useClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { TaxRatesGridColDef } from '../../model/DataGrid/TaxRatesGrid';
import { FormSubmitFunction } from '../../model/Form/FormTemplate';
import { TaxRatesForm } from '../../model/Form/TaxRatesForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const TaxRates = () => {
  const [rows, setRows] = useState<GetTaxRateDto[]>([]);
  const { currentUser } = useCurrentUser();
  const client = useClient();

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
          <TaxRatesForm
            onSubmit={async (data) => {
              try {
                await FormSubmitFunction<CreateTaxRateDto, GetTaxRateDto>({
                  data: data,
                  f: client.api.tax_rates.post,
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
          <DataGridTemplate height={500} rows={rows} colDef={TaxRatesGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
