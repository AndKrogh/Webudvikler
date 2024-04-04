<template>
  <div>
    <h2>User List</h2>
    <div v-for="(user, index) in childUsers" :key="user.name">
      <div>
        <span>{{ user.name }}</span>
        <button @click="editUser(index)">Edit</button>
        <button @click="deleteUser(index)">Delete</button>
      </div>
    </div>
    <addUser ref="users"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import addUser from "./AddToUserList.vue"

const users = ref("");
const childUsers = ref("");


const deleteUser = (index) => {
  childUsers.value.splice(index, 1);
};

const editUser = (index) => {
  const newName = prompt("Enter new name:", childUsers.value[index].name);
  if (newName !== null && newName.trim() !== "") {
    childUsers.value[index].name = newName.trim();
  }
};

onMounted(() => {
  childUsers.value = users.value.users;
});

console.log(users);


</script>

<style scoped>
/* Add your styles here if needed */
</style>
