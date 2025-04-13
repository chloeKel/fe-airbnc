export const getTodaysDate = () => new Date().toISOString().slice(0, 10);

export const getCheckOut = (checkIn) => {
  const checkOut = new Date(checkIn);
  checkOut.setDate(checkOut.getDate() + 7);
  return checkOut.toISOString().slice(0, 10);
};

export const formatDateString = (date) => date.slice(0, 10);

export const getBookingDuration = (checkIn, checkOut) => {
  const convertDate = (date) => {
    const d = Number(date.slice(8));
    const m = Number(date.slice(5, 7));
    const y = Number(date.slice(0, 4));

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const month = months[m - 1];

    let suffix;
    if (d > 3 && d < 21) suffix = "th";
    switch (d) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }

    return { d, suffix, month, y };
  };

  const arrive = convertDate(checkIn);
  const depart = convertDate(checkOut);

  if (arrive.month === depart.month) {
    return `${arrive.d}${arrive.suffix}-${depart.d}${depart.suffix} ${arrive.month} ${arrive.y}`;
  } else {
    return `${arrive.d}${arrive.suffix} ${arrive.month}-${depart.d}${depart.suffix} ${depart.month} ${depart.y}`;
  }
};
