<script setup>
import { ref } from 'vue';

const inputText = ref(false);
const textArray = ref([]);

const messages = ref("");

//ViewModel 
const clickButton = () => {
    inputText.value = true;
    textArray.value.push(messages.value);
}

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
            <li v-for="text in textArray">
                {{ text }}
            </li>
        </ul>
    </div> 
</template>
