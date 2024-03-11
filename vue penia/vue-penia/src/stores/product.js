import { defineStore } from "pinia";
import { useStorage  } from '@vueuse/core'

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: useStorage ('products', []),
  }),
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    removeProduct(productId) {
      this.products.splice(productId, 1)
    }   
  },
});
