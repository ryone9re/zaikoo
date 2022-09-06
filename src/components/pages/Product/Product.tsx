import { getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';

import {
  CreateProductDto,
  GetCategoryDto,
  GetProductDto,
  GetTaxRateDto,
} from '../../../../api/@types';
import { getClient, useClient } from '../../../hooks/useClient';
import { headerWithAuthToken } from '../../../libs/personalizedData';
import { useCurrentUser } from '../../model/Auth/firebase';
import { DataGridTemplate } from '../../model/DataGrid/DataGridTemplate';
import { ProductGridColDef } from '../../model/DataGrid/ProductGrid';
import { FormSubmitFunction } from '../../model/Form/FormTemplate';
import { ProductForm } from '../../model/Form/ProductForm';
import { GridChild } from '../../ui/Template/GridChild';
import { GridParent } from '../../ui/Template/GridParent';

export const Product = () => {
  const [rows, setRows] = useState<GetProductDto[]>([]);
  const [tax, setTaxRows] = useState<GetTaxRateDto[]>([]);
  const [cat, setCat] = useState<GetCategoryDto[]>([]);
  const { currentUser } = useCurrentUser();
  const client = useClient();

  useEffect(() => {
    (async function () {
      if (currentUser) {
        const client = getClient();
        const token = await getIdToken(currentUser);
        const res = await client.api.product.get({ config: headerWithAuthToken(token) });
        setRows(res.body);
        const t = await client.api.tax_rates.get({ config: headerWithAuthToken(token) });
        setTaxRows(t.body);
        const c = await client.api.category.get({ config: headerWithAuthToken(token) });
        setCat(c.body);
      }
    })();
  }, [currentUser]);

  return (
    <main>
      <GridParent>
        <GridChild>
          <ProductForm
            onSubmit={async (data) => {
              try {
                await FormSubmitFunction<CreateProductDto, GetProductDto>({
                  data: data,
                  f: client.api.product.post,
                  currentUser: currentUser,
                });
                window.alert('登録に成功しました');
                location.reload();
              } catch {
                window.alert('登録に失敗しました');
                location.reload();
              }
            }}
            taxs={tax}
            cat={cat}
          />
        </GridChild>
        <GridChild>
          <DataGridTemplate height={500} rows={rows} colDef={ProductGridColDef} />
        </GridChild>
      </GridParent>
    </main>
  );
};
