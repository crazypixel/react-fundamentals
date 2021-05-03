import React from 'react';
import styled from 'styled-components';
import {useParams, useHistory} from 'react-router-dom';

const ItemPage = () => {
	const params = useParams();
	const history = useHistory();
	
	return (
		<Container>
			<Card>
				Viewing Item with id: {params.id}
				
				<Link onClick={() => history.push('/')}>Back to List</Link>
			</Card>
		</Container>
	);
};

export default ItemPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
`;

const Card = styled.div`
  width: 60vw;
  height: 400px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Link = styled.div`
  color: #444;
  margin-top: 40px;
  cursor: pointer;
  text-decoration: underline;
`;
