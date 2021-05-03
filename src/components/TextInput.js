import React from 'react';
import styled from 'styled-components';

const TextInput = ({ onChange }) => <Input onChange={onChange} />;

export default TextInput;

const Input = styled.input`
  width: 400px;
  height: 34px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-left: 20px;
  opacity: 0.4;
  box-sizing: border-box;
  padding: 0 10px;
  color: #fff;
  font-size: 16px;
  
  &:focus {
  	outline: none;
  	opacity: 1;
  }
`;
