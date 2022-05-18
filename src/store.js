import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      {
        id: 1,
        name: "heewoo",
        email: "heewoo@gmail.com",
        password: "123456",
      },
      {
        id: 2,
        name: "heewoo2",
        email: "heewoo2@gmail.com",
        password: "123456",
      },
    ],
    isLogin: false,
    isLoginError: false,
  },
  // mutations: state 값을 변화시키는 로직
  // actions: 비지니스 로직
  mutations: {
    // 로그인이 성공했을 때
    loginSuccess(state) {
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      selectedUser === null
        ? commit("loginError")
        : selectedUser.password !== loginObj.password
        ? commit("loginError")
        : commit("loginSuccess");
      console.log(this.email, this.password);
    },
  },
});
