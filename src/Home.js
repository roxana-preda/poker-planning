
import { useState, useEffect, useContext } from 'react';
import { RoomsContext } from './Context/RoomsContext';
import Room from "./Room";

function Home() {

  const {rooms, setRooms} = useContext(RoomsContext);

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
  const [users, setUsers] = useState([
    {id: '1', name: 'Roxana', role: 'observer'},
    {id: '2', name: 'Miha', role: 'observer'},
    {id: '3', name: 'Luci', role: 'observer' },
    {id: '4', name: 'Clemence', role: 'moderator' },
    {id: '5', name: 'Jerome', role: 'observer' },
    {id: '6', name: 'Pierre', role: 'observer' },
    {id: '7', name: 'Celia', role: 'observer' },
    {id: '8', name: 'Nathan', role: 'moderator' }
  ]);
  const [selectedCardId, setSelectedCardId] = useState();
  const [selectedRoom, setSelectedRoom] = useState({rooms, setRooms});

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

export default Home;
