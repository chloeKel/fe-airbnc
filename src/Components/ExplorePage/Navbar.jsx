import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import { StyledList, StyledNavigation } from "../../Styling/StyledNavigation";

export default function Navbar() {
  const { id, name, avatar } = useContext(UserContext);

  return (
    <StyledNavigation>
      <StyledList>
        <Link to="/">Explore</Link>
      </StyledList>
      <StyledList>
        <Link to={`/users/${id}/bookings`}>Bookings</Link>
      </StyledList>
      <StyledList>
        <Link to={`users/${id}/favourites`}>Favourites</Link>
      </StyledList>
      <StyledList>
        <Link to={`/users/${id}`}>
          <img src={avatar} alt={name} />
        </Link>
      </StyledList>
    </StyledNavigation>
  );
}
