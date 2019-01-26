import {
	ADD_LABEL, REMOVE_LABEL, SET_LABEL,
	CHANGE_HARM, CHANGE_POTENTIAL, SET_NAME,
	SET_CONDITION } from './actions';

export default function characterReducer(previousState, action) {
	let state = { ...previousState };
	switch(action.type) {
		case ADD_LABEL:
			state.labelOrder[action.name] = state.labels.length;
			state.labels.push({ name: action.name, value: action.value });
			break;
		case SET_LABEL:
			state.labels.elements[state.labels.order[action.name]].value = action.value;
			break;
		case REMOVE_LABEL:
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
			state.potential += action.amount;
			break;
		case SET_NAME:
			state.name = action.name;
			break;
		case SET_CONDITION:
			state.conditions.elements[state.conditions.order[action.name]].marked = action.marked;
			break;
	}
	return state;
}