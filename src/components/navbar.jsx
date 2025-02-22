import { ChevronDown } from "lucide-react";
import DropdownMenu from "./dropdown";

const menuItems = [
  { label: "Struktur Kurikulum", href: "/kurikulum" },
  { label: "Perencanaan Pembelajaran", href: "/perencanaan-pembelajaran" },
  { label: "Peraturan Akademik", href: "peraturan-akademik" },
  { label: "Kalender Pendidikan", href: "#" },
  { label: "Jadwal Pelajaran", href: "#" },
];

const profilItems = [
  { label: "Kepala Sekolah", href: "/kepala-sekolah" },
  { label: "Visi Misi", href: "/visi-misi" },
  { label: "Guru Karaywan", href: "/guru-karyawan" },
  { label: "Sarana Prasarana", href: "/sarana-prasarana" },
  { label: "Jadwal Pelajaran", href: "#" },
];

export default function NavBar() {
  return (
    <nav className="bg-blue-dark text-white w-full fixed top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center ">
            <img src="/logo.png" alt="Logo" className="h-14" />
            <span className="font-semibold">SMA N 2 Purworejo</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-blue-200">
              Halaman utama
            </a>
            <div className="relative group">
              <DropdownMenu title="Profil" items={profilItems} />
            </div>
            <div className="relative group">
              <DropdownMenu title="Kurikulum" items={menuItems} />
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-200">
                Kesiswaan <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="hover:text-blue-200">
              Pengumuman
            </a>
            <a href="#" className="hover:text-blue-200">
              PPDB
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
