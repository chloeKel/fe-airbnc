export default function useDefaultContent(component) {
  switch (component) {
    case "bookings":
      return "Adventure awaits, but it looks like you haven't booked one yet! Ready to plan your next getaway? 🌍";
    case "reviews":
      return "There's no reviews for this property yet, would you like to be the first? 🏡✨";
    case "favourites":
      return "You haven't saved any favourite properties yet! Head back to explore! 🏡✨";
  }
}
