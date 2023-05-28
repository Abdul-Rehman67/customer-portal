import { configureStore } from "@reduxjs/toolkit";
import { addItem, deleteItem, updateItem } from "./Slice/AddItem";


// export default configureStore({
//   reducer: {
//     addItem: addItemReducer,
//     updateItem:updateItemReducer
//   },
// });
const rootReducer = {
    addItem: addItem,
    updateItem: updateItem,
    updateItem: deleteItem,
  };
  const store = configureStore({
    reducer: rootReducer,
  });
  export default store;

