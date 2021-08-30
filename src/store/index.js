import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    usuario: null,
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_USUARIO(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    fetchUsuario(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      Vue.prototype.$api.get("/api/user").then((response) => {
        context.commit("SET_USUARIO", response.data);
      }).finally(()=> context.commit("SET_LOADING_STATUS", "notLoading") );
    },
  },
  getters: {
    usuario: (state) => {
      return state.usuario;
    },
  },
  modules: {},
});
