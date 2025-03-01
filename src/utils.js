const formatDate = (date) => date.toISOString().slice(0, 10);

export const currentDate = () => formatDate(new Date());

export const futureDate = () => {
  const current = new Date();
  const future = new Date();
  future.setDate(current.getDate() + 7);
  return formatDate(future);
};
