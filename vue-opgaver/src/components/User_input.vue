<script setup>
import { ref } from 'vue';

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
    console.log(textArray.value.length);   
    for (let i = 0; i < textArray.value.length; i++) {
        console.log(textArray.value[i]);
        localStorage.setItem(textArray.value.length, textArray.value[i]);
    }
    

    messages.value = "";
}

const deleteItem = (index) => {
    console.log(savedArr);
    textArray.value.splice(index);
    localStorage.removeItem(savedArr + index);
};

const clearAll = (index) => {
    localStorage.clear();
    textArray.value.splice(index);
};


</script>

<template>
    
    <div>
        <input type="text" v-model="messages" placeholder="text">
        <button @click="clickButton(id)"> send</button>
        <hr>
        <p v-if="inputText">
            {{ messages }}
        </p>
        <hr>
        <ul >
            <li v-for="(text, index) in textArray" >
                <p> {{ text }} <button @click="deleteItem(index)">Delete</button></p>
                
            </li>
        </ul>
        <button @click="clearAll(index)">Clear all</button>
    </div> 
</template>
