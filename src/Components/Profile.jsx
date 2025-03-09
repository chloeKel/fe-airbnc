import { useEffect } from "react";
import { useUserContext } from "../Contexts/Contexts";

export default function Profile({ hostId }) {
  const { userId, setUserId, user } = useUserContext();

  const id = hostId || userId;

  useEffect(() => {
    setUserId(id);
  }, [setUserId, id]);

  return (
    <div className="profile">
      <h3>About</h3>
      <img src={user.avatar} alt={`${user.first_name} ${user.surname}`} />
      <p>First name: {user.first_name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Phone number: {user.phone_number}</p>
    </div>
  );
}
