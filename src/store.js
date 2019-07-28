//@flow
// This file is part of MAM, a manager for MASKS character sheets.
//
// MAM is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// MAM is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './reducers';
import { defaultAppState } from './types';
import type { CharacterState } from 'madap/lib/types';
import type { AppState } from './types';

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
