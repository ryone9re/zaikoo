import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { CreateCategoryDto, GetCategoryDto, GetParentCategoryDto } from '../../../../api/@types';
import { getClient, useClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { CategoryGridColDef } from '../../model/DataGrid/CategoryGrid';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { CategoryForm } from '../../model/Form/CategoryForm';
import { FormSubmitFunction } from '../../model/Form/FormTemplate';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Category = () => {
  const [rows, setRows] = useState<GetCategoryDto[]>([]);
  const [parents, setParents] = useState<GetParentCategoryDto[]>([]);
  const { currentUser } = useCurrentUser();
  const client = useClient();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.category.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
        const p = await client.api.category.parent.get({ config: headerWithAuthToken(token) });
        setParents(p.body);
      }
    })();
  }, [currentUser]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <CategoryForm
            onSubmit={async (data) => {
              try {
                await FormSubmitFunction<CreateCategoryDto, GetCategoryDto>({
                  data: data,
                  f: client.api.category.post,
                  currentUser: currentUser,
                });
                window.alert('登録に成功しました');
                location.reload();
              } catch {
                window.alert('登録に失敗しました');
                location.reload();
              }
            }}
            parents={parents}
          />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={CategoryGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
