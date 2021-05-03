import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import List from './components/List';
import TextInput from './components/TextInput';
import Button from './components/Button';
import LoadingOverlay from './components/LoadingOverlay';

const App = () => {
	const [data, setData] = useState([]);
	const [term, setTerm] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		fetch('https://run.mocky.io/v3/ce74c1cb-fefe-4470-8dad-fa34fa65d84e').then(res => res.json()).then(res => {
			setData(res.data);
			
			// timeout is just to see the loading overlay. remove it!
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		});
	}, []);
	
	const addItem = useCallback(() => {
		setData(data.concat(term));
	}, [term, data]);
	
	const handleInput = useCallback(e => setTerm(e.target.value), []);
	
	return (
		<Container>
			{ isLoading ? <LoadingOverlay /> : null }
			<Navigation>
				<Header label="My Groceries"/>
				<TextInput onChange={handleInput}/>
				<Button label="Add Item" onClick={addItem}/>
			</Navigation>
			
			<List data={data}/>
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
