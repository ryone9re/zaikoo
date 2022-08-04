import { atom } from 'recoil';

import type { User } from 'firebase/auth';

export const currentUserState = atom<undefined | null | User>({
  key: 'CurrentUser',
  default: undefined,
  dangerouslyAllowMutability: true,
});
