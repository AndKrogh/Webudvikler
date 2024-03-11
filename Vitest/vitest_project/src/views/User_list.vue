<template>
  <div>
    <h2>User List</h2>
    <div v-for="(user, index) in users" :key="user.name">
      <div>
        <span>{{ user.name }}</span>
        <button @click="editUser(index)">Edit</button>
        <button @click="deleteUser(index)">Delete</button>
      </div>
    </div>
    <addUser :users ="users"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import addUser from "./AddToUserList.vue"

const users = ref([

]);

console.log(users);


const deleteUser = (index) => {
  users.value.splice(index, 1);
};

const editUser = (index) => {
  const newName = prompt("Enter new name:", users.value[index].name);
  if (newName !== null && newName.trim() !== "") {
    users.value[index].name = newName.trim();
  }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
