import { useState } from 'react';

import { GetMenuDto } from '../../../../api/@types';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { MenuGridColDef } from '../../model/DataGrid/MenuGrid';
import { MenuForm } from '../../model/Form/MenuForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Menu = () => {
  return (
    <GridParent>
      <GridChild>
        <MenuForm onSubmit={() => {}} />
      </GridChild>
      <GridChild>
        <DataGridTemplate height={500} rows={rows} colDef={MenuGridColDef} />
      </GridChild>
    </GridParent>
  );
};
