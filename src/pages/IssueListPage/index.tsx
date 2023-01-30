import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoInfoState } from "../../atom/repoState";
import { useIssues } from "../../hooks/useIssues";
import { useRouter } from "../routing";
import { useParams } from "react-router-dom";
import { stringify } from "qs";
import { PageWrapper } from "../SearchRepo/styles";

export const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const params = useParams<{ repoName: string; ownerName: string }>();
  console.log(params);
  const [repoInfo, setRepoInfo] = useRecoilState(repoInfoState);

  const issues = useIssues(repoInfo.owner, repoInfo.name, page);

  const router = useRouter();
  useEffect(() => {
    if (repoInfo.name.length === 0 || repoInfo.owner.length === 0) {
      setRepoInfo({
        name: params.repoName as string,
        owner: params.ownerName as string,
      });
    }
  }, [repoInfo, params]);

  console.log(issues);
  return (
    <PageWrapper>
      <h1>Issue List</h1>
    </PageWrapper>
  );
};
