import React from 'react';

// Components
import Header from './components/Header';
import List from './components/List';

const data = ['Milk', 'Eggs', 'Bread', 'Apples'];

const App = () => {
	return (
		<div className="container">
      <Header label="My Groceries" />
      
      <List data={data} />
		</div>
	);
};

export default App;
