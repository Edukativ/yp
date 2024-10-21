import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItemsCount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const { count, item } = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        existingItem.count += count;
      } else {
        state.items.push({
          ...item,
          count: count,
        });
      }

      state.totalItemsCount += count;
    },
    removeItemFromCart(state, action) {
      const { name } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        state.items = state.items.filter((item) => item.name !== name);
      }

      state.totalItemsCount = 0;
    },
    removeSingleItemFromCart(state, action) {
      const { name } = action.payload;

      console.log(name);

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.count -= 1;
        if (existingItem.count <= 0) {
          state.items = state.items.filter((item) => item.name !== name);
        }
        state.totalItemsCount = Math.max(state.totalItemsCount - 1, 0);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeSingleItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
