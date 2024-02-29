<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username" class="input">
            <label for="password">Password</label>
            <input v-model="password" type="text" name="password" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script setup>
    const username = defineModel('username');
    const password = defineModel('password');

   const login = () => {
        console.log(username.value);
        window.user = username.value;
        this.$router.push({name: 'UserView'})
    }

</script>