import React from 'react';
import styled, { keyframes } from 'styled-components';
import Rain from 'react-rain-animation';
import 'react-rain-animation/lib/style.css'; // Don't forget to import the CSS style

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const WelcomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #94618E; // Dark background
  position: relative; // To ensure rain effect is behind the text
  overflow: hidden;
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  color: #FFF;
  animation: ${fadeIn} 2s ease-in-out;
  z-index: 10; // Ensure text is above rain
`;

const welcome = () => {
  return (
    <WelcomeContainer>
      <Rain />
      <WelcomeText>Welcome to Xaltt</WelcomeText>
    </WelcomeContainer>
  );
}

export default welcome;
