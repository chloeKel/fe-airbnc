import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api";

export default function Profile({ userId }) {
  const { id: paramId } = useParams();
  const [user, setUser] = useState({});
  const [canEdit, setCanEdit] = useState(false);

  const id = userId || paramId;

  useEffect(() => {
    (async () => {
      const { user } = await fetchUser(id);
      setUser(user);
    })();
  }, [id]);

  const { avatar, first_name, surname, email, phone_number } = user;

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
