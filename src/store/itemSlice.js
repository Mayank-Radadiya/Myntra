import { createSlice } from "@reduxjs/toolkit";
import { defaultItem } from "../data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: defaultItem,
  reducers: {
    addItems: (store, action) => {
      return action.payload
    },
  },
});

export const ItemActions = itemSlice.actions;
export default itemSlice;
