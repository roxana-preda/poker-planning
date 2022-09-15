
import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Rooms from './Rooms';
import { RoomsContext } from './Context/RoomsContext';


function App() {

  const [rooms, setRooms] = useState([
    {id: '1', name: 'Long id'},
    {id: '2', name: 'classic' }
  ]);

  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          <RoomsContext.Provider value={{rooms, setRooms}}>
          <Home />
            {/* <Route path="/" element={<Home />} />
            <Route path="roomList/*" element={<Rooms />} /> */}
          </RoomsContext.Provider>
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
