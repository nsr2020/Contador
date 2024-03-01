import React from 'react'
import { useState } from 'react'
import './App.css'

import Botones from './components/Botones/Botones';
import ShowCount from './components/showCount/ShowCount';


function App() {

    const [clicks, setClicks] = useState(0)

    const handleSumar = () =>(
      setClicks(prevClicks => prevClicks + 1)
    );

    const handleRestar = () =>(
      setClicks(prevClicks => prevClicks - 1)
    );

  return (
    <>
      <div id="root">
      <ShowCount clicks={clicks} />
        <Botones onSumar={handleSumar} onRestar={handleRestar} />
      </div>
     
    </>
  )
}


export default App
