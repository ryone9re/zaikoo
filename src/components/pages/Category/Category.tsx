import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetCategoryDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { CategoryGridColDef } from '../../model/DataGrid/CategoryGrid';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { CategoryForm } from '../../model/Form/CategoryForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Category = () => {
  const [rows, setRows] = useState<GetCategoryDto[]>([]);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.category.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
      }
    });
  }, [currentUser]);

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
