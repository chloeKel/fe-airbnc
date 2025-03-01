import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/ExplorePage/Navbar";
import ViewProperties from "./Components/ExplorePage/ViewProperties";
import PropertyListing from "./Components/PropertyListing/PropertyListing";
import Profile from "./Components/Profile";
import Bookings from "./Components/Bookings";
import Favourites from "./Components/Favourites";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewProperties />} />
        <Route path={"/property/:id"} element={<PropertyListing />} />
        <Route path={"/users/:id/bookings"} element={<Bookings />} />
        <Route path={"/properties/:id?user_id=<id>"} element={<Favourites />} />
        <Route path={"/users/:id"} element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
