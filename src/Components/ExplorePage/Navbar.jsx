import { useUserContext } from "../../Contexts/Contexts";
import { NavContainer, StyledLink, StyledLogo, StyledNavBar } from "../../Styling/NavigationStyles";

export default function Navbar({ measureRef }) {
  const { userId } = useUserContext();

  return (
    <NavContainer ref={measureRef}>
      <StyledLogo src="/assets/logo.svg" alt="Airbnc" />
      <StyledNavBar>
        <StyledLink $fontsize="1.1rem" to="/">
          <span>Explore</span>
        </StyledLink>
        <StyledLink $fontsize="1.1rem" to={`/users/${userId}/bookings`} end>
          <span>Bookings</span>
        </StyledLink>
        <StyledLink $fontsize="1.1rem" to={`/users/${userId}/favourites`} end>
          <span>Favourites</span>
        </StyledLink>
        <StyledLink $fontsize="1.1rem" to={`/users/${userId}`} end>
          <span>Profile</span>
        </StyledLink>
      </StyledNavBar>
    </NavContainer>
  );
}
