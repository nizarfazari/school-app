// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kurikulum from "./pages/Kurikulum";
import DefaultLayout from "./layouts/default-layout";
import Principle from "./pages/Principle";
import Gallery from "./pages/Gallery";
import Visi from "./pages/Visi";
import Structure from "./pages/Structure";
import GuruKaryawan from "./pages/GuruKaryawan";
import SaranaPrasarana from "./pages/SaranaPrasarana";
import News from "./pages/news";
import PerencanaanPembelajaran from "./pages/perencanaan-pembelajaran";
import PeraturanAkademik from "./pages/peraturan-akademik";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/kepala-sekolah" element={<Principle />} />
          <Route path="/berita" element={<News />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/visi-misi" element={<Visi />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/guru-karyawan" element={<GuruKaryawan />} />
          <Route path="/sarana-prasarana" element={<SaranaPrasarana />} />
          <Route path="/kurikulum" element={<Kurikulum />} />
          <Route path="/perencanaan-pembelajaran" element={<PerencanaanPembelajaran />} />
          <Route path="/peraturan-akademik" element={<PeraturanAkademik />} />
        </Route>
      </Routes>
    </Router>
  );
}
