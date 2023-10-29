import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const WelcomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeText>Welcome to Xaltt</WelcomeText>
    </WelcomeContainer>
  );
}

export default Welcome;
