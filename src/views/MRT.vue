<template>
  <div id="classWrapper">
    <div id="blocker">
      <div id="instructions">
        <div class="loading-bar">
          <label id="progress-text" for="progress-bar">Loading...</label>
          <progress id="progress-bar" value="0" max="100"></progress>
        </div>
        <div class="text-container">
          <div class="top">
            <p>點擊播放，再進入參觀場景。</p>
          </div>
          <div class="note">
            <p>暫停、更換播放速度請按esc。</p>
          </div>
          <div class="play-audio-section">
      
            <div class="audio-row">
              <span class="audio-label">&ensp;月&ensp;&ensp;台</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/月台.mp3" type="audio/mpeg">
              </audio>
            </div>
 
            <div class="audio-row">
              <span class="audio-label">一號月台</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/1號月台.mp3" type="audio/mpeg">
              </audio>
            </div>
    
            <div class="audio-row">
              <span class="audio-label">完整句子</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/1號月台怎麼走.mp3" type="audio/mpeg">
              </audio>
            </div>
          </div>
          
          <!-- 新的一列 -->
          <div class="play-audio-section">
        
            <div class="audio-row">
              <span class="audio-label"> &ensp;加&ensp;&ensp;值</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/加值.mp3" type="audio/mpeg">
              </audio>
            </div>
       
            <div class="audio-row">
              <span class="audio-label">想要加值</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/想要加值.mp3" type="audio/mpeg">
              </audio>
            </div>
     
            <div class="audio-row">
              <span class="audio-label">完整句子</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/想要加值100元.mp3" type="audio/mpeg">
              </audio>
            </div>
          </div>

    <!-- 新的一列 -->
          <div class="play-audio-section">
         
            <div class="audio-row">
              <span class="audio-label">&ensp;售票機</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/售票機.mp3" type="audio/mpeg">
              </audio>
            </div>
          
            <div class="audio-row">
              <span class="audio-label">用售票機</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/用售票機.mp3" type="audio/mpeg">
              </audio>
            </div>
           
            <div class="audio-row">
              <span class="audio-label">完整句子</span>
              <audio controls id="audioPlayer">
                <source src="src/utils/捷運/請教我用售票機.mp3" type="audio/mpeg">
              </audio>
            </div>
          </div>

     <!-- 新的一列 -->
     <div class="play-audio-section">
         
         <div class="audio-row">
           <span class="audio-label"> &ensp;&emsp;票&emsp;</span>
           <audio controls id="audioPlayer">
             <source src="src/utils/捷運/票.mp3" type="audio/mpeg">
           </audio>
         </div>
       
         <div class="audio-row">
           <span class="audio-label">買&ensp;&ensp;&ensp;&ensp;票</span>
           <audio controls id="audioPlayer">
             <source src="src/utils/捷運/買票.mp3" type="audio/mpeg">
           </audio>
         </div>
        
         <div class="audio-row">
           <span class="audio-label">完整句子</span>
           <audio controls id="audioPlayer">
             <source src="src/utils/捷運/我想要買票.mp3" type="audio/mpeg">
           </audio>
         </div>
       </div>

  <!-- 新的一列 -->
  <div class="play-audio-section">
         
         <div class="audio-row">
           <span class="audio-label"> &ensp;淡&ensp;&ensp;水</span>
           <audio controls id="audioPlayer">
             <source src="src/utils/捷運/淡水.mp3" type="audio/mpeg">
           </audio>
         </div>
       
         <div class="audio-row">
           <span class="audio-label">去 淡 水&ensp;</span>
           <audio controls id="audioPlayer">
             <source src="src/utils/捷運/去淡水.mp3" type="audio/mpeg">
           </audio>
         </div>
        
         <div class="audio-row">
           <span class="audio-label">完整句子</span>
           <audio controls id="audioPlayer">
             <source src="src/utils/捷運/我想要去淡水.mp3" type="audio/mpeg">
           </audio>
         </div>
       </div>


        </div>
        <button @click="goToLobby" id="lobbyButton">前往主畫面</button>
        <button @click="goToMRTLevel2" id="Level2Button">前往第二關</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from '@vue/runtime-core'
import test from '../utils/MRT.js'
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    let obj;
    const goToLobby = () => {
      // 使用路由導航到Lobby頁面
      router.push({ name: 'lobby' });
    };
    const goToMRTLevel2=()=>{
      // 使用路由導航到level2頁面
      router.push({ name: 'MRTLevel2' });
    }
    onMounted(() => {
      obj = reactive(new test());
    });

    const state = reactive({});

    return {
      obj,
      goToLobby,
      goToMRTLevel2,
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
.top {
  font-size: 35px;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap; 
}

.note {
  font-size: 30px;
  position: absolute;
  bottom: 105%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
#audioPlayer {
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100px; 
  height: 25px; 
 
}
#audioPlayer::-webkit-media-controls-current-time-display,
#audioPlayer::-webkit-media-controls-time-remaining-display {
  display: none;
}
.play-audio-section {
  display: flex;
  align-items: center; /* 垂直居中对齐音频元素 */
  margin-bottom: 5px;
}

.audio-row {
  display: flex;
  align-items: center; /* 垂直居中对齐文字和音频 */
  margin-right: 20px; /* 可以调整音频元素之间的水平间距 */
  margin-bottom: 10px; /* 增加底部边距以增加行之间的空格 */
}

.audio-label {
  white-space: nowrap; /* 不換行 */
  margin-right: 5px; /* 可以根據需要調整間距 */
}

.text-container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  
    background-color: rgba(0, 0, 0, 0.7); 
    border-radius: 10px; 
    backdrop-filter: blur(5px); 
    color: white; 
    text-align: center;
}



#lobbyButton {
  position: absolute;
  left: 40%;
  bottom:  15vh; 
  color: white; 
  font-size: 3rem;
  transform: translateX(-50%); 
  background-color: transparent; 
  border: none; 
  cursor: pointer;
}
#Level2Button {
  position: absolute;
  left: 60%;
  bottom:  15vh; 
  color: white; 
  font-size: 3rem;
  transform: translateX(-50%); 
  background-color: transparent; 
  border: none; 
  cursor: pointer;
}

.button-container {
  text-align: center;
}

</style>