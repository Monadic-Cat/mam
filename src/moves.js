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

type Move = {
	name: string,
	body: string,
	summary?: string
}

function bulletList(arr: Array<string>): string {
	return arr.map(x => `\n - ${x}`).join("");
}
function emph(s: string): string {
	return `**${s}**`;
}
function blankLine(): string {
	return `\n${range(10).map(_ => "_").join("")}\n`;
}

const moves: Array<Move> = [
	// Solider Moves
	{
		name: "Before we get started",
		body: [
			"When you have time to closely observe your opposition before a",
			"fight, roll + Savior. On a 10+, hold 3. On a 7-9, hold 2.",
			"On a miss, hold 1 and mark a condition. During the fight, you can",
			"spend your hold to name a character you observed and...:",
			bulletList([
				[
					"...redirect their attack to another character or",
					"nowhere--into a wall or the sky."
				].join(" "),
				"...cross a distance between them and you.",
				"...stun them, close up or from a distance.",
				"...ignore all harm from one of their attacks.",
				"...escape any bindings or impediments they attempt to place on you."
			])
		].join(" ")
	},
	{
		name: "No, you move",
		body: [
			"When you demand that an NPC live up to a higher moral code, roll",
			"+ Savior. On a hit, they have to meet your standard or mark a",
			"Condition. On a 10+, take Influence over them as well. On a miss,",
			"they reveal that the conflict in question is more complicated than",
			"it seems; give them Influence over you."
		].join(" ")
	},
	{
		name: "I can do this all day",
		body: [
			"When something causes you to remove yourself from a fight, you can",
			"shift Savior down (and another Label up) instead. If shifting Savior",
			"down would move it below -2, you have to leave the fight instead of",
			"shifting Labels."
		].join(" ")
	},
	{
		name: "It kinda feels personal",
		body: [
			"When you discover that someone has mislead you or betrayed your",
			"cause, mark a condition to take +1 ongoing against them until they",
			"are brought to justice."
		].join(" ")
	},
	{
		name: "Mission first",
		body: [
			"When you secure a valuable resource by defeating a powerful foe,",
			"you can shift your Savior up and any other Label down. If you",
			"(and your team) managed to avoid causing any collateral damage,",
			"clear a condition as well."
		].join(" ")
	},
	{
		name: "More than a shield",
		body: [
			`When you ${emph("directly engage a threat")} by heading directly into`,
			"danger without regard for your own safety, roll with Savior instead",
			"of Danger. On a miss, your focused attack leaves someone in grave",
			"danger; the GM will tell you what it takes to keep them save."
		].join(" ")
	},
	// Brain Moves
	{
		name: "Above the fray",
		body: [
			`When you ${emph("enter battle as a Team against a dangerous foe,")}`,
			"if you have Influence over the leader and provide tactical input, add",
			"1 Team to the pool. When you",
			`${emph("contradict the leader during the battle,")} you may return`,
			"Influence over the leader to add an additional 1 Team to the pool."
		].join(" ")
	},
	{
		name: "Mission debrief",
		body: [
			"During a debrief, when you",
			emph("downplay your role in helping a teammate during the mission,"),
			"mark potential and shift Superior down and any other Label up.",
			`When you ${emph(
				"exaggerate your role in helping a teammate during the mission,"
			)} clear a condition and either give them Influence or lose Influence`,
			"over them."
		].join(" ")
	},
	{
		name: "Logical angle",
		body: [
			`When you ${emph("comfort or support someone")} by rationally pointing`,
			"out their mistakes so they can do better next time, roll + Superior",
			"instead of + Mundane. If they do not open up to you, mark a condition."
		].join(" ")
	},
	{
		name: "Scientific Insight",
		body: [
			"You have achieved mastery over a field of science and technology,",
			"Name it:",
			blankLine(),
			`Whenever you ${emph("assess the situation")} and your field of`,
			"study is directly relevant, you may as a single follow-up question."
		].join(" ")
	},
	{
		name: "Always prepared",
		body: [
			"When you have a chance to restock your supplies, hold up to 2-gadgets.",
			`When you ${emph("unleash your powers")} by producing a new minor`,
			"invention or gadget from your supply, spend 1-gadget and roll",
			"+ Superior. When you reach 0-gadgets, mark a condition."
		].join(" ")
	},
	{
		name: "Tactical genius",
		body: [
			"When you point out the obvious flaw in a known foe's plan,",
			"roll + Savior. On a hit, you're right and another teammate",
			"(your choice) can take advantage; they get +1 ongoing to act on your",
			"information. On a 7-9, pick one:",
			bulletList([
				"You missed something important. The GM will tell you what.",
				[
					"You look like a showoff. Your chosen teammate takes Influence",
					"over you, and you lose Influence over them."
				].join(" "),
				[
					"You make your teammates feel like little more than pawns.",
					"Your chosen teammate marks a condition."
				].join(" ")
			]),
			"On a miss, you've played into your enemy's hands; watch the trap spring."
		].join(" ")
	}
]
