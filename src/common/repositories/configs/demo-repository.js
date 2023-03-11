import Repository from '../repository';
const resource = 'v1/admin/demo';

export default {
  listDemo() {
    return Repository.get(`${resource}`);
  },
};
