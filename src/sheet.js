import { range } from 'lodash';

function makeLabelLine(label) {
	let line = `**${label.name}:** `;
	line +=
		range(-2, 4).map(x =>
			(x === label.value ? `**${x}**`:`${x}`)).join(" | ");
	return line;
}

function makeLabelSheet(labels) {
	return labels.map(makeLabelLine).join("\n");
}

function makeConditionsLine(conditions) {
	return conditions.map(x => x.marked ? `**${x.name}**`:`${x.name}`).join(" | ");
}

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
