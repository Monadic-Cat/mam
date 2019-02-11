//@flow
import {
	ADD_LABEL, REMOVE_LABEL, SET_LABEL,
	CHANGE_HARM, CHANGE_POTENTIAL, SET_NAME,
	SET_PLAYER_NAME, SET_HERO_NAME, SET_PLAYBOOK_NAME,
	SET_POWERS, SET_CONDITION, MARK_POTENTIAL,
	SWITCH_CHARACTER, REPLACE_LABELS, SELECT_CHARACTER } from './actions';
import type { CharacterState, AppState } from './types';
import { defaultCharacterState } from './types';
import { SWITCH_CHARACTER_OPTIONS } from './actions';

export function characterReducer(previousState: CharacterState, action: any): CharacterState {
	let state: CharacterState = { ...previousState };
	switch(action.type) {
		case ADD_LABEL:
			//Otherwise redux-persist will fail to see that labels has changed.
			state.labels = { ...state.labels };
			state.labels.order[action.name] = state.labels.elements.length;
			state.labels.elements.push({ name: action.name, value: action.value });
			break;
		case SET_LABEL:
			//Otherwise redux-persist will fail to see that labels has changed.
			state.labels = { ...state.labels };
			state.labels.elements[state.labels.order[action.name]].value = action.value;
			break;
		case REPLACE_LABELS:
			state.labels = action.labels;
			break;
		case REMOVE_LABEL:
			//Otherwise redux-persist will fail to see that labels has changed.
			state.labels = { ...state.labels };
			let mark: number = state.labels.order[action.name];
			for(let i: number = mark + 1; i < state.labels.elements.length; i++){
				state.labels.order[state.labels.elements[i].name]--;
			}
			state.labels.elements.splice(mark, 1);
			break;
		case CHANGE_HARM:
			state.harm += action.amount;
			break;
		case CHANGE_POTENTIAL:
			//Otherwise redux-persist will fail to see that potential has changed.
			state.potential = { ...state.potential };
			state.potential.total += action.amount;
			break;
		case MARK_POTENTIAL:
			//Otherwise redux-persist will fail to see that potential has changed.
			state.potential = { ...state.potential };
			state.potential.used += action.used ? state.potential.groupSize:-state.potential.groupSize;
			break;
		case SET_NAME:
			state.name = action.name;
			break;
		case SET_PLAYER_NAME:
			state.player = action.name;
			break;
		case SET_HERO_NAME:
			state.heroName = action.name;
			break;
		case SET_PLAYBOOK_NAME:
			state.playbook = action.name;
			break;
		case SET_POWERS:
			state.powers = action.names;
			break;
		case SET_CONDITION:
			//Otherwise redux-persist will fail to see that conditions has changed.
			state.conditions = { ...state.conditions };
			state.conditions.elements[state.conditions.order[action.name]].marked = action.marked;
			break;
	}
	return state;
}

export default function rootReducer(previousState: AppState, action: any): AppState {
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
