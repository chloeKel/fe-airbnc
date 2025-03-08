import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import { StyledList, StyledNavigation } from "../../Styling/StyledNavigation";

export default function Navbar() {
  const { userId, name, avatar } = useContext(UserContext);

  return (
    <StyledNavigation>
      <StyledList>
        <Link to="/">Explore</Link>
      </StyledList>
      <StyledList>
        <Link to={`/users/${userId}/bookings`}>Bookings</Link>
      </StyledList>
      <StyledList>
        <Link to={`users/${userId}/favourites`}>Favourites</Link>
      </StyledList>
      <StyledList>
        <Link to={`/users/${userId}`}>
          <img src={avatar} alt={name} />
        </Link>
      </StyledList>
    </StyledNavigation>
  );
}
