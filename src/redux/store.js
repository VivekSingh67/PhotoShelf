import { configureStore } from "@reduxjs/toolkit";
import serachReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice"

export const store = configureStore({
      reducer: {
            search: serachReducer,
            collection: collectionReducer
      }
});
