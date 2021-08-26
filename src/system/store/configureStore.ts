import { applyMiddleware, createStore, Middleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { rootReducer, IApplicationState, } from 'app/system/store'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['system'],
}

let middleware: Middleware[] = [thunk];

if (__DEV__) {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const configureStore = (callback: () => void, state?: IApplicationState) => {
  const store = createStore(persistedReducer, state, applyMiddleware(...middleware))
  const persistor = persistStore(store, null, callback)
  return { store, persistor }
}
