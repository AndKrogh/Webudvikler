<template>
  <h1>This is the admin view</h1>
  <br />
  <hr />
  <h1> Submit new Product</h1>
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

     <label for="productDescription">Product Description:</label><br />
    <input
      type="text"
      id="productDescription"
      name="productDescription"
      v-model="productDescription"
    /><br /><br />

    <label for="productSize">Product Size:</label><br />
    <input
      type="number"
      id="productSize"
      name="productSize"
      v-model="productSize"
    /><br /><br />

    <label for="productColor">Product Color:</label><br />
    <input
      type="text"
      id="productColor"
      name="productColor"
      v-model="productColor"
    /><br /><br />

    <label for="productQuantity">Product Quantity:</label><br />
    <input
      type="number"
      id="productQuantity"
      name="productQuantity"
      v-model="productQuantity"
    /><br /><br />

    <input type="submit" value="Submit" />
  </form>
  <hr />

  <p>Product name is {{ productName }}</p>
  <p>Product price is {{ productPrice }}</p>
  <p>Product description is {{ productDescription }}</p>
  <p>Product size is {{ productSize }}</p>
  <p>Product color is {{ productColor }}</p>
  <p>Product quantity is {{ productQuantity }}</p>
  <hr />
  <h1>Delete product</h1>
  <form @submit.prevent="onSubmitDelete">
    <label for="productNameDelete">Product Name:</label><br />
    <input
      type="text"
      id="productNameDelete"
      name="productNameDelete"
      v-model="productNameDelete"
    /><br /><br />

    <input type="submit" value="Delete" />
  </form>
  <p>product name is {{ productNameDelete }}</p>
</template>
<script setup>
import { useProductStore } from "@/stores/product";
import { ref } from "vue";

const productName = ref("");
const productNameDelete = ref("");
const productPrice = ref("");
const productDescription = ref("");
const productSize = ref("");
const productColor = ref("");
const productQuantity = ref("");

const productStore = useProductStore();
console.log(productStore.products);


const onSubmit = () => {
  const productId = productStore.products.length;
  console.log(productId);
  productStore.addProduct({ productId, productName, productPrice });
};

  /* const onSubmitDelete = () => {
    console.log(productNameDelete);
    productStore.removeProduct(productNameDelete);
  }; */
</script>
