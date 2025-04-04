import { useUserContext } from "../../Contexts/Contexts";
import { NavContainer, StyledLink, StyledLogo, StyledNavBar } from "../../Styling/NavigationStyles";

export default function Navbar() {
  const { userId } = useUserContext();

  return (
    <NavContainer>
      <StyledLogo src="/assets/logo.svg" alt="Airbnc" />
      <StyledNavBar>
        <StyledLink to="/" end>
          Explore
        </StyledLink>
        <StyledLink to={`/users/${userId}/bookings`} end>
          Bookings
        </StyledLink>
        <StyledLink to={`/users/${userId}/favourites`} end>
          Favourites
        </StyledLink>
        <StyledLink to={`/users/${userId}`} end>
          Profile
        </StyledLink>
      </StyledNavBar>
    </NavContainer>
  );
}
