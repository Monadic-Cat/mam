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

import { mapArrayToOrderedDict, concatOrderedDicts } from './types';
import type { LabelState, LabelDict } from './types';
const defaultLabels: Array<string> = ["Danger", "Freak", "Savior", "Superior", "Mundane"];

type Playbook = {
	name: string,
	defaults: LabelDict
}

type PlaybookDict = {
	[string]: Playbook
}

type EasyCell = {
	normal: Array<number>,
	extra?: Array<LabelState>
}
type EasyEntry = {
	[string]:EasyCell
}

const easy_entry_playbooks: EasyEntry = {
	"The Beacon": {
		// Danger: -1
		// Freak: -1
		// Savior: 2
		// Superior: 0
		// Mundane: 2
		normal: [-1, -1, 2, 0, 2]
	},
	"The Bull": {
		normal: [2, 1, -1, 1, -1]
	},
	"The Delinquent": {
		normal: [0, 0, -1, 2, 1]
	},
	"The Doomed": {
		normal: [1, 1, 1, -1, 0]
	},
	"The Janus": {
		normal: [0, -1, 0, 0, 3]
	},
	"The Legacy": {
		normal: [-1, 0, 2, 0, 1]
	},
	"The Nova": {
		normal: [1, 2, 0, 0, -1]
	},
	"The Outsider": {
		normal: [-1, 1, 0, 2, 0]
	},
	"The Protege": {
		normal: [-1, 0, 1, 2, 0]
	},
	"The Transformed": {
		normal: [1, 3, 0, -1, -1]
	},
	"The Scion": {
		normal: [1, 0, 1, 0, 0]
	},
	"The Nomad": {
		normal: [0, 2, -1, 2, -1]
	},
	"The Harbinger": {
		normal: [0, 0, 2, 1, -1]
	},
	"The Innocent": {
		normal: [0, 0, 1, -1, 2]
	},
	"The Joined": {
		normal: [0, 0, 0, 0, 0] //Perhaps detect this and do special stuff
	},
	"The Newborn": {
		normal: [1, 2, 0, 1, -2]
	},
	"The Reformed": {
		normal: [2, 1, -1, 0, 0]
	},
	"The Star": {
		normal: [-1, 1, 1, 2, -1]
	},
	"The Brain": {
		normal: [0, 0, 1, 2, -1]
	},
	"The Soldier": {
		normal: [-1, 0, 2, 1, 0],
		extra: [{ name: "Soldier", value: 2 }]
	},
	"The Persona": {
		normal: [1, 1, 0, 1, -1]
	},
	"The Host": {
		normal: [2, 0, -1, 0, 1]
	}
}

function mapEasyCellToDict(cell: EasyCell) {
	let normalDict = mapArrayToOrderedDict(defaultLabels, (x, i) => ({
		name: x,
		value: cell.normal[i]
	}))
	if(cell.extra) {
		let extra: Array<LabelState> = cell.extra;
		let extraLabels = extra.map(x => x.name);
		let extraDict = mapArrayToOrderedDict(extraLabels, (_, i) => extra[i])
		return concatOrderedDicts<string, LabelState>(normalDict, extraDict)
	} else return normalDict;
}

function easyEntryToPlaybooks(easyEntry: EasyEntry): PlaybookDict {
	let names = Object.keys(easyEntry);
	let playbooks = names.map(
		x => ({
			name: x,
			defaults: mapEasyCellToDict(easyEntry[x])
		})
	);
	let dict = {};
	playbooks.map(x => {
		dict[x.name] = x;
	})
	return dict;
}

export default () => easyEntryToPlaybooks(easy_entry_playbooks);
