import { CustomRepo, Repo } from "../types";

export const validRepo = (newRepo: Repo, repoList: CustomRepo) => {
  return !!repoList.registeredRepo.find((el) => el.id === newRepo.id);
};
