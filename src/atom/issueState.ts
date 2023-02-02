import { atom, selector, selectorFamily } from 'recoil';
import { Issues, State } from '../types';
import { request } from '../utils/axiosSetting';
import { repoInfoState } from './repoState';


export const issuesListAsyncState = selectorFamily<Issues | [], {owner: string, repo: string, state: State, page: number}>({
  key: 'issuesListAsyncState',
  get: ({owner, repo, state, page}) => async ({get}) => {
      if (owner.length && repo.length) {
        const response = await request.get<Issues>( `/repos/${owner}/${repo}/issues?per_page=20&page=${page}&state=${state}`);
        return response;
      }
      return []
  }
})


export const firstIssueItem = selectorFamily<number,  {owner: string, repo: string, state: State, page: number}>({
  key: 'firstIssueItem',
  get: ({owner, repo, state, page}) => ({get}) => {
    const firstItem = get(issuesListAsyncState( {owner, repo, state, page}))[0];
    return firstItem.number;
  }
})

interface SearchIssueResult {
  total_count: number;
  incomplete_results: boolean;
  items: any[]
}


