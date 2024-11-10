import { selector } from 'recoil';
import { authState } from '../atoms/authAtom';

export const isAuthenticated = selector({
  key: 'isAuthenticated',
  get: ({get}) => {
    const state = get(authState);
    return !!state.user;
  },
});