import React from 'react';
import styled from 'styled-components';

const Header = ({ label }) => <Container>{label}</Container>;

export default Header;

const Container = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;
