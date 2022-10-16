import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import FootWearPage from "./pages/FootWearPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<h1>404 Error. Could not find such page!</h1>}
        />
        <Route path="/" element={<FootWearPage />} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/sale" element={<h1>Sale</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
