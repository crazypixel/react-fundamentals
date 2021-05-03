import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => (
	<div>
		<Header/>
		<List/>
	</div>
);

const Header = () => React.createElement('h1', null, 'My Groceries');

const list = ['Milk', 'Eggs', 'Bread', 'Apples'];

const List = () => (
	<ul>
		{list.map(label => <li key={label}>{label}</li>)}
	</ul>
);

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
