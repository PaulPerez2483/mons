import React from "react";
import "./search.css";
export const Search = ({ search, placeholder, filterMonsters }) => {
	return (
		<>
			<h1>Monsters Rolodex</h1>
			<div className='search-holder'>
				<input
					className='search'
					onChange={(e) => search(e.target.value)}
					type='search'
					placeholder={placeholder}
				/>
				<div>{filterMonsters.length}</div>
			</div>
		</>
	);
};
