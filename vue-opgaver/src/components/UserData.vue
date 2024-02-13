<script setup>
import { ref } from 'vue';

const age = ref('');

/* watch(age, async (newAge, oldAge) => {
if(newAge >= 2) {
    console.log('hi');
} else {
    console.log(oldAge);
}
}) */

//ViewModel 
const clickButton = () => {
    age.value = true;
}





</script>

<template>
    
    <div>
        <input type="text" v-model="age" placeholder="Write your age">
        <button @click="clickButton" v-if="age > 2"> send</button>
        <hr>
        <p v-if="age">
            {{ age >= 18 ? age : 'Not old enough' }}
        </p>
    </div> 
</template>
