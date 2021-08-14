import { createStore } from "vuex";

export default createStore({
  state: {
    product1: 0,
    product2: 0,
    product3: 0,
    counter: 0,
  },
  mutations: {
    productAmount1(state) {
      state.product1++;
    },
    productAmount2(state) {
      state.product2++;
    },
    productAmount3(state) {
      state.product3++;
    },
    countIncrement(state) {
      state.counter++;
    },
    countReset(state) {
      state.counter = 0;
    },
    resetProducts(state) {
      state.product1 = 0;
      state.product2 = 0;
      state.product3 = 0;
    },
  },
});
