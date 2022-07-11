import React from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
//hooks
import { useState, useEffect } from 'react';

import './App.css';

const App = () => {
	//initial value
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [filterMonster, setFilterMonster] = useState(monsters);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		setFilterMonster(newFilteredMonsters);
	}, [searchField, monsters]);

	return (
		<div className='App'>
			<h1>Monsters Rolodex</h1>
			<SearchBox onSearchChange={onSearchChange} />
			<CardList monsters={filterMonster} />
		</div>
	);
};

export default App;
