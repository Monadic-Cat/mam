export const ADD_LABEL = 'ADD_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const SET_LABEL = 'SET_LABEL';
export const CHANGE_HARM = 'CHANGE_HARM';
export const CHANGE_POTENTIAL = 'CHANGE_POTENTIAL';
export const SET_NAME = 'SET_NAME';
export const SET_CONDITION = 'SET_CONDITION';

export function setLabel(name, value) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	if(value == undefined) throw new Error("NO VALUE EVERYONE DIES NOW.");
	return {
		type: SET_LABEL,
		name, value
	};
}

export function addLabel(name, value = 0) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: ADD_LABEL,
		name, value
	};
}

export function removeLabel(name) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: REMOVE_LABEL,
		name
	};
}

export function changeHarm(amount = 0) {
	return {
		type: CHANGE_HARM,
		amount
	};
}

export function changePotential(amount = 0) {
	return {
		type: CHANGE_POTENTIAL,
		amount
	};
}

export function setName(name) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: SET_NAME,
		name
	};
}

export function setCondition(name, marked = true) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: SET_CONDITION,
		name, marked
	}
}
