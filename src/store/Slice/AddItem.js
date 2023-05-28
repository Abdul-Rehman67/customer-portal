import { createSlice } from "@reduxjs/toolkit";

export const addItemSlice = createSlice({
  name: "addItem",
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.data));
    },
  },
});

export const updateItemSlice = createSlice({
  name: "updateItem",
  initialState: {
    data: [],
  },
  reducers: {
    updateItem: (state, action) => {
      const { id, newData } = action.payload;
      const itemIndex = state.data.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.data[itemIndex] = { ...state.data[itemIndex], ...newData };
        localStorage.setItem("items", JSON.stringify(state.data));
      }
    },
  },
});

export const deleteItemSlice = createSlice({
  name: "deleteItem",
  initialState: {
    data: [],
  },
  reducers: {
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter((item) => item.id !== itemId);
      localStorage.setItem("items", JSON.stringify(state.data));
    },
  },
});

export const { addItem } = addItemSlice.actions;
export const { updateItem } = updateItemSlice.actions;
export const { deleteItem } = deleteItemSlice.actions;
export default {
  addItem: addItemSlice.reducer,
  updateItem: updateItemSlice.reducer,
  deleteItem: deleteItem.reducer,
};
