import { useState } from 'react';

import { GetProductDto } from '../../../../api/@types';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { ProductGridColDef } from '../../model/DataGrid/ProductGrid';
import { ProductForm } from '../../model/Form/ProductForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const Product = () => {
  const [rows, setRows] = useState<GetProductDto[]>([]);

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
