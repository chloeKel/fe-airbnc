import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/User";
import { currentDate, futureDate } from "../../utils";
import { postBooking } from "../../api";

export default function Reserve() {
  const navigate = useNavigate();
  const { guest } = useContext(UserContext);
  const [checkIn, setCheckIn] = useState(currentDate());
  const [checkOut, setCheckOut] = useState(futureDate());
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postBooking(guest, checkIn, checkOut, id);
    setBooking(response);
    setConfirmed(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={() => navigate(-1)}>Back</button>
        <label>
          CHECK-IN
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </label>
        <label>
          CHECK-OUT
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </label>
        <button type="submit">Continue</button>
      </form>
    </>
  );
}
