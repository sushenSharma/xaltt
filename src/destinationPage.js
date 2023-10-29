import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px); }
  to { transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #94618E;
  animation: ${fadeIn} 1.5s ease;
`;

const Heading = styled.h2`
  color: white;
  margin-bottom: 20px;
  animation: ${fadeIn} 2s ease;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #FFF;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: transparent;
  color: white;
  text-shadow: 0 0 3px #000;
  animation: ${slideUp} 1.5s ease 0.5s both; // Delaying the animation a bit to ensure a sequence
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #FFF;
  color: #94618E;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${pulse} 0.7s ease infinite;
  }
`;

const DestinationPage = () => {
  const [destination, setDestination] = useState('');

  const handleNext = () => {
    if (destination) {
      alert(`You chose: ${destination}`);
    } else {
      alert('Please enter a destination.');
    }
  };

  return (
    <Container>
      <Heading>Where would you like to go?</Heading>
      <Input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default DestinationPage;
