import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: useLocalStorage('products', []),
  }),
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    removeProduct(productId) {
      this.products = this.products.filter(
        (product) => product.name !== productId
      );
    }   
  },
});
