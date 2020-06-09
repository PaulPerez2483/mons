import React from "react";
import { CardList } from "./card-list/card.js";
import { NoData } from "./NoData";

export const DisplayComponents = ({ filterMonsters }) => {
	let data =
		filterMonsters.length === 0 ? (
			<NoData />
		) : (
			<CardList monsters={filterMonsters} />
		);
	return data;
};
