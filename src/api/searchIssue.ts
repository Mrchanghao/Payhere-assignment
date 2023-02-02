// https://api.github.com/search/issues?q=repo:realm/realm-java%20is:issue%20is:open&per_page=1

import { State } from "../types";
import { request } from "../utils/axiosSetting";

export async function searchIssues(owner:string, repo: string, state: State) {
  if (owner.length && repo.length) {
    if (state === 'open') {
      const data = await request.get<any>(
        `search/issues?q=repo:${owner}/${repo}%20is:issue%20is:${open}&per_page=1`
      )
      return data;
    }
   if (state === 'closed') {
    const data = await request.get<any>(
      `search/issues?q=repo:${owner}/${repo}%20is:issue%20is:${closed}&per_page=1`
    )
    return data;
   }
   if (state === 'all') {
    const data = await request.get<any>(
      `search/issues?q=repo:${owner}/${repo}%20is:issue%20&per_page=1`
    )
    return data;
   }
  }
  return {}
}

