import { atom } from "recoil";
import { User } from "firebase/auth";

export const authUserState = atom<User | null>({
  key: "authUserState",
  default: null,
});

export const emailState = atom<string>({
  key: 'emailState', // unique ID for this atom
  default: '', // initial state
});

export const passwordState = atom<string>({
  key: 'passwordState',
  default: '',
});

export const firstNameState = atom<string>({
  key: 'firstNameState',
  default: '',
});

export const lastNameState = atom<string>({
  key: 'lastNameState',
  default: '',
});

export const ageState = atom<string>({
  key: 'ageState',
  default: '',
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});

export const emailValidState = atom<boolean>({
  key: 'emailValidState',
  default: false,
});
