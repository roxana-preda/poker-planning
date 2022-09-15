import Room from "./Room";
import Cards from "./Cards";


const Rooms = ({rooms}) => {
    // const cards = props.cards;

    return (
        <div className="rooms-container">
            { rooms.map((room) => 
                <div key={room.id}>{room.label}</div>
            )}
        </div>
    );
}

export default Rooms;