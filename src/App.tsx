import React from 'react';
import { ChangeEvent } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

//tsfication
import { getData } from './components/utils/data.utils';

//hooks
import { useState, useEffect } from 'react';

import './App.css';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	//initial value
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [searchField, setSearchField] = useState('');
	const [filterMonster, setFilterMonster] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};

		fetchUsers();
	}, []);

	//changeEvent takes an argument
	const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
