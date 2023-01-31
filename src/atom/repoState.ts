import { atom, selectorFamily } from 'recoil';
import { CustomRepo } from '../types';
import { localStorageEffect } from '../utils/Storage';


export const repoState = atom<CustomRepo>({
  key: 'repoState',
  default: {
    registeredRepo: []
  } ,
  effects: [localStorageEffect('repos')]
})



export const repoInfoState = atom<{ 
  name: string;
  owner: string}>({
    key: 'repoInfoState',
    default: {
      name: '',
      owner: '',
    },
  })


