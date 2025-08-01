import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,   // Disable serializable check for non-serializable data     
    }),
})