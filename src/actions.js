//@flow
export const ADD_LABEL = 'ADD_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const SET_LABEL = 'SET_LABEL';
export const CHANGE_HARM = 'CHANGE_HARM';
export const CHANGE_POTENTIAL = 'CHANGE_POTENTIAL';
export const MARK_POTENTIAL = 'MARK_POTENTIAL';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_NAME = 'SET_NAME';
export const SET_HERO_NAME = 'SET_HERO_NAME';
export const SET_PLAYBOOK_NAME = 'SET_PLAYBOOK_NAME';
export const SET_POWERS = 'SET_POWERS';
export const SET_CONDITION = 'SET_CONDITION';

export function setLabel(name: string, value: number) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	if(value == undefined) throw new Error("NO VALUE EVERYONE DIES NOW.");
	return {
		type: SET_LABEL,
		name, value
	};
}

export function addLabel(name: string, value: number = 0) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: ADD_LABEL,
		name, value
	};
}

export function removeLabel(name: string) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: REMOVE_LABEL,
		name
	};
}

export function changeHarm(amount: number = 0) {
	return {
		type: CHANGE_HARM,
		amount
	};
}

export function changePotential(amount: number = 0) {
	return {
		type: CHANGE_POTENTIAL,
		amount
	};
}

export function markPotential(used: boolean = true) {
	return {
		type: MARK_POTENTIAL,
		used
	}
}

export function setName(name: string, type: string = "char") {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	let action_type = type === "char" ? SET_NAME :
		type === "player" ? SET_PLAYER_NAME :
		type === "hero" ? SET_HERO_NAME :
		type === "playbook" ? SET_PLAYBOOK_NAME : null;
	return {
		type: action_type,
		name
	};
}

export function setPowers(names: Array<string>) {
	return {
		type: SET_POWERS,
		names
	}
}

export function setCondition(name: string, marked: boolean = true) {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: SET_CONDITION,
		name, marked
	}
}
