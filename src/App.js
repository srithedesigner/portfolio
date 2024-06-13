import './App.css';
import Picture from './components/Picture/Picture';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState(['S', 'r', 'I', ' ', 'V', 'a', 'I', 's', 'h', 'n', 'a', 'v']);
  const targetName = ['శ', '్', 'ర', 'ీ', ' ', 'వ', 'ై', 'ష', '్', 'ణ', 'వ', '్'];

  const shuffleName = () => {
    if (name.join('') === "Sri Vaishnav ") {
      setName(targetName);
    } else {
      setName(['S', 'r', 'i', ' ', 'V', 'a', 'i', 's', 'h', 'n', 'a', 'v']);
    }
  };

  return (
    <div className="container">
      <title>Sri Vaishnav</title>
      
      <TypeAnimation
        sequence={[
          'Sri Vaishnav Vutukuri',
          1000,
          'శ్రీ వైష్ణవ్ వుటుకూరి',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="name-animation"
        repeat={Infinity}
      />
      <Picture />
    </div>
  );
}

export default App;