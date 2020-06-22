import { createSlice } from "@reduxjs/toolkit";

const shoes = {
  shoes: {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      cart: false
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      cart: false
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      cart: false
    }
  },
  cart: {}
};

// const addCart = createAction("ADD_CART");
// const removeCart = createAction("REMOVE_CART");
// const increaseQty = createAction("INCREASE_QTY");

const shoesSlice = createSlice({
  name: "shoes",
  initialState: shoes,
  reducers: {
    addCart: (state, action) => {
      console.log("Inside Action", action.payload);
      const slug = action.payload;
      state["cart"][slug] = state["shoes"][slug];
      state["cart"][slug]["qty"] = 1;
      state["shoes"][slug].cart = true;
    },
    removeCart: (state, action) => {
      const slug = action.payload;
      delete state["cart"][slug];
      state["shoes"][slug].cart = false;
    },
    increaseQty: (state, action) => {
      const slug = action.payload;
      state["cart"][slug]["qty"] += 1;
    }
  }
});

export const { addCart, removeCart, increaseQty } = shoesSlice.actions;

export default shoesSlice.reducer;
