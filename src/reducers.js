import {
	ADD_LABEL, REMOVE_LABEL, SET_LABEL,
	CHANGE_HARM, CHANGE_POTENTIAL, SET_NAME,
	SET_PLAYER_NAME, SET_HERO_NAME, SET_PLAYBOOK_NAME,
	SET_POWERS, SET_CONDITION, MARK_POTENTIAL } from './actions';

export default function characterReducer(previousState, action) {
	let state = { ...previousState };
	switch(action.type) {
		case ADD_LABEL:
			//Otherwise redux-persist will fail to see that labels has changed.
			state.labels = { ...state.labels };
			state.labelOrder[action.name] = state.labels.length;
			state.labels.push({ name: action.name, value: action.value });
			break;
		case SET_LABEL:
			//Otherwise redux-persist will fail to see that labels has changed.
			state.labels = { ...state.labels };
			state.labels.elements[state.labels.order[action.name]].value = action.value;
			break;
		case REMOVE_LABEL:
			//Otherwise redux-persist will fail to see that labels has changed.
			state.labels = { ...state.labels };
			let mark = state.labelOrder[action.name];
			for(let i = mark + 1; i < state.labels.length; i++){
				state.labelOrder[state.labels[i].name]--;
			}
			state.labels.splice(mark, 1);
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
