import { range } from 'lodash';

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
 * Generate Markdown from a character state.
 * @param {object} state - Character state
 *
 * @return {string} sheet
 */
function makeSheet(state) {
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
	].join("\n");
}

export default makeSheet;
