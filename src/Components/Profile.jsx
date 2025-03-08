import { useState, useEffect, useContext } from "react";
import { UserContext, ErrorContext } from "../Contexts/Contexts";
import { fetchUser } from "../Utils/api";

export default function Profile({ hostId }) {
  const { setError } = useContext(ErrorContext);
  const { userId } = useContext(UserContext);
  const [user, setUser] = useState({});

  const id = hostId || userId;

  useEffect(() => {
    (async () => {
      try {
        const { user } = await fetchUser(id);
        setUser(user);
      } catch (error) {
        setError(error);
      }
    })();
  }, [id]);

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
