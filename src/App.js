
import { useState, useEffect } from 'react';
import './App.css';
import Room from "./Room";

function App() {
  const [cards, setCards] = useState([
    {id: '1', label: '0', useForAverage: true },
    {id: '2', label: '0.5', useForAverage: true },
    {id: '3', label: '1', useForAverage: true },
    {id: '4', label: '2', useForAverage: true },
    {id: '5', label: '3', useForAverage: true },
    {id: '6', label: '5', useForAverage: true },
    {id: '7', label: '8', useForAverage: true },
    {id: '8', label: '?', useForAverage: false },
    {id: '9', label: 'break', useForAverage: false }
  ]);
  const [rooms, setRooms] = useState([
    {id: '1', name: 'Long id'},
    {id: '2', name: 'classic' }
  ]);
  const [users, setUsers] = useState([
    {id: '1', name: 'Roxana', role: 'observer'},
    {id: '2', name: 'Miha', role: 'observer'},
    {id: '3', name: 'Luci', role: 'observer' },
    {id: '4', name: 'Julie', role: 'moderator' }
  ]);
  const [selectedCardId, setSelectedCardId] = useState();
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  // useEffect((card) => {
  //   // console.log('selected val: ' + selectedCardId);
  // }, [selectedCardId]);

  const handleClickOnCard = (card) => {
    // console.log('clicked: ' + card.id);
    setSelectedCardId(card.id);
  };

  return (
    <div className="App">
     
      <Room rooms={rooms} selectedRoom={selectedRoom} 
        cards={cards} selectedCardId={selectedCardId} handleClickOnCard={handleClickOnCard}
        users={users}
        />
    </div>
  );
}

export default App;
