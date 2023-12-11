/*
! store oluşturma
* 1. redux kütüphanesinden "createStore" methodu import edilir
* 2. store içerisnde tutlan veriler kategorize edilir ve redycerlar oluşturulur.
* 3. oluşturlan reducer'lar combineReducers methdou ile birleştirilir
* 4. store oluşturtlan yeni reducer tanıtılır
* 5. oluşurulan store projeye tatnıtılır
*/

import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userReducer';

// birden fazla reducer varsa birleştirilir
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store'u oluştur ve reducer'ları tanıt
const store = createStore(rootReducer);

export default store;
