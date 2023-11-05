import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Login from "./routes/Login";
import Register from "./routes/Register";
import CarShop from "./routes/CarShop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="carshop" element={<CarShop />} />
      </Route>
    </Routes>
  );
}

export default App;
