import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Profil from "../pages/profil/Profil";
import Settings from "../pages/settings/Settings";
import Community from "../pages/community/Community";
import Error404 from "../pages/error-404/Error404";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="/error-404" element={<Error404 />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Navigation;
