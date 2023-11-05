import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantidade: 0,
    totalQuantidade: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist) {
          exist.quantidade++;
          exist.totalPrice += productId.price;
          exist.toalPrice = exist.totalPrice + productId.price;
          state.totalQuantidade++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            quantidade: 1,
            image: productId.image,
            totalPrice: productId.price,
            title: productId.title,
            description: productId.description,
          });
          state.totalQuantidade++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;

      const productToRemove = state.cart.find(
        (product) => product.id === productId.id
      );

      if (productToRemove) {
        if (productToRemove.quantidade > 1) {
          productToRemove.quantidade--;
          productToRemove.totalPrice -= productToRemove.price;
        } else {
          state.cart = state.cart.filter(
            (product) => product.id !== productId.id
          );
        }
        state.totalQuantidade--;
        state.totalPrice -= productToRemove.price;
      }
      if (state.cart.length === 0) {
        state.totalPrice = 0;
      }
    },
  },
  emptyCar: (state, action) => {
    state.cart = [];
    state.quantidade = 0;
    state.totalQuantidade = 0;
    state.totalPrice = 0;
    return state;
  },
});

export const { addToCart, removeFromCart, emptyCar } = cartSlice.actions;
export default cartSlice.reducer;
