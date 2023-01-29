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