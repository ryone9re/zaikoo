import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { CreateMenuDto, GetMenuDto } from '../../../../api/@types';
import { getClient, useClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { MenuGridColDef } from '../../model/DataGrid/MenuGrid';
import { FormSubmitFunction } from '../../model/Form/FormTemplate';
import { MenuForm } from '../../model/Form/MenuForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Menu = () => {
  const [rows, setRows] = useState<GetMenuDto[]>([]);
  const { currentUser } = useCurrentUser();
  const client = useClient();

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
        <MenuForm
          onSubmit={async (d) => {
            const data: CreateMenuDto = {
              request_product_id: d.requestProductID,
              requires: [
                { required_product_id: d.requiredProductID, required_number: d.requiredNumber },
              ],
            };
            try {
              await FormSubmitFunction<CreateMenuDto, GetMenuDto>({
                data: data,
                f: client.api.menu.post,
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
        <DataGridTemplate height={500} rows={rows} colDef={MenuGridColDef} />
      </GridChild>
    </GridParent>
  );
};
