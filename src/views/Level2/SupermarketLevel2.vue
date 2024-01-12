<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <div id="classWrapper">
    <div id="blocker">
      <div id="instructions">
        <div class="loading-bar">
          <label id="progress-text" for="progress-bar">{{ progressText }}</label>
          <progress id="progress-bar" :value="progress" max="100"></progress>
        </div>
        <div class="current-question">{{ currentQuestion }}</div>
        <div class="options">
          <button
            v-for="(option, index) in currentOptions"
            :key="index"
            @click="handleOptionClick(option)"
            :disabled="showAnswerFeedback"
            class="option-button"
          >
          <i class="fas fa-microphone"></i> {{ option.text }}
          </button>
        </div>
        <div class="button-container">
          <button
            class="prev-button"
            v-if="showPrevButton"
            @click="prevQuestion"
            style="position: absolute; bottom: 30vh; left: 40%;"
          >
            上一題
          </button>
          <button
            class="next-button"
            v-if="showNextButton"
            @click="nextQuestion"
            style="position: absolute; bottom: 30vh; left: 50%;"
          >
            下一題
          </button>
          <button
  @click="goToLobby"
  id="return-lobby-button"
  v-if="showReturnLobbyButton"
  style="
    position: absolute;
    bottom: 15vh;
    left: 40%;
    transform: translateX(-50%);
    color: white;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;">
  返回主畫面
</button>
<button
  @click="goToSupermarketLevel3"
  id="return-lobby-button"
  style="
    position: absolute;
    bottom: 15vh;
    left: 60%;
    transform: translateX(-50%);
    color: white;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;">
    前往第三關
</button>
        </div>
        <div
          class="answer-feedback"
          v-if="showAnswerFeedback"
          style="position: absolute; bottom: 25vh; left: 50%; transform: translateX(-50%);"
        >
          {{ answerFeedback }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/runtime-core";
import test from "@/utils/supermarket2.js";
import { useRouter } from "vue-router";
const questionBank = [
  {
    question: "需要找什麼商品?",
    options: [
      { id: 1, text: "我想要雞蛋。", isCorrect: true },
      { id: 2, text: "他討厭蘋果。", isCorrect: false },
    ],
  },
  {
    question: "在最左邊那排。",
    options: [
      { id: 1, text: "我還需要牛奶。", isCorrect: true },
      { id: 2, text: "牛奶好喝。", isCorrect: false },
    ],
  },
  {
    question: "一樣在最左邊。",
    options: [
      { id: 1, text: "不客氣。", isCorrect: false },
      { id: 2, text: "好，謝謝。", isCorrect: true },
    ],
  },
  {
    question: "請問有會員嗎?",
    options: [
      { id: 1, text: "沒有會員。", isCorrect: true },
      { id: 2, text: "不要這個。", isCorrect: false },
    ],
  },
  {
    question: "需要加購什麼嗎?",
    options: [
      { id: 1, text: "你好嗎?。", isCorrect: false },
      { id: 2, text: "不用加購。", isCorrect: true },
    ],
  },
  {
    question: "需要袋子嗎?",
    options: [
      { id: 1, text: "喝水。", isCorrect: false },
      { id: 2, text: "需要。", isCorrect: true },
    ],
  },
  {
    question: "一共是200元。",
    options: [
      { id: 1, text: "100元+100元", isCorrect: true },
      { id: 2, text: "50元+100元", isCorrect: false },
    ],
  },
  {
    question: "",
    options: [
      { id: 1, text: "謝謝。", isCorrect: true },
      { id: 2, text: "你好。", isCorrect: false },
    ],
  },
];

export default {
  setup() {
    const router = useRouter();
    let obj;
    const goToLobby = () => {
      // 使用路由導航到Lobby頁面
      router.push({ name: "lobby" });
    };

    const goToSupermarketLevel3 = () => {
      router.push({ name: "SupermarketLevel3" });
    };

    onMounted(() => {
      obj = reactive(new test());
      updateQuestion(); // 在掛載時更新顯示的問題和選項
    });

    const currentQuestionIndex = ref(0);
    const showNextButton = ref(false); // 下一題的button
    const showReturnLobbyButton = ref(false);

    const currentQuestion = ref(""); // 問題
    const currentOptions = ref([]); // 選項
    const progress = ref(0);
    const progressText = ref("");
    const showPrevButton = ref(false); // 上一題的button
    const answerFeedback = ref(""); // 回覆
    const showAnswerFeedback = ref(false);

    const handleOptionClick = (option) => {
      showPrevButton.value = true;
      showNextButton.value = true;

      if (option.isCorrect) {
        answerFeedback.value = "答對了！";
      } else {
        answerFeedback.value = "答錯了";
      }

      showAnswerFeedback.value = true;
    };

    const prevQuestion = () => {
      if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
        updateQuestion();
      }
      clearAnswerFeedback(); // 清空答案反饋
    };

    const nextQuestion = () => {
      if (currentQuestionIndex.value < questionBank.length - 1) {
        currentQuestionIndex.value++;
        updateQuestion();
      } else {
        console.log("都回答完了！你很厲害！");
      }
      clearAnswerFeedback(); // 清空答案反饋
    };

    const updateQuestion = () => {
      currentQuestion.value = questionBank[currentQuestionIndex.value].question;
      currentOptions.value = questionBank[currentQuestionIndex.value].options;
      progress.value =
        (currentQuestionIndex.value / questionBank.length) * 100;
      progressText.value = `${currentQuestionIndex.value + 1} / ${
        questionBank.length
      }`;
      showPrevButton.value = currentQuestionIndex.value > 0;
      showNextButton.value =
        currentQuestionIndex.value < questionBank.length - 1;
      showReturnLobbyButton.value =
        currentQuestionIndex.value >= questionBank.length - 1;
      clearAnswerFeedback(); // 清空答案反饋
    };

    const clearAnswerFeedback = () => {
      answerFeedback.value = "";
      showAnswerFeedback.value = false;
    };

    return {
      currentQuestion,
      currentOptions,
      progressText,
      progress,
      handleOptionClick,
      nextQuestion,
      showNextButton,
      showPrevButton,
      goToLobby,
      answerFeedback,
      showAnswerFeedback,
      showReturnLobbyButton,
      prevQuestion,
      goToSupermarketLevel3
    };
  },
};
</script>

<style>
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
  left: 40%;
  bottom: 10%; 
  color: white; 
  font-size: 2rem;
  transform: translateX(-50%); 
  background-color: transparent; 
  border: none; 
  cursor: pointer;
}
#Level2Button {
  position: absolute;
  left: 60%;
  bottom: 10%; 
  color: white; 
  font-size: 2rem;
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
.button-container {
  text-align: center;
}

.prev-button,
.next-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  background-color: #2b2a2a;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: none;
}

.prev-button:hover,
.next-button:hover {
  background-color: #868686;
  
}
.current-question {
  position: absolute;
  top: 35vh; 
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
}

.option-button {
  display: inline-block;
  padding: 12px 24px;
  margin: 5px;
  border-radius: 5px;
  background-color: rgba(46, 46, 46, 0.8);
  color: white;
  font-size: 28px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.option-button:active {
  background-color:(#48b94e, 0.6);
  transform: scale(1.1);
}

.option-button:hover {
  background-color: #48b94e;
}

.answer-feedback {
  text-align: center;
  font-size: 1.8rem;
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
}

</style>