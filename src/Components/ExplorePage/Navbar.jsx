import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";

export default function Navbar() {
  const { id, name, avatar } = useContext(UserContext);

  return (
    <ul className="navbar">
      <li>
        <Link to="/">Explore</Link>
      </li>
      <li>
        <Link to={`/users/${id}/bookings`}>Bookings</Link>
      </li>
      <li>
        <Link to={`users/${id}/favourites`}>Favourites</Link>
      </li>
      <li>
        <Link to={`/users/${id}`}>
          Profile <img src={avatar} alt={name} />
        </Link>
      </li>
    </ul>
  );
}
