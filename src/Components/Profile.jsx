import { useUserContext } from "../Contexts/Contexts";
import useFetchUser from "../CustomHooks/useFetchUser";
import { StyledButton } from "../Styling/StyledButton";

export default function Profile() {
  const { userId } = useUserContext();
  const user = useFetchUser(userId);

  return (
    <>
      <div className="profile">
        <h3>
          {user.first_name} {user.surname}
        </h3>
        <img src={user.avatar} alt={`${user.first_name} ${user.surname}`} />
        <p>{user.email}</p>
        <p>{user.phone_number}</p>
      </div>
      <StyledButton>Edit Details</StyledButton>
    </>
  );
}
