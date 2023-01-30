import { atom } from 'recoil';
import { CustomRepo } from '../types';
import { localStorageEffect } from '../utils/Storage';


export const repoState = atom<CustomRepo>({
  key: 'repoState',
  default: {
    registeredRepo: []
  } ,
  effects: [localStorageEffect('repos')]
})

export const repoInfoState = atom<{ id: number;
  name: string;
  owner: string} | null>({
    key: 'repoInfoState',
    default: null,
  })