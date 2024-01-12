<template>
  <div id="classWrapper">
    <div id="blocker">
      <div id="instructions">
        <div class="loading-bar">
          <label id="progress-text" for="progress-bar">Loading...</label>
          <progress id="progress-bar" value="0" max="100"></progress>
        </div>
        <div class="centered-text top-text">
          <p>
            點擊進入場景，學習操作流程。
          </p>
        </div>
        <div class="instruction-background">
          <p class="instruction-text">
            上下左右、W A S D : 控制移動方向
            <br>ESC : 暫停
            <br>SPACE : 跳躍
            <br>滑鼠移動 : 轉動視角
            <br>點擊滑鼠左鍵 : 拿、放東西
          </p>
        </div>
        <div class="centered-text bottom-text">
          <p>
            目標一 : 前往教室後方查看其他場景情境。
            <br>目標二 : 前往講桌練習拿放物品.
          </p>
        </div>
        <div>
          <button @click="goToLobby" id="lobbyButton">前往主畫面</button>
        </div>
      </div>
    </div>
    <div class="crosshair"></div>
  </div>


  <!-- 使用 v-if 來條件渲染對話內容 -->
  <div v-if="currentDialog === 'supermarket'">
    <h2>{{ SupermarketdialogData.questionBank1[0].question }}</h2>
    <SupermarketLevel2 :title="SupermarketdialogData.questionBank1[0].options[0].text"
      :option1="SupermarketdialogData.questionBank1[0].options[0].isCorrect"
      :option2="SupermarketdialogData.questionBank1[0].options[1].isCorrect" />
  </div>
  <div v-else-if="currentDialog === 'restaurant'">
    <h2>{{ RestaurantdialogData.questionBank2[0].answer }}</h2>
    <RestaurantLevel2 :option1="RestaurantdialogData.questionBank2[0].options[0].isCorrect"
      :option2="RestaurantdialogData.questionBank2[0].options[1].isCorrect"
      :answer="RestaurantdialogData.questionBank2[0].answer" />
  </div>
  <div v-else-if="currentDialog === 'MRT'">
    <h2>{{ MRTdialogData.questionBank1[0].question }}</h2>
    <SupermarketLevel2 :title="MRTdialogData.questionBank1[0].options[0].text"
      :option1="MRTdialogData.questionBank1[0].options[0].isCorrect"
      :option2="MRTdialogData.questionBank1[0].options[1].isCorrect" />
  </div>
</template>

<script>
import SupermarketLevel2 from '/src/views/Level2/SupermarketLevel2.vue';
import RestaurantLevel2 from '/src/views/Level2/RestaurantLevel2.vue';
import MRTLevel2 from '/src/views/Level2/MRTLevel2.vue';
import { reactive, onMounted } from '@vue/runtime-core';
import test from '../utils/classroom.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    let obj;
    let src = reactive({
      url: undefined,
    });
    const goToLobby = () => {
      // 使用路由導航到Lobby頁面
      router.push({ name: 'lobby' });
    };
    onMounted(() => {
      obj = reactive(new test());
    });
    const state = reactive({
    });

    return {
      obj,
      src,
      goToLobby,
      currentDialog: state.currentDialog, // 透過currentDialog追蹤目前的對話內容
    };
  },
  components: {
    SupermarketLevel2,
    RestaurantLevel2,
    MRTLevel2,
  },
};
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.loading-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#lobbyButton {
  position: absolute;
  left: 50%;
  bottom:  13vh;
  color: white;
  font-size: 3rem;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

#progress-text {
  color: white;
  font-size: 2rem;
}

#progress-bar {
  width: 30%;
  margin-top: 0.5%;
  height: 2%;
}

#classWrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
}

.top-text {
  /*進入場景文字*/
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-bottom: 10px;
}

.centered-text {
  /*文字*/
  text-align: center;
  font-size: 2.5rem;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.instruction-background {
  /*操作背景*/
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  width: 40%;
  height: 200px;
  position: relative;
  top: -50px;
}

.instruction-text {
  /*操作*/
  font-size: 30px;
  margin-top: 1px;
  margin-bottom: 1px;
}

.bottom-text {
  /*目標*/
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  width: 150%;
  text-align: center;
}

.crosshair {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: greenyellow;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
}
</style>