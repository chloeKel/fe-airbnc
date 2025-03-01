import axios from "axios";

export const fetchProperties = async () => {
  const { data } = await axios.get("https://airbnc-k7rs.onrender.com/api/properties");
  return data;
};

export const fetchSingleProperty = async (id) => {
  const { data } = await axios.get(`https://airbnc-k7rs.onrender.com/api/properties/${id}`);
  return data;
};

export const fetchReviews = async (id) => {
  const { data } = await axios.get(`https://airbnc-k7rs.onrender.com/api/properties/${id}/reviews`);
  return data;
};

export const fetchUser = async (id) => {
  const { data } = await axios.get(`https://airbnc-k7rs.onrender.com/api/users/${id}`);
  return data;
};

export const postBooking = async (guest, checkIn, checkOut, id) => {
  const response = axios.post(`https://airbnc-k7rs.onrender.com/api/properties/${id}/booking`, {
    guest_id: guest,
    check_in_date: checkIn,
    check_out_date: checkOut,
  });
  return response;
};
