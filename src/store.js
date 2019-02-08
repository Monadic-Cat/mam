//@flow
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './reducers';
import { defaultAppState } from './types';
import type { AppState, CharacterState } from './types';

export function withCharacterState<Props>(func: (CharacterState, Props) => Props) {
		return (state: AppState, props: Props) => {
			if(state.selectedCharacter !== undefined){
				return func(state.characters[state.selectedCharacter], props);
			} else {
				console.log("Character Missing.");
				// We're missing a character.
				// The sane thing might be doing nothing.
				// I don't know if I should just create one
				// on demand or not. It might be better for
				// this case to be handled elsewhere.
			}
		}
}

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
	let store = createStore(
		persistedReducer,
		defaultAppState(),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	let persistor = persistStore(store)
	return { store, persistor }
}
