import axios from "axios";

export const fetchProperties = async (userId) => {
  console.log("userId in fetchProperties:", userId);
  const {
    data: { properties },
  } = await axios.get("https://airbnc-k7rs.onrender.com/api/properties");
  console.log("fetchProps properties:", properties);

  const propsWithFavourite = await Promise.all(
    properties.map(async ({ property_id }) => {
      const {
        data: { property },
      } = await axios.get(`https://airbnc-k7rs.onrender.com/api/properties/${property_id}?user_id=${userId}`);
      return property;
    })
  );

  console.log("fetchProps propsWithFavourite:", propsWithFavourite);

  const {
    data: { favourites },
  } = await axios.get(`https://airbnc-k7rs.onrender.com/api/favourites/${userId}`);
  console.log("fetchProps favourites:", favourites);

  const favouritesRef =
    favourites.length > 0
      ? favourites.reduce((acc, { property_id, favourite_id }) => {
          acc[property_id] = favourite_id;
          return acc;
        }, {})
      : [];
  console.log("fetchProps favouritesRef:", favouritesRef);

  const favouriteProperties = propsWithFavourite.map(({ property_id, ...rest }) => {
    return {
      ...rest,
      property_id,
      favourite_id: favouritesRef[property_id],
    };
  });

  console.log("fetchProps favouriteProperties:", favouriteProperties);

  return favouriteProperties;
};

export const fetchSingleProperty = async (propertyId, userId = null) => {
  let request = `https://airbnc-k7rs.onrender.com/api/properties/${propertyId}`;
  if (userId) request += `?user_id=${userId}`;
  const { data } = await axios.get(request);
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

export const fetchBookings = async (id) => {
  const { data } = await axios.get(`https://airbnc-k7rs.onrender.com/api/users/${id}/bookings`);
  return data;
};

export const patchBooking = async (id, checkIn, checkOut) => {
  const response = axios.patch(`https://airbnc-k7rs.onrender.com/api/bookings/${id}`, {
    check_in_date: checkIn,
    check_out_date: checkOut,
  });
  return response;
};

export const deleteBooking = async (id) => {
  const response = await axios.delete(`https://airbnc-k7rs.onrender.com/api/bookings/${id}`);
  return response;
};

export const fetchFavourites = async (id) => {
  const { data } = await axios.get(`https://airbnc-k7rs.onrender.com/api/favourites/${id}`);
  return data;
};

export const postFavourite = async (propertyId, guestId) => {
  await axios.post(`https://airbnc-k7rs.onrender.com/api/properties/${propertyId}/favourite`, {
    guest_id: guestId,
  });
};

export const deleteFavourite = async (id) => {
  await axios.delete(`https://airbnc-k7rs.onrender.com/api/favourites/${id}`);
};
