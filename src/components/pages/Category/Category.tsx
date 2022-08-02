import { useState } from 'react';

import { GetCategoryDto } from '../../../../api/@types';
import { CategoryGridColDef } from '../../model/DataGrid/CategoryGrid';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { CategoryForm } from '../../model/Form/CategoryForm';
import { GridChild } from '../Template/GridChild';
import { GridParent } from '../Template/GridParent';

export const Category = () => {
  const [rows, setRows] = useState<GetCategoryDto[]>([]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <CategoryForm onSubmit={() => {}} />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={CategoryGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
