import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';

// configureStore - createStore farkları
// 1- varasayılan olarak thunk kuurlu gelir
// 2- verilen reducer'ları otomarik olar bileştirir
export default configureStore({
  reducer: { counterSlice },
});
