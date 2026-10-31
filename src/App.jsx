
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/Contactpage.jsx";
function Home() {
  return (
    <>
      <HeroSlider />
      <Products />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/products/:productId"
          element={<ProductDetailsPage />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
