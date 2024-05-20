import { useState } from 'react';

import Title from './components/title';
import Joke from './components/joke';

import './App.css';


function App() {

  const [displayJoke, setDisplayJoke] = useState(false);

  const isClicked = () => {
    setDisplayJoke(true);
  };


  return (
    <div className="App">

      <Title display={displayJoke} onClick={isClicked}/>
      <Joke display={displayJoke}/>

    </div>
  );
}

export default App;
