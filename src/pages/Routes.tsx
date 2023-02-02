import { Suspense } from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import { FlexBox } from "../components/FlexBox";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { IssueListPage } from "./IssueListPage";
import { SearchRepos } from "./SearchRepo";

export const Routes = () => {
  return (
    <FlexBox>
      <ReactRouterRoutes>
        <Route path="/" element={<SearchRepos />} />
        <Route path="/repo/:repoName/:ownerName" element={<IssueListPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </ReactRouterRoutes>
    </FlexBox>
  );
};
