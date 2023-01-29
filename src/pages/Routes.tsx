import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<div>search repo and register repo</div>} />
      <Route path="/repo/:repoId" element={<div>repo's issue list</div>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
};
