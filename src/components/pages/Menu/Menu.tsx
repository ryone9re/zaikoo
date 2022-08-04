import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { GetMenuDto } from '../../../../api/@types';
import { getClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { MenuGridColDef } from '../../model/DataGrid/MenuGrid';
import { MenuForm } from '../../model/Form/MenuForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Menu = () => {
  const [rows, setRows] = useState<GetMenuDto[]>([]);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.menu.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
      }
    });
  }, [currentUser]);

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
