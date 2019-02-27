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

export type OrderedDict<k, v> = {
	elements: Array<v>,
	order: {
		[k]: number
	}
}

export type LabelState = {
	name: string,
	value: number
}

export type ConditionState = {
	name: string,
	marked: boolean
}

export type PotentialState = {
	total: number,
	used: number,
	groupSize: number
}

export type LabelDict = OrderedDict<string, LabelState>
export type ConditionDict = OrderedDict<string, ConditionState>

export type CharacterState = {
	player: string,
	name: string,
	heroName: string,
	playbook: string,
	powers: string,
	labels: LabelDict,
	conditions: ConditionDict,
	potential: PotentialState,
	harm: number
}

function emptyOrderedDict<k, v>(): OrderedDict<k, v> {
	return {
		elements: [],
		order: {}
	}
}
// groupSize can never be allowed to be 0, we'll get Infinity which is an ungood
function emptyPotentialState(groupSize: number = 5): PotentialState {
	return {
		total: 0,
		used: 0,
		groupSize: groupSize
	}
}
function emptyCharacterState(): CharacterState {
	return {
		player: "",
		name: "",
		heroName: "",
		playbook: "",
		powers: "",
		labels: emptyOrderedDict<string, LabelState>(),
		conditions: emptyOrderedDict<string, ConditionState>(),
		potential: emptyPotentialState(),
		harm: 0
	}
}
export function mapArrayToOrderedDict<k, v>(arr: Array<k>, func: (k, number) => v): OrderedDict<k, v> {
	let ordering: {
		[k]: number
	} = {};
	arr.map((x, i) => {
		ordering[x] = i;
	});
	return {
		elements: arr.map(func),
		order: ordering
	}
}
export function concatOrderedDicts<k, v>(a: OrderedDict<k, v>, b: OrderedDict<k, v>) {
	let dict = {
		elements: [ ...a.elements ],
		order: { ...a.order }
	}
	Object.keys(b.order).map(x => {
		dict.order[x] = dict.elements.length;
		dict.elements.push(b.elements[b.order[x]]);
	})
	return dict;
}
/**
 * Generate default CharacterState.
 */
export function defaultCharacterState(): CharacterState {
	let defaultLabels: Array<string> = ["Danger", "Freak", "Savior", "Superior", "Mundane"];
	let defaultConditions: Array<string> = ["Afraid", "Angry", "Guilty", "Hopeless", "Insecure"];
	return {
		...emptyCharacterState(),
		labels: mapArrayToOrderedDict(defaultLabels, x => ({ name: x, value: 0 })),
		conditions: mapArrayToOrderedDict(defaultConditions, x => ({name: x, marked: false}))
	};
}

export type AppState = {
	characters: Array<CharacterState>,
	selectedCharacter?: number
}

function emptyAppState(): AppState {
	return {
		characters: []
	}
}
export function defaultAppState(): AppState {
	return {
		characters: [defaultCharacterState()],
		selectedCharacter: 0
	}
}
