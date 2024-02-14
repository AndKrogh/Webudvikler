<script setup>
import { ref } from 'vue';
import UserList from './UserListItems.vue';



const savedArr = localStorage.length;
console.log(savedArr);
const savedMsg = localStorage.getItem(savedArr + 1);
console.log(savedMsg);

const inputText = ref();
const textArray = ref([savedMsg]);


const messages = ref("");


//ViewModel 
const clickButton = () => {
    inputText.value = true;
    textArray.value.push(messages.value);
    console.log(textArray.value);   
    for (let i = 0; i < textArray.value.length; i++) {
        localStorage.setItem(textArray.value.length, textArray.value[i]);
    }

    messages.value = "";
}

</script>

<template>
    
    <div>
        <input type="text" v-model="messages" placeholder="text">
        <button @click="clickButton()"> send</button>
        <hr>
        <p v-if="inputText">
            {{ messages }}
        </p>
        <hr>
        <UserList/>
    </div> 
</template>
