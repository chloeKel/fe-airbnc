import { useState, useEffect, useContext } from "react";
import { UserContext, ErrorContext } from "../Contexts/Contexts";
import setErrorMsg from "../Utils/setErrorMsg";
import { fetchUser } from "../Utils/api";

export default function Profile({ hostId }) {
  const { setError } = useContext(ErrorContext);
  const { id: userId } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [canEdit, setCanEdit] = useState(false);

  const id = hostId || userId;

  useEffect(() => {
    (async () => {
      try {
        const { user } = await fetchUser(id);
        setProfile(user);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, [id]);

  const { avatar, first_name, surname, email, phone_number } = profile;

  return (
    <div className="profile">
      <h3>About</h3>
      <img src={avatar} alt={`${first_name} ${surname}`} />
      <p>First name: {first_name}</p>
      <p>Surname: {surname}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phone_number}</p>
    </div>
  );
}
