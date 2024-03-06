<template>
  <h1>This is the admin view</h1>
  <br />
  <hr>

  <form @submit.prevent="onSubmit">
    <label for="productName">Product Name:</label><br />
    <input
      type="text"
      id="productName"
      name="productName"
      v-model="productName"
    /><br /><br />

    <label for="productPrice">Product Price:</label><br />
    <input
      type="number"
      id="productPrice"
      name="productPrice"
      v-model="productPrice"
    /><br /><br />

    <input type="submit" value="Submit" />
  </form>
    <hr>

  <p>product name is {{ productName }}</p>
  <p>product price is {{ productPrice }}</p>
  <hr>
    <h1>Delete product</h1>
   <form @submit.prevent="onSubmitDelete" >
    <label for="productName">Product Name:</label><br />
    <input
      type="text"
      id="productName"
      name="productName"
      v-model="productNameDelete"
    /><br /><br />


    <input type="submit" value="Delete" />
  </form>


</template>
<script setup>
import { useProductStore } from "@/stores/product";
import { ref } from "vue";

const productName = ref("");
const productNameDelete = ref("");
const productPrice = ref("");

const productStore = useProductStore();


const onSubmit = () => {
    productStore.addProduct({productName, productPrice});
};


const onSubmitDelete = () => {
    productStore.removeProduct(productNameDelete);
};

</script>
