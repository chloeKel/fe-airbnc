import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ViewProperties from "./Components/ViewProperties";
import ViewSingleProperty from "./Components/ViewSingleProperty";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewProperties />} />
        <Route path={"property/:id"} element={<ViewSingleProperty />} />
      </Routes>
    </>
  );
}

export default App;
