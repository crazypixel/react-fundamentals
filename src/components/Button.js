import React from 'react';
import styled from 'styled-components';

const Button = ({ label, onClick }) => (
	<Container onClick={onClick}>{label}</Container>
);

export default Button;

const Container = styled.div`
  padding: 0 20px;
  height: 34px;
  border-radius: 4px;
  background: #fff;
  color: #444;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  transition: all 300ms;
  
  &:hover {
  	opacity: 0.8;
  }
`;
