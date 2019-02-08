//@flow

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

export type CharacterState = {
	player: string,
	name: string,
	heroName: string,
	playbook: string,
	powers: string,
	labels: OrderedDict<string, LabelState>,
	conditions: OrderedDict<string, ConditionState>,
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
function mapArrayToOrderedDict<k, v>(arr: Array<k>, func: k => v): OrderedDict<k, v> {
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
