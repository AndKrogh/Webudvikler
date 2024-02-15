<script setup>

const props = defineProps({
    textArray: Array
})

console.log(props.textArray);

const savedArr = localStorage.length;
/* console.log(savedArr); */
const savedMsg = localStorage.getItem(savedArr + 1);
/* console.log(savedMsg); */


const deleteItem = async (index) => {
   /*  console.log(index); */
    props.textArray.splice(index);
    localStorage.removeItem(savedArr + 1);
};

const clearAll = (index) => {
    localStorage.clear();
    props.textArray.splice(index);
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
