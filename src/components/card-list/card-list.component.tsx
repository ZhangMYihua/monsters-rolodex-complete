import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

import { Monster } from '../../App';

type CardListTs = {
	monsters: Monster[];
};
const CardList = ({ monsters }: CardListTs) => (
	<div className='card-list'>
		{monsters.map((monster) => (
			<Card key={monster.id} monster={monster} />
		))}
	</div>
);

export default CardList;
