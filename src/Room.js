// import { useState } from 'react';
import Cards from "./Cards";
import UserList from "./UserList";
import RoomList from "./RoomList";
import { RoomsContext } from './Context/RoomsContext';

const Room = ({rooms, selectedRoom, cards, selectedCardId, handleClickOnCard, users}) => {

  console.log ('Room - selected card id: ' + {selectedCardId});
  // const

  return (
    <div className="Room">
      <p>Selected room: {selectedRoom.name}</p>
      {/* <p>Selected card: {selectedCard.label}</p> */}
      <RoomList rooms={rooms} />
      <div className="room-layout">
        <div className="section">
          <Cards  cards={cards} selectedCardId={selectedCardId} handleClickOnCard={handleClickOnCard} />
        </div>
        <UserList users={users} />
      </div>
    </div>
  );
}

export default Room;