import React from 'react';
import './search-box.styles.css';
// TYPESCRIPT
import { ChangeEventHandler } from 'react';

// objects started with type keywords in react
type SearchBoxProps = {
	onSearchChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ onSearchChange }: SearchBoxProps) => (
	<input
		className='search-box'
		type='search'
		placeholder='search monsters'
		onChange={onSearchChange}
	/>
);

export default SearchBox;
