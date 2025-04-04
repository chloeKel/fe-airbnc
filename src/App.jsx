import { Routes, Route } from "react-router-dom";
import PropertyListing from "./Components/PropertyListing/PropertyListing";
import Profile from "./Components/Profile";
import Bookings from "./Components/Bookings/Bookings";
import ViewFavourites from "./Components/Favourites/ViewFavourites";
import Explore from "./Components/ExplorePage/Explore";
import Navbar from "./Components/ExplorePage/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="property/:id" element={<PropertyListing />} />
        <Route path="users/:id" element={<Profile />} />
        <Route path="users/:id/bookings" element={<Bookings />} />
        <Route path="users/:id/favourites" element={<ViewFavourites />} />
      </Routes>
    </>
  );
}

export default App;
