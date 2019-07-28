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

import { combineReducers } from 'redux';
import {
	ADD_LABEL, REMOVE_LABEL, SET_LABEL,
	CHANGE_HARM, CHANGE_POTENTIAL, SET_NAME,
	SET_PLAYER_NAME, SET_HERO_NAME, SET_PLAYBOOK_NAME,
	SET_POWERS, SET_CONDITION, MARK_POTENTIAL,
	SWITCH_CHARACTER, REPLACE_LABELS, SELECT_CHARACTER } from './actions';
import type { CharacterStateAction, Action } from './actions';
import type { LabelDict, PotentialState, LabelState, ConditionState, ConditionDict, CharacterState } from 'madap/lib/types';
import type { AppState } from './types';
import { defaultCharacterState, emptyOrderedDict, emptyPotentialState } from 'madap/lib/types';
import { SWITCH_CHARACTER_OPTIONS } from './actions';


function labelsReducer(previousState: LabelDict = emptyOrderedDict<string, LabelState>(), action: CharacterStateAction): LabelDict {
	let labels = { ...previousState };
	switch(action.type) {
		case ADD_LABEL:
			labels.order[action.name] = labels.elements.length;
			labels.elements.push({ name: action.name, value: action.value });
			break;
		case SET_LABEL:
			labels.elements[labels.order[action.name]].value = action.value;
			break;
		case REPLACE_LABELS:
			labels = action.labels;
			break;
		case REMOVE_LABEL:
			let mark: number = labels.order[action.name];
			for(let i: number = mark + 1; i < labels.elements.length; i++){
				labels.order[labels.elements[i].name]--;
			}
			labels.elements.splice(mark, 1);
			break;
		default:
			return previousState;
	}
	return labels;
}

function harmReducer(previousState: number = 0, action: CharacterStateAction): number {
	if(action.type === CHANGE_HARM) {
		return previousState + action.amount;
	} else {
		return previousState;
	}
}

function potentialReducer(previousState: PotentialState = emptyPotentialState(), action: CharacterStateAction): PotentialState {
	let potential = { ...previousState };
	switch(action.type) {
		case CHANGE_POTENTIAL:
			potential.total += action.amount;
			break;
		case MARK_POTENTIAL:
			potential.used += action.used ? potential.groupSize:-potential.groupSize;
			break;
		default:
			return previousState;
	}
	return potential;
}

function nameReducer(previousState: string = "", action: CharacterStateAction): string {
	if(action.type === SET_NAME) {
		return action.name;
	} else {
		return previousState;
	}
}

function playerNameReducer(previousState: string = "", action: CharacterStateAction): string {
	if(action.type === SET_PLAYER_NAME) {
		return action.name;
	} else {
		return previousState;
	}
}

function heroNameReducer(previousState: string = "", action: CharacterStateAction): string {
	if(action.type === SET_HERO_NAME) {
		return action.name;
	} else {
		return previousState;
	}
}

function playbookReducer(previousState: string = "", action: CharacterStateAction): string {
	if(action.type === SET_PLAYBOOK_NAME) {
		return action.name;
	} else {
		return previousState;
	}
}

function powersReducer(previousState: string = "", action: CharacterStateAction): string {
	if(action.type === SET_POWERS) {
		return action.names;
	} else {
		return previousState;
	}
}

function conditionsReducer(previousState: ConditionDict = emptyOrderedDict<string, ConditionState>(), action: CharacterStateAction): ConditionDict {
	let conditions = { ...previousState };
	if(action.type === SET_CONDITION) {
		conditions.elements[conditions.order[action.name]].marked = action.marked;
		return conditions;
	} else {
		return previousState;
	}
}

export const characterReducer = combineReducers({
	player: playerNameReducer,
	name: nameReducer,
	heroName: heroNameReducer,
	playbook: playbookReducer,
	powers: powersReducer,
	labels: labelsReducer,
	conditions: conditionsReducer,
	potential: potentialReducer,
	harm: harmReducer,
});

export default function rootReducer(previousState: AppState, action: Action): AppState {
	let state = { ...previousState };
	switch(action.type) {
		case SWITCH_CHARACTER:
			state.characters = [ ...state.characters ];
			let nextInd = state.selectedCharacter + SWITCH_CHARACTER_OPTIONS[action.option];
			if(nextInd < 0) return state;
			else if (nextInd >= state.characters.length) {
				state.characters = [ ...state.characters, defaultCharacterState() ];
			}
			state.selectedCharacter = nextInd;
			break;
		case SELECT_CHARACTER:
			if(state.characters.length > action.selection) {
				state.selectedCharacter = action.selection;
			}
			break;
		default:
			state.characters[state.selectedCharacter] = characterReducer(state.characters[state.selectedCharacter], action);
			state.characters = [...state.characters];

	}
	return state;
}
