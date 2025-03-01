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
