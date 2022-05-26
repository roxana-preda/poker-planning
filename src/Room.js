// import { useState } from 'react';
import Cards from "./Cards";
import UserList from "./UserList";
import RoomList from "./RoomList";

const Room = ({rooms, selectedRoom, cards, selectedCardId, handleClickOnCard, users}) => {

  console.log ('Room - selected card id: ' + {selectedCardId});

  return (
    <div className="Room">
      <p>Selected room: {selectedRoom.name}</p>
      {/* <p>Selected card: {selectedCard.label}</p> */}
      <RoomList rooms={rooms} />
      <div className="room-layout">
        <Cards cards={cards} selectedCardId={selectedCardId} handleClickOnCard={handleClickOnCard} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default Room;