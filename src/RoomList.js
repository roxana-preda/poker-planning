import User from "./User";

const RoomList = ({rooms}) => {

  return (
    <div className="rooms-container">
      { rooms.map((room) => 
          <div key={room.id}>{room.label}</div>
      )}
    </div>
  );
}

export default RoomList;