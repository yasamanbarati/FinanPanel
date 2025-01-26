import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
//
import { rootPersistConfig, rootReducer } from './rootReducer';
import user from './slices/user';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: { user },
  // reducer: persistReducer(rootPersistConfig, rootReducer),
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  //   immutableCheck: false
  // })
});

const persistor = persistStore(store);

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, persistor, useSelector, useDispatch };
