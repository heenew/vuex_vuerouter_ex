import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인 된 유저이면 막음
    alert("이미 로그인을 하였습니다.");
    next("/"); // 홈으로 리다이렉션
  } else {
    next(); // 아니면 그대로 입장 허용
  }
};

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 이미 로그인 된 유저이면 막음
    alert("로그인이 필요한 기능입니다.");
    next("/"); // 홈으로 리다이렉션
  } else {
    next(); // 아니면 그대로 입장 허용
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser, // 가드
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser,
      component: () =>
        import(/* webpackChunkName: "mypage" */ "./views/Mypage.vue"),
    },
  ],
});
