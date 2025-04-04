import { Routes, Route } from "react-router-dom";
import PropertyListing from "./Components/PropertyListing/PropertyListing";
import Profile from "./Components/Profile";
import Bookings from "./Components/Bookings/Bookings";
import ViewFavourites from "./Components/Favourites/ViewFavourites";
import Explore from "./Components/ExplorePage/Explore";
import Navbar from "./Components/ExplorePage/Navbar";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="property/:id" element={<PropertyListing />} />
        <Route path="users/:id" element={<Profile />} />
        <Route path="users/:id/bookings" element={<Bookings />} />
        <Route path="users/:id/favourites" element={<ViewFavourites />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
