export const getTodaysDate = () => new Date().toISOString().slice(0, 10);

export const getCheckOut = (checkIn) => {
  const checkOut = new Date(checkIn);
  checkOut.setDate(checkOut.getDate() + 7);
  return checkOut.toISOString().slice(0, 10);
};

export const formatDateString = (date) => date.slice(0, 10);
