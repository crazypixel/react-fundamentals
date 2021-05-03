import React from 'react';
import styled from 'styled-components';

const ListItem = ({label}) => (
	<Container>
		<Inner>
			{label}
		</Inner>
	</Container>
);

export default ListItem;

const Container = styled.div`
  width: calc((100vw - 40px) / 4);
  height: calc((100vw - 40px) / 4);
  box-sizing: border-box;
  padding: 10px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
