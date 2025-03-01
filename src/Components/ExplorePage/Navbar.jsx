import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Explore</Link>
      </li>
      <li>
        <Link to="/users/:id/bookings">Bookings</Link>
      </li>
      <li>
        <Link to="/properties/:id?user_id=<id>">Favourites</Link>
      </li>
      <li>
        <Link to="/users/:id">Profile</Link>
      </li>
    </ul>
  );
}
