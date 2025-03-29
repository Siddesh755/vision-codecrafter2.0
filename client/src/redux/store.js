import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import stockSlice from "./stockSlice"

const userPersistConfig = {
    key: "user",
    storage,
  };
const stockPersistConfig = {
    key: "stock",
    storage,
  };

  const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
  const persistedStockReducer = persistReducer(stockPersistConfig, stockSlice);

  const store = configureStore({
    reducer: {
  
      user: persistedUserReducer, // Persisted user reducer
     stock : persistedStockReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Required for redux-persist
      }),
  });
  
  export const persistor = persistStore(store);
  export default store;
  