import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/User";

export default function Navbar() {
  const { guest } = useContext(UserContext);

  return (
    <ul className="navbar">
      <li>
        <Link to="/">Explore</Link>
      </li>
      <li>
        <Link to={`/users/${guest}/bookings`}>Bookings</Link>
      </li>
      <li>
        <Link to={`users/${guest}/favourites`}>Favourites</Link>
      </li>
      <li>
        <Link to={`/users/${guest}`}>Profile</Link>
      </li>
    </ul>
  );
}
