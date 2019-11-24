import React from 'react';
import InputLine from './InputLine';
//import Tips from "./Tips";
//import HeroSample from "./HeroSample";
import HeroList from './HeroList';
import Social from './Social';

import './assets/styles/minimap-icons.css';
import './assets/styles/normalize.css';
import './assets/styles/style.css';

function App() {
  const [hero, setHero] = React.useState();

  const updateHero = name => {
    setHero(name);
  };
  return (
    <div className='App'>
      <InputLine hero={hero} setHero={updateHero} />
      <HeroList />
      <Social />
    </div>
  );
}

export default App;
