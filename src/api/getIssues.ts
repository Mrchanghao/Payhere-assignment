import { useEffect, useState } from "react";
import { request } from "../utils/axiosSetting";
import { Issues, State } from "../types";


// 해당 repo의 issue들을 볼 수 있게

// url
// https://api.github.com/repos/OWNER/REPO/issues




async function getIssues(owner: string, repo: string, state: State, page: number) {
  // state  --> open closed all 
  const data = await request.get<Issues>(
    `/repos/${owner}/${repo}/issues?per_page=20&page=${page}&state=${state}`
  );

  return data;
}


