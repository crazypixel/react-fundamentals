import React from 'react';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import List from './components/List';
import TextInput from './components/TextInput';
import Button from './components/Button';

const data = ['Milk', 'Eggs', 'Bread', 'Apples', 'Bananas'];

const App = () => {
	return (
		<Container>
			<Navigation>
				<Header label="My Groceries" />
				<TextInput/>
				<Button label="Add Item" />
			</Navigation>
      
      <List data={data} />
		</Container>
	);
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`;

const Navigation = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  background: #121d80;
`;
