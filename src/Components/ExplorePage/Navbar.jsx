import { Link } from "react-router-dom";
import { useUserContext } from "../../Contexts/Contexts";
import { StyledNavUl, StyledNavLi, StyledNavAvatar } from "../../Styling/NavBarStyle";

export default function Navbar() {
  const { userId, user } = useUserContext();

  return (
    <StyledNavUl>
      <StyledNavLi>
        <Link to="/">Explore</Link>
      </StyledNavLi>
      <StyledNavLi>
        <Link to={`/users/${userId}/bookings`}>Bookings</Link>
      </StyledNavLi>
      <StyledNavLi>
        <Link to={`users/${userId}/favourites`}>Favourites</Link>
      </StyledNavLi>
      <StyledNavLi>
        <Link to={`/users/${userId}`}>
          <StyledNavAvatar src={user.avatar} alt={`${user.first_name} ${user.surname}`} />
        </Link>
      </StyledNavLi>
    </StyledNavUl>
  );
}
