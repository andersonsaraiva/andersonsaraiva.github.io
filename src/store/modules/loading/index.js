import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const loading = {
  namespaced: true,
  state: {
    isLoading: false
  },
  getters,
  mutations,
  actions
};
