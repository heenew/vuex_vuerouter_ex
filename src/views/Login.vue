<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="email"
              label="이메일을 입력하세요"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="패스워드를 입력하세요"
              type="password"
            ></v-text-field>
            <v-btn color="primary" @click="login" large block depressed
              >로그인</v-btn
            >
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
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
    };
  },
  methods: {
    login() {
      // 1. 전체 유저에서 해당 이메일로 유저를 찾는다.
      // 2. 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
      console.log(this.email, this.password);
    },
  },
};
</script>
