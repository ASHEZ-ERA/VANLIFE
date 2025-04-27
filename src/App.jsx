import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Hosts/Dashboard";
import Income from "./pages/Hosts/Income";
import Reviews from "./pages/Hosts/Reviews";
import HostLayout from "./components/HostLayout";
import Footer from "./components/Footer";
import "../server";
import HostVans from "./pages/Hosts/HostVans/HostVans";
import HostVanDetails from "./pages/Hosts/HostVans/HostVanDetail";
import VanInfo from "./pages/Hosts/HostVans/VansDetail/VanInfo";
import VanPricing from "./pages/Hosts/HostVans/VansDetail/VanPricing";
import VanPhotos from "./pages/Hosts/HostVans/VansDetail/VanPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<VanInfo/>}></Route>
              <Route path="pricing" element={<VanPricing />}></Route>
              <Route path="photos" element={<VanPhotos />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
