import React from 'react';
import styled from 'styled-components';

// Components
import ListItem from './ListItem';

const List = ({data}) => (
	<Container>
		{data.map(label => <ListItem key={label} label={label}/>)}
	</Container>
);

export default List;

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
