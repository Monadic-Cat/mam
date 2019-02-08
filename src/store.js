//@flow
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import characterReducer from './reducers';
import { defaultCharacterState } from './types';

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, characterReducer)

export default () => {
	let store = createStore(
		persistedReducer,
		defaultCharacterState(),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	let persistor = persistStore(store)
	return { store, persistor }
}
