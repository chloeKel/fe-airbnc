import { Link } from "react-router-dom";
import { useMenuContext, useUserContext } from "../../Contexts/Contexts";
import { StyledMenu, StyledMenuLi, StyledMenuUl, StyledMenuAvatar } from "../../Styling/MenuStyle";

export default function Menu() {
  const { toggleMenu } = useMenuContext();
  const { userId, user } = useUserContext();

  return (
    <StyledMenu>
      <StyledMenuUl>
        <StyledMenuLi>
          <Link to={`/users/${userId}`} onClick={toggleMenu}>
            <StyledMenuAvatar src={user.avatar} alt={`${user.first_name} ${user.surname}`} />
          </Link>
        </StyledMenuLi>
        <StyledMenuLi>
          <Link to={`/users/${userId}`} onClick={toggleMenu}>
            Profile
          </Link>
        </StyledMenuLi>
        <StyledMenuLi>
          <Link to="/" onClick={toggleMenu}>
            Explore
          </Link>
        </StyledMenuLi>
        <StyledMenuLi>
          <Link to={`/users/${userId}/bookings`} onClick={toggleMenu}>
            Bookings
          </Link>
        </StyledMenuLi>
        <StyledMenuLi>
          <Link to={`users/${userId}/favourites`} onClick={toggleMenu}>
            Favourites
          </Link>
        </StyledMenuLi>
      </StyledMenuUl>
    </StyledMenu>
  );
}
