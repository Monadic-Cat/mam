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

import type { LabelDict } from './types';
// Actions that hit CharacterState:
export const ADD_LABEL = 'ADD_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const SET_LABEL = 'SET_LABEL';
export const REPLACE_LABELS = 'REPLACE_LABELS';
export const CHANGE_HARM = 'CHANGE_HARM';
export const CHANGE_POTENTIAL = 'CHANGE_POTENTIAL';
export const MARK_POTENTIAL = 'MARK_POTENTIAL';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_NAME = 'SET_NAME';
export const SET_HERO_NAME = 'SET_HERO_NAME';
export const SET_PLAYBOOK_NAME = 'SET_PLAYBOOK_NAME';
export const SET_POWERS = 'SET_POWERS';
export const SET_CONDITION = 'SET_CONDITION';
// Not those ^
export const SWITCH_CHARACTER = 'SWITCH_CHARACTER';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';
// TYPING:
// Begin Character State actions

export type AddLabelAction = {
	type: 'ADD_LABEL',
	name: string,
	value: number
}

export type RemoveLabelAction = {
	type: 'REMOVE_LABEL',
	name: string
}

export type SetLabelAction = {
	type: 'SET_LABEL',
	name: string,
	value: number
}

export type ReplaceLabelsAction = {
	type: 'REPLACE_LABELS',
	labels: LabelDict
}

type QuantityAction<T> = {
	type: T,
	amount: number
}

export type ChangeHarmAction = QuantityAction<'CHANGE_HARM'>

export type ChangePotentialAction = QuantityAction<'CHANGE_POTENTIAL'>

export type MarkPotentialAction = {
	type: 'MARK_POTENTIAL',
	used: boolean
}

type SetNameAction<T> = {
	type: T,
	name: string
}

export type SetPlayerNameAction = SetNameAction<'SET_PLAYER_NAME'>

export type SetCharacterNameAction = SetNameAction<'SET_NAME'>

export type SetHeroNameAction = SetNameAction<'SET_HERO_NAME'>

export type SetPlaybookNameAction = SetNameAction<'SET_PLAYBOOK_NAME'>

export type SetPowersAction = {
	type: 'SET_POWERS',
	names: string
}

export type SetConditionAction = {
	type: 'SET_CONDITION',
	name: string,
	marked: boolean
}

export type CharacterStateAction =
	| AddLabelAction
	| RemoveLabelAction
	| SetLabelAction
	| ReplaceLabelsAction
	| ChangeHarmAction
	| ChangePotentialAction
	| MarkPotentialAction
	| SetPlayerNameAction
	| SetCharacterNameAction
	| SetHeroNameAction
	| SetPlaybookNameAction
	| SetPowersAction
	| SetConditionAction
// End Character State actions

export type SwitchCharacterAction = {
	type: 'SWITCH_CHARACTER',
	option: SWITCH_CHARACTER_OPTION
}

export type SelectCharacterAction = {
	type: 'SELECT_CHARACTER',
	selection: number
}

export type Action =
	| CharacterStateAction
	| SwitchCharacterAction
	| SelectCharacterAction
// END TYPING

export function setLabel(name: string, value: number): SetLabelAction {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	if(value == undefined) throw new Error("NO VALUE EVERYONE DIES NOW.");
	return {
		type: SET_LABEL,
		name, value
	};
}

export function replaceLabels(labels: LabelDict): ReplaceLabelsAction {
	return {
		type: REPLACE_LABELS,
		labels
	};
}

export function addLabel(name: string, value: number = 0): AddLabelAction {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: ADD_LABEL,
		name, value
	};
}

export function removeLabel(name: string): RemoveLabelAction {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: REMOVE_LABEL,
		name
	};
}

export function changeHarm(amount: number = 0): ChangeHarmAction {
	return {
		type: CHANGE_HARM,
		amount
	};
}

export function changePotential(amount: number = 0): ChangePotentialAction {
	return {
		type: CHANGE_POTENTIAL,
		amount
	};
}

export function markPotential(used: boolean = true): MarkPotentialAction {
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

export function setPowers(names: string): SetPowersAction {
	return {
		type: SET_POWERS,
		names
	}
}

export function setCondition(name: string, marked: boolean = true): SetConditionAction {
	if(name == undefined) throw new Error("NO NAME EVERYONE DIES NOW.");
	return {
		type: SET_CONDITION,
		name, marked
	}
}

export const SWITCH_CHARACTER_OPTIONS = {
	FORWARD: 1,
	BACKWARD: -1
}
export type SWITCH_CHARACTER_OPTION = $Keys<typeof SWITCH_CHARACTER_OPTIONS>

export function switchCharacter(option: SWITCH_CHARACTER_OPTION): SwitchCharacterAction {
	return {
		type: SWITCH_CHARACTER,
		option
	}
}

export function selectCharacter(selection: number): SelectCharacterAction {
	return {
		type: SELECT_CHARACTER,
		selection
	}
}
