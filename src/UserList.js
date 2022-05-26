import User from "./User";

const UserList = ({users}) => {

  return (
    <div className="users-container">
      <p>Users: </p>
      { users.map((user) => 
          <User key={user.id} user={user}/>
      )}
    </div>
  );
}

export default UserList;