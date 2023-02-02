import { atom, selectorFamily } from 'recoil';
import { searchRepos } from '../api/searchRepos';
import { CustomRepo, Repos } from '../types';
import { request } from '../utils/axiosSetting';
import { localStorageEffect } from '../utils/Storage';
import { SearchState } from './searchState';


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




export const repoAsyncState = selectorFamily<Repos | null, {page: number}>({
  key: 'repoAsyncState',
  get: ({page}) => async ({get}) => {
    const query = get(SearchState);
      if (query.length) {
        // const response = await request.get<Repos>(`/search/repositories?q=${query}&per_page=10&page=${page}`);
        const response = await searchRepos(query, page)
        return response;
      }
      return null;
    }
})