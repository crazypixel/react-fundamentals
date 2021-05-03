import React from 'react';

// Components
import ListItem from './ListItem';

const List = ({data}) => (
	<ul>
		{data.map(label => <ListItem key={label} label={label}/>)}
	</ul>
);

export default List;
