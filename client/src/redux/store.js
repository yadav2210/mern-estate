import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import { persistReducer ,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web



const rootReducer = combineReducers({
  user: userReducer,  
});


const persistConfig = {
        key:'root',
        version: 1, 
        storage // Use localStorage for persistence
}

const persistedReducer=persistReducer(persistConfig, rootReducer);


const store =  configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,   // Disable serializable check for non-serializable data     
    }),
})
export const persistor = persistStore(store);
export default store;