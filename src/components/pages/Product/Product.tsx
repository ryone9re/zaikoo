import { useState } from 'react';

import { GetProductDto } from '../../../../api/@types';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { ProductGridColDef } from '../../model/DataGrid/ProductGrid';
import { ProductForm } from '../../model/Form/ProductForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Product = () => {
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
