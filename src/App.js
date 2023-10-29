import React from 'react';
import './App.css';
import Welcome from './welcome';
import DestinationPage from './destinationPage';
import SourcePage  from './SourcePage';
import { animated, useSpring } from 'react-spring';


import {
 Link,NavLink
} from "react-router-dom";

function App() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200, // Delay the animation by 200ms
  });

  return (
    <div>
      <animated.div style={fadeIn}>
        <Welcome />
      </animated.div>
      <animated.div style={fadeIn}>
        <SourcePage></SourcePage>
        <DestinationPage />
      </animated.div>
    </div>
  );
}

export default App;
