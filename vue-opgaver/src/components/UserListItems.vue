<script setup>
import { ref } from 'vue';

const savedArr = localStorage.length;
console.log(savedArr);
const savedMsg = localStorage.getItem(savedArr + 1);
console.log(savedMsg);

const textArray = ref([savedMsg]);



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
        <ul >
            <li v-for="(text, index) in textArray" >
                <p> {{ text }} <button @click="deleteItem(index)">Delete</button></p>
                
            </li>
        </ul>
        <button @click="clearAll(index)">Clear all</button>
</template>
