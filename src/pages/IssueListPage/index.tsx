import { useState } from "react"
import { useRecoilValue } from "recoil"
import { repoInfoState } from "../../atom/repoState"
import { useIssues } from "../../hooks/useIssues"

export const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const repoInfo = useRecoilValue(repoInfoState)
  console.log(repoInfo)
  if(repoInfo?.name && repoInfo.owner) {
    const issues = useIssues(repoInfo.owner, repoInfo.name, page)
  }
  return (
    <div>
      issue list page
    </div>
  )
}