<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>ShoeShavvy</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/AllProductsView">Products</RouterLink>
        <RouterLink to="/CartView">Cart</RouterLink>
        <RouterLink to="/AdminView">Admin</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
}

h1 {
  display: flex;
  padding-left: 10px;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

a {
  color: aquamarine;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
