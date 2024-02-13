<script setup>
import { ref } from 'vue';

const inputText = ref(false);
const textArray = ref([]);

const messages = ref("");

//ViewModel 
const clickButton = () => {
    inputText.value = true;
    textArray.value.push(messages.value);

    messages.value = "";
}

const deleteItem = (index) => {
    console.log(index);
    console.log(textArray.value);
    textArray.value.splice(index);
};


</script>

<template>
    
    <div>
        <input type="text" v-model="messages" placeholder="text">
        <button @click="clickButton"> send</button>
        <hr>
        <p v-if="inputText">
            {{ messages }}
        </p>
        <hr>
        <ul>
            <li v-for="(text, index) in textArray" >
                {{ text }}
                <button @click="deleteItem(index)">Delete</button>
            </li>
        </ul>
    </div> 
</template>
