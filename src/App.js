import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';
export const RingContext=createContext("alo");

function App() {
  const [house,setHouse]=useState(1);
  const ornaments="Alo Borta"
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
      <button onClick={()=> setHouse(house+1)}>Buy the House</button>
      <GrandFather house={house}></GrandFather>
    </div>
    </RingContext.Provider>
  );
}

export default App;
