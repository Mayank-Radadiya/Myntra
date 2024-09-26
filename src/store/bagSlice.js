import { createSlice } from "@reduxjs/toolkit";


const item = [{
  id: "001",
  image: "images/1.jpg",
  company: "Carlton London",
  item_name: "Rhodium-Plated CZ Floral Studs",
  original_price: 1045,
  current_price: 606,
  discount_percentage: 42,
  return_period: 14,
  delivery_date: "10 Oct 2023",
  rating: {
    stars: 4.5,
    count: 1400,
  },
}]


const bagSlice = createSlice({
  name: "bag",
  initialState:[],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
