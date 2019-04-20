// This file is part of MAM, a manager for MASKS character sheets.

// MAM is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// MAM is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { range } from 'lodash';
import { withCharacterState } from '../store';
import { selectCharacter } from '../actions';
import hamburger from './hamburger.svg';
import './navigation.scss';

function MenuIcon({onClick, open}) {
	if(!open)
		return (
			<img src={hamburger}
				  onClick={onClick}
				  style={{
					  paddingRight: "5px"
				  }}
				  />
		);
	return (
		<div
		  className={open ? "openMenuIcon":"closedMenuIcon"}
		  onClick={onClick}>
		  <div/>
		  <div/>
		  <div/>
		</div>
	);
}

function MenuItem({title, path}) {
	return (
		<Link to={`${path}`} style={{textDecoration: "none"}}>
		  <div className="menuItem">
			 {title}
		  </div>
		</Link>
	);
}

const SummaryLine = connect(
	 ({ characters, selectedCharacter }) => ({
		  characters, selectedCharacter
	 }),
    { selectCharacter }
)(function({ characters, selectedCharacter, selectCharacter }) {
	let name = characters[
		selectedCharacter ? selectedCharacter : 0
	].name;
    console.log(name);
	return (
		 <select value={name}
               onChange={e => 
                   selectCharacter(characters.findIndex((a) => {
                           return a.name === e.target.value;
                   }))}>
         {characters.map(x =>
                         <option value={x.name}>{x.name}</option>
                        )}
       </select>
	);
});

function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
		  <div className="sidenav"
				 style={{
					 width: menuOpen ? "100%":"0%"
				 }}>
			 <MenuIcon
				onClick={() => setMenuOpen(false)}
				open={true}
				/>
				<MenuItem title="General" path="/"/>
				<MenuItem title="Moves" path="/moves"/>
				<MenuItem title="Notes" path="/notes"/>
				<MenuItem title="About this App" path="/about"/>
		  </div>
		  <div>
			 <MenuIcon
				onClick={() => setMenuOpen(true)}
				open={false}
				/>
				<SummaryLine/>
		  </div>
		</>
	);
}

function withNav(WrappedComponent) {
	return (props) => (
		<>
		  <Navigation/>
		  <WrappedComponent {...props}/>
		</>
	);
}

export { withNav };
export default Navigation;
