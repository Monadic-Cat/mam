//@flow
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import characterReducer from './reducers';
//Default character state:
import defaultState from './state';

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, characterReducer)

export default () => {
	let store = createStore(
		persistedReducer,
		defaultState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	let persistor = persistStore(store)
	return { store, persistor }
}
