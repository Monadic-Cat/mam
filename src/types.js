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

import { defaultCharacterState } from 'madap/lib/types';
import type { CharacterState } from 'madap/lib/types';

export type AppState = {
	+characters: Array<CharacterState>,
	+selectedCharacter?: number,
};

function emptyAppState(): AppState {
	return {
		characters: [],
	};
}
export function defaultAppState(): AppState {
	return {
		characters: [defaultCharacterState()],
		selectedCharacter: 0,
	};
}
