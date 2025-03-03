export const setErrorMsg = (error) => {
  return {
    status: error.status,
    msg: error.data.msg
      ? error.data.msg
      : (() => {
          switch (error.status) {
            case 400:
              return "Oops, something's off with your request! Let's try a different method to find your getaway! 🔐🏝️";
            case 404:
              return "Oops! Looks like this page took a short break. Try again soon! 🐦🏡";
            case 405:
              return "Oops! This method's off-limits. Don't worry, there's always another route to your booking! 🚶‍♂️🏡";
            case 409:
              return "Looks like someone else beat you to it. Try different dates, or we'll help you find another spot! 🌻🏡";
            case 500:
              return "Oops! The server's having a little holiday. We'll get things back up and running soon! 🌴💻";
            default:
              return "Something went wrong! Please try again later";
          }
        })(),
  };
};
