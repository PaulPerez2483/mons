import React, { Component } from "react";
import { DisplayComponents } from "./displayComponents";
import { Search } from "../components/search-box/Search";
import "./app.css";
// NOTES:
// thinking in JSX:
// anytime the user changes the state - the page re-renders
// lifting state up - when state is in the root of the

const URL = "https://jsonplaceholder.typicode.com/users";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ""
		};
	}
	componentDidMount() {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => this.setState({ monsters: data }));
	}

	handleChange = (ev) => {
		this.setState({
			searchField: ev
		});
		/*
		setState takes a callback function as a second argument : which run after set state is finished.
		*/
	};

	render() {
		const { monsters, searchField } = this.state;

		const filterMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<main>
				<Search
					search={this.handleChange}
					placeholder={"find monster"}
					filterMonsters={filterMonsters}
				/>
				<DisplayComponents filterMonsters={filterMonsters} />
			</main>
		);
	}
}
