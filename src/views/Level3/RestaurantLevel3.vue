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
                        <br>(盡量將鼠標靠近綠點)
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
                        目標:請將桌上的所有蛋糕拿到店員面前
                        <br>(點擊物件來拿取、放下)
                    </p>
                </div>
            </div>
        </div>
        <div class="crosshair"></div>
    </div>
</template>
<script>
import { reactive, onMounted } from '@vue/runtime-core'
import test from '@/utils/restaurant3.js'
export default {
    setup() {
        let obj
        let src = reactive({
            url: undefined
        })
        onMounted(() => {
            obj = reactive(new test())
        })
        return {
            obj, src,
        }
    }
}
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