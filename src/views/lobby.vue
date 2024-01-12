<template>
    <div class="home">
        <div class="welcomeMessage">
            請先選擇教室場景練習基本操作
            <br>Please select the classroom scene to practice basic control.</div> 
        <div class="scenesContanier">
            <div class="scenes" id="classroom" @click="goclass">
                <img src="src/views/Level2/picture/classroom_0.jpg" alt="教室">
                <div class="placeLabel">教室 Classroom</div>
            </div>
        </div>
        <div class="scenesContanier">
            <div class="scenes" id="restaurant" @click="gorest">
                <img src="src/views/Level2/picture/restaurant_0.jpg" alt="餐廳">
                <div class="placeLabel">餐廳 Restaurant</div>
            </div> 
        </div>
        <div class="scenesContanier">
            <div class="scenes" id="MRT" @click="goMRT">
            <img src="src/views/Level2/picture/mrt_0.png" alt="捷運">
                <div class="placeLabel">捷運 MRT</div>
            </div> 
        </div>
        <div class="scenesContanier">
            <div class="scenes" id="supermarket" @click="gosuper"> 
                <img src="src/views/Level2/picture/supermarket_0.jpg" alt="超市">
                <div class="placeLabel">超市 Supermarket</div>
            </div> 
        </div>
    </div>
</template>
   
   <script>
   import { useRouter } from 'vue-router';
   import axios from 'axios'
   export default {
       setup() {
           const router = useRouter()
           function gotest() {
               router.push('/test')
               console.log("放超市")
           }
           function goclass() {
               router.push('/classroom')
           }
           function gorest() {
               router.push('/restaurant')
           }
           function goMRT() {
               router.push('/MRT')
           }
           function gosuper() {
               router.push('/supermarket')
           }
           return {
               gotest,
               goclass,
               gorest,
               goMRT,
               gosuper
           }
       },
       methods: {
           getmsg() {
               this.$axios.get('/api/personal?name=MUKI').then(function (res) {
                   console.log('res=', res)
               })
           },
           postmsg() {
               this.$axios.post('/api/favorite', { name: 'money' }).then(res => {
                   console.log('post res = ', res)
               })
           }
       }
   }
   </script>
   
   <style lang="scss" scoped>


.welcomeMessage { //首次登入請選擇教室場景
    font-size: 1.2rem;
    color: white;
    text-align: center;
    margin-top: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transform: translateY(-50%);
    position: absolute;
    top:87%;
    left: 53%;
    transform: translate(-50%, -50%);
    text-align: left;
    font-weight: bold;
    
}
     .logoup {
  height: 10em;
     padding: 3em;
     will-change: filter;
     transition: filter 20ms;
     transform: translateY(45px);
   }
   .home {
       width: 100%;
       height: 100%;
    background-image: url('src/views/Level2/picture/lobby1.png');
    background-size: cover; 
       display: flex;
       justify-content: center;
       align-items: center;
       color: #F7F8FA;
       font: 1.5rem sans-serif;
   
       .scenes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
        max-width: 93%;
        max-height: 100%;
        border-radius: .3rem;
    }
    &:hover {
        img {
            opacity: 0.8; /* 設定透明度 */
        }
    }
    .placeLabel {
        font-size: 1rem;
        color: black;
    font-weight: bold;
        margin-top: 0.3rem;
    }
}
           .scenes {//按鈕
               display: flex;
               justify-content: center;
               align-items: center;
               border-radius: .3rem;
               left:70%;
               width: 11rem;
               height: 27rem;
               margin: 1rem;
               cursor: pointer;
               background-color: rgba(255, 255, 255, 0.95);
                transition: all .25s;

               &:hover {//點下按鈕後的反應
                background-color: rgba(255, 255, 255, 0.7);
        width: 12rem;
        height: 28rem;
               }
           }
       }
   
   </style>