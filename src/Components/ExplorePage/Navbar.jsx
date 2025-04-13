import { useUserContext } from "../../Contexts/Contexts";
import { NavContainer, StyledLink, StyledLogo, StyledNavBar } from "../../Styling/NavigationStyles";

export default function Navbar({ nodeRef }) {
  const { userId } = useUserContext();

  return (
    <NavContainer ref={nodeRef}>
      <StyledLogo src="/assets/logo.svg" alt="Airbnc" />
      <StyledNavBar>
        <StyledLink $fontsize="1.1rem" to="/">
          Explore
        </StyledLink>
        <StyledLink $fontsize="1.1rem" to={`/users/${userId}/bookings`} end>
          Bookings
        </StyledLink>
        <StyledLink $fontsize="1.1rem" to={`/users/${userId}/favourites`} end>
          Favourites
        </StyledLink>
        <StyledLink $fontsize="1.1rem" to={`/users/${userId}`} end>
          Profile
        </StyledLink>
      </StyledNavBar>
    </NavContainer>
  );
}
