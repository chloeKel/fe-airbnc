import { Link } from "react-router-dom";
import { useUserContext } from "../../Contexts/Contexts";
import { StyledList, StyledNavigation } from "../../Styling/StyledNavigation";

export default function Navbar() {
  const { userId, user } = useUserContext();

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
          <img src={user.avatar} alt={`${user.first_name} ${user.surname}`} />
        </Link>
      </StyledList>
    </StyledNavigation>
  );
}
