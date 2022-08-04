import { GetServerSideProps } from 'next';

import { GetTaxRateDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { TaxRatesGridColDef } from '../../model/DataGrid/TaxRatesGrid';
import { TaxRatesForm } from '../../model/Form/TaxRatesForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

type Props = {
  rows: GetTaxRateDto[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const client = getClient();
  const res = await client.api.tax_rates.get();

  return { props: { rows: res.body } };
};

export const TaxRates = ({ rows }: Props) => {
  return (
    <main>
      <GridParent>
        <GridChild>
          <TaxRatesForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={[]} colDef={TaxRatesGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
