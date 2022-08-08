import aspida from '@aspida/axios';
import axios from 'axios';

import api from '../../api/$api';

export const useClient = () => {
  return api(
    aspida(axios, {
      baseURL: process.env.NEXT_PUBLIC_SERVER_URL!,
    })
  );
};

export const getClient = () => {
  return api(
    aspida(axios, {
      baseURL: process.env.NEXT_PUBLIC_SERVER_URL!,
    })
  );
};
