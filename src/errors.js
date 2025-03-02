export const setErrorMsg = (error) => {
  console.log("error:", error);
  let msg = null;

  switch (error) {
    case 400:
      msg = "Oops, something's off with your request! Let's try a different method to find your getaway! 🔐🏝️";
      break;
    case 404:
      msg = "Oops! Looks like this page took a short break. Try again soon! 🐦🏡";
      break;
    case 405:
      msg = "Oops! This method's off-limits. Don't worry, there's always another route to your booking! 🚶‍♂️🏡";
      break;
    case 409:
      msg = "Looks like someone else beat you to it. Try different dates, or we'll help you find another spot! 🌻🏡";
      break;
    case 500:
      msg = "Oops! The server's having a little holiday. We'll get things back up and running soon! 🌴💻";
      break;
    default:
      msg = null;
      break;
  }

  return msg;
};
