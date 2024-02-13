<script setup>
import { ref } from 'vue';

//Model
const isClicked = ref(false);

//ViewModel
const clickButton = ( ) => {
    isClicked.value = true;
};


</script>

<template>
    <div>
        {{ 4 > 5 ? 'Større end' : 'Mindre end' }}
        <hr>
        <p v-bind:class =" {active: isClicked}">
            skift state hvis klikket
        </p>
        <button @click="clickButton">click it</button>
        {{ isClicked && 'Nu har du klikket på knappen...' }}
        <p v-if="isClicked">
            Nu har du klikket på knappen
        </p>
         <p v-else-if="!isClicked">
            Dette er ikke true state
        </p>
         <p v-else>
            Denne er meget svær at nå til
        </p>
    </div>

</template>
