<template>
  <div>
    <input v-model="newUserName" type="text" placeholder="Enter new user name" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([]);
const newUserName = ref("");

const addUser = () => {
   users.value.push({  name: newUserName.value.trim() });
   console.log(users);
};

</script>
