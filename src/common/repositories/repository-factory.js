import LoginRepository from "./configs/login-repository.js";
const repositories = {
  login: LoginRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
