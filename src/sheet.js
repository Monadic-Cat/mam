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

import { range } from 'lodash';
import type { CharacterState, PotentialState } from './types';

/**
 * makeLabelLine
 *
 * @param {object}	label - `label` object with `.name` and `.value` attributes.
 *
 * @return {string}
 *
 */
function makeLabelLine(label) {
	let line = `**${label.name}:** `;
	line +=
		range(-2, 4).map(x =>
			(x === label.value ? `**${x}**`:`${x}`)).join(" | ");
	return line;
}

/**
 * makeLabelSheet
 *
 * @param {array}	labels - List of labels (Freak, Danger, Savior, ...)
 * with `.name` and `.value` attributes.
 *
 * @return {string}
 *
 */
function makeLabelSheet(labels) {
	return labels.elements.map(makeLabelLine).join("\n");
}
/**
 * Generate Markdown from conditions.
 * @param {array} conditions -
 * List of conditions (Hopeless, Insecure, ...) with `.name` and `.marked`
 * attributes.
 * @return {string}
 */
function makeConditionsLine(conditions) {
	return conditions.elements.map(x => x.marked ? `**${x.name}**`:`${x.name}`).join(" | ");
}


/**
 * groupPotential
 *
 * @param {number}	n - number of Potential
 * @param {number}	groupSize - Max size of groups
 *
 * @return {Array<number>}
 *
 */
function groupPotential(n: number, groupSize: number): Array<number> {
	let groups = range(0, n / groupSize | 0).map(x => groupSize);
	groups.push(n % groupSize);
	return groups;
}

function makePotentialLine(potential: PotentialState): string {
	let pots = groupPotential(potential.total, potential.groupSize);
	let marked = (potential.used / potential.groupSize) | 0;
	return pots.map((x, i) => (marked > i) ? `~~${x}~~`:x).join(" ");
}

/**
 * Generate Markdown from a character state.
 * @param {object} state - Character state
 *
 * @return {string} sheet
 */
function makeSheet(state: CharacterState): string {
	return [
		`**Player Name:** ${state.player}`
		,`**Character Name:** ${state.name}`
		,`**Character Hero Name:** ${state.heroName}`,
		,`**Playbook:** ${state.playbook}`
		,`**Powers/Abilities:** ${state.powers}`
		,"**-----------------------------------**"
		,"**[Labels]**",
		,makeLabelSheet(state.labels),
		,`**Conditions:** ${makeConditionsLine(state.conditions)}`
		,`**Harm:** ${state.harm}`
		,`**Potential:** ${makePotentialLine(state.potential)}`
	].join("\n");
}

export default makeSheet;
export { groupPotential };
