import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from '../persistConfig';

const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };
