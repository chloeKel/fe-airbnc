import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Guest/Navbar";
import ViewProperties from "./Components/Guest/ViewProperties";
import ViewSingleProperty from "./Components/Guest/ViewSingleProperty";
import Profile from "./Components/Guest/Profile";
import Bookings from "./Components/Guest/Bookings";
import Favourites from "./Components/Guest/Favourites";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewProperties />} />
        <Route path={"/property/:id"} element={<ViewSingleProperty />} />
        <Route path={"/users/:id/bookings"} element={<Bookings />} />
        <Route path={"/properties/:id?user_id=<id>"} element={<Favourites />} />
        <Route path={"/users/:id"} element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
