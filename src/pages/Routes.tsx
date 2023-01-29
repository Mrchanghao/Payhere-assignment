import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import { SearchRepos } from "./SearchRepo";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<SearchRepos />} />
      <Route path="/repo/:repoId" element={<div>repo's issue list</div>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
};
