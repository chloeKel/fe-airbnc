import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/ExplorePage/Navbar";
import ViewProperties from "./Components/ExplorePage/ViewProperties";
import PropertyListing from "./Components/PropertyListing/PropertyListing";
import Profile from "./Components/Profile";
import Bookings from "./Components/Bookings";
import Favourites from "./Components/Favourites";
import Reserve from "./Components/PropertyListing/Reserve";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewProperties />} />
        <Route path={"/property/:id"} element={<PropertyListing />} />
        <Route path={"/property/:id/reserve"} element={<Reserve />} />
        <Route path={"/users/:id"} element={<Profile />} />
        <Route path={"/users/:id/bookings"} element={<Bookings />} />
        <Route path={"users/:id/favourites"} element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
