import { useState } from 'react';

import { GetBaseDto, GetSupplierDto } from '../../../../api/@types';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { OfficeGridColDef } from '../../model/DataGrid/OfficeGrid';
import { OfficeForm } from '../../model/Form/OfficeForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const Office = () => {
  const [supplierRows, setSupplierRows] = useState<GetSupplierDto[]>([]);
  const [baseRows, setBaseRows] = useState<GetBaseDto[]>([]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <OfficeForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={supplierRows} colDef={OfficeGridColDef} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={baseRows} colDef={OfficeGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
