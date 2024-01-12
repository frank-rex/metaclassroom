<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="login-title">歡迎登入</h1>
      <form @submit.prevent="handleSubmit" class="login-form">
        <label class="login-label">帳號:</label>
        <input type="text" required v-model="帳號" class="login-input">
        <label class="login-label">密碼:</label>
        <input type="password" required v-model="密碼" class="login-input">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <div class="submit">
          <button type="submit" class="login-button">確認</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

//const loginUrl = 'http://163.13.201.91:3000/api/login';
const loginUrl = 'https://b726-163-13-201-91.ngrok-free.app';
export default {
  data() {
    return {
      帳號: '',
      密碼: '',
      terms: false,
      passwordError: '',
    };
  },
  methods: {
    handleSubmit() {
      this.passwordError = this.密碼.length > 5 ? '' : '密碼至少需要6個字元';

      if (!this.passwordError) {
        const userData = {
          account: this.帳號,
          password: this.密碼,
        };

        axios.post(loginUrl, userData)
          .then((response) => {
            if (response.status === 200) {
              console.log('登入成功');
              console.log('使用者資料:', response.data);
              // 在這裡處理登入成功的情況，然後執行路由導航到 'lobby'
              this.$router.push({ name: 'lobby' });
            } else {
              console.log('其他成功回應');
            }
          })
          .catch((error) => {
            console.error(error);
            if (error.response && error.response.status === 401) {
              this.passwordError = '帳號或密碼錯誤';
            } else {
              this.passwordError = '發生錯誤，請稍後再試。';
            }
          });
      }
    },
  },
};
</script>




<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('src/views/Level2/picture/signup1.png');
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.login-container {
  max-width: 420px;
  background: white;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-left: 30%;
}

.login-title {
  color: #000;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-label {
  color: #000;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

.login-input {
  display: block;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  margin-bottom: 20px;
}

.terms {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.login-button {
  background-color: #2F9683;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #44b8a2;
}

.login-info {
  color: #000;
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
  font-weight: bold;
}
</style>