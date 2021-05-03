import React from 'react';
import styled from 'styled-components';

const LoadingOverlay = () => <Container>Loading...</Container>;

export default LoadingOverlay;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #444;
`;
