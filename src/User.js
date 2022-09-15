import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const User = ({user}) => {

  return (
    <div className="User">
      <FontAwesomeIcon icon={faUser} /> <span>{user.name}</span> <span>{user.role}</span>
    </div>
  );
}

export default User;