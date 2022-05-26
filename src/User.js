import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const User = ({user}) => {

  return (
    <div className="User">
      <FontAwesomeIcon icon={faUser} /><p>{user.name}</p>
    </div>
  );
}

export default User;