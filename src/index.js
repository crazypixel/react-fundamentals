import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Passing label to the Header component
const App = () => (
	<div>
		<Header label="My Groceries"/>
		<List/>
	</div>
);

const Header = props => <h1>{props.label}</h1>;

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
