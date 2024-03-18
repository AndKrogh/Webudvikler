<template>
  <div>
    <input v-model="newUserName" type="text" placeholder="Enter new user name" />
    <button @click="addUser" >Add User</button>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const users = ref([{name: "hej"}]);
const newUserName = ref("");

const addUser = () => {
   users.value.push({  name: newUserName.value.trim() });
   console.log(users);
};

console.log(users); 

defineExpose({ users });

</script>
