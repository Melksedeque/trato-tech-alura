import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriasSlice from './reducers/categorias'
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  categorias: categoriasSlice,
  itens: itensSlice,
  carrinho: carrinhoSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;