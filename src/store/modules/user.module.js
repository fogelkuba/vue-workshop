import RepositoryFactory from '@/repositories/repository.factory';
// const settingsRepository = RepositoryFactory.get('settings');

const initialState = () => ({
  user: null,
});

const state = initialState;

const getters = {
  user: store => store.user,
};

const mutations = {
  NEW_USER(store) {
    const id ='id_' + Math.random().toString(36).substr(2, 9);
    store.user = id;
    localStorage.setItem('user', id);
  },
  SET_USER(store, id) {
    store.user = id;
  },
};

const actions = {
  init (context) {
    const id = localStorage.getItem('user');

    if (id) {
      context.commit('SET_USER', id)
    } else {
      context.commit('NEW_USER')
    }
  }
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
