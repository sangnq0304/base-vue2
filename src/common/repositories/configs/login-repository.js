import Repository from "../repository";
const resource = "v1/admin/login";

export default {
  createPost(payload) {
    return Repository.post(`${resource}`, payload);
  },
};
