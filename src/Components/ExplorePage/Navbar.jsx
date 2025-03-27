import { useUserContext } from "../../Contexts/Contexts";
import { StyledNavDiv, StyledLink } from "../../Styling/NavigationStyles";

export default function Navbar() {
  const { userId } = useUserContext();

  return (
    <StyledNavDiv>
      <StyledLink to="/" color="#ffffff">
        Explore
      </StyledLink>
      <StyledLink to={`/users/${userId}/bookings`} color="#ffffff">
        Bookings
      </StyledLink>
      <StyledLink to={`/users/${userId}/favourites`} color="#ffffff">
        Favourites
      </StyledLink>
      <StyledLink to={`/users/${userId}`} color="#ffffff">
        Profile
      </StyledLink>
    </StyledNavDiv>
  );
}
