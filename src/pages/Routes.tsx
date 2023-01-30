import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import { IssueListPage } from "./IssueListPage";
import { SearchRepos } from "./SearchRepo";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<SearchRepos />} />
      <Route path="/repo/:repoName/:ownerName" element={<IssueListPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
};
