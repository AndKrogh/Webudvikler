<template>
  <main>
    <div v-for="products in productsArr" :key="products" class="product">
        <img
          src="https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21"
          alt="Product 1"
        />
        <h2>{{ products.productName }}</h2>
        <p>${{ products.productPrice }}</p>
        <button @click="$router.push('/ProductView')">Add to Cart</button>
    </div>
  </main>

  <footer>
    <p>&copy; 2022 Webshop. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { useProductStore } from "@/stores/product";

const productStore = useProductStore();

const productsArr = JSON.parse(JSON.stringify(productStore.products));

</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
}

.product {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  height: 250px;
}

.product img {
  width: 100px;
  height: 100px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
</style>
