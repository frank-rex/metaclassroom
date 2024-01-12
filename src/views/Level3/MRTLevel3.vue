<template>
    <div id="classWrapper">
        <div id="blocker">
            <div id="instructions">
                <div class="loading-bar">
                    <label id="progress-text" for="progress-bar">Loading...</label>
                    <progress id="progress-bar" value="0" max="100"></progress>
                </div>
                <div class="centered-text top-text">
                    <p>請練習如何使用售票機的各項服務</p>
                </div>
                <div class="mid-button">
                    <button class="instruction-background" @click="showTopUpInput = true">悠遊卡加值</button>
                    <button class="instruction-background" @click="BuyRegularTicket">購買定期票</button>
                    <button class="instruction-background" @click="showBuyTicketInput = true">購買單程票</button>
                </div>
                <div class="centered-text bottom-text" id="interactions">
                    <p v-if="successMessage && !showTopUpInput && !showBuyTicketInput" :class="{ 'success-text': isSuccess, 'error-text': isFail }" class="outcome">{{ successMessage }}</p>
                    <p v-if="!showTopUpInput && !showBuyTicketInput">
                        目標1:請加值100元到悠遊卡裡
                        <br>目標2:請用100元購買票價10元的票5張
                    </p>
                    <div v-show="showTopUpInput" >
                        <div v-if="!successMessage"></div>
                        <p>你目前有 {{ balance }} 元，請問你要加值多少？</p>
                        <input type="number" v-model="bonus" placeholder="請輸入金額" class="funtion-bar"/>
                        <button @click="handleTopUp" class="funtion-button">確認加值</button>
                    </div>
                    <div v-show="showBuyTicketInput" class="buyticketfuntion">
                        <div>
                            <label>票價：</label>
                            <input type="number" v-model="ticketPrice" class="funtion-bar"/>
                        </div>
                        <div>
                            <label>票數：</label>
                            <input type="number" v-model="ticketQuantity" class="funtion-bar"/>
                        </div>
                        <div class="adjust">
                            <label>付款金額：</label>
                            <input type="number" v-model="paymentAmount" class="funtion-bar"/>
                        </div>
                        <button @click="buyOneWayTicket" class="funtion-button">確認購買</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from '@vue/runtime-core'
import test from '@/utils/MRT3.js'
export default {
    setup() {
        let obj
        let balance = ref(0);
        let src = reactive({
            url: undefined
        })
        const showTopUpInput = ref(false); // 用於悠遊卡加值的顯示
        const showBuyTicketInput = ref(false); // 用於購買單程票的顯示
        const ticketPrice = ref(0); // 票價
        const ticketQuantity = ref(0); // 票數
        const paymentAmount = ref(0); // 付款金額
        const isSuccess = ref(true);
        const isFail = ref(true);
        const successMessage = ref('');
        const bonus = ref(0);
        const currentBalance = computed(() => balance.value);

        const buyOneWayTicket = () => {
            const totalCost = ticketPrice.value * ticketQuantity.value;
            if (paymentAmount.value >= totalCost) {
                const change = paymentAmount.value - totalCost;
                successMessage.value = `購買成功，找零 ${change} 元`;
                isSuccess.value = true; // 設置為成功
                isFail.value = false;
            } else {
                successMessage.value = '購買失敗，付款金額不足';
                isFail.value = true; // 設置為失敗
                isSuccess.value = false;
            }
            showTopUpInput.value = false;
            showBuyTicketInput.value = false;
        };
        const handleTopUp = () => {
            // 在這裡處理加值操作，您可以更新 balance 和其他相關邏輯
            balance.value += bonus.value;
            showTopUpInput.value = false; // 隱藏輸入框
            showBuyTicketInput.value = false;
            successMessage.value = `加值成功，你目前有 ${balance.value} 元在悠遊卡內`;
            isSuccess.value = false;
            isFail.value = false;
        };

        onMounted(() => {
            obj = reactive(new test())
        })

        return {
            obj, balance, ticketPrice, ticketQuantity, paymentAmount, src, 
            showTopUpInput, showBuyTicketInput, handleTopUp, bonus,
            buyOneWayTicket, successMessage, currentBalance,isSuccess,isFail
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
    font-size: 2rem;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
 .funtion-bar{
    font-size: 25px;
 }
 .funtion-button{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 22px;
    background-color: gray;
    cursor: pointer; 
 }
 .adjust{
    position: relative;
    right: 32px
 }
 .outcome{
    margin-top: 130px;
    margin-bottom: 1px;
 }
 .buyticketfuntion{
    margin-top: 80px;
 }
.instruction-background {
    /*操作背景*/
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
    width: 60%;
    height: 180px;
    position: relative;
    top: -50px;
    font-size: 2.5rem;
    margin: 20px 20px;
}

.mid-button {
    display: flex;
    width: 60%;
    margin-top: 40px;
    position: relative;
    top: -10px;
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
.success-text {
    color: green;
}
.error-text {
    color: red;
}
</style>