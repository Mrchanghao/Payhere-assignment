import { atom } from 'recoil';


export const repoState = atom<{repo: string, owner: string}>({
  key: 'repoState',
  default: {
    repo: '',
    owner: ''
  }
})