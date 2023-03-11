import { RepositoryFactory } from '@/common/repositories/repository-factory';
const demo = RepositoryFactory.get('demo');

export default {
  async demoLogin({ commit }) {
    const response = await demo.listDemo();
    if (response.success) {
      const data = response?.data?.data;
      commit('SET_DEMO', data);
    } else {
      commit('SET_DEMO', []);
    }
  },
};
