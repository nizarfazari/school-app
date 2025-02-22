import { Facebook, Instagram, InstagramIcon, Search, Youtube } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-600 p-4 rounded-lg">
        <h2 className="text-white font-semibold mb-4">Cari Berita</h2>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-md py-2 px-4 text-sm"
            placeholder="Cari..."
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="bg-blue-600 p-4 rounded-lg">
        <h2 className="text-white font-semibold mb-4">Berita Terbaru</h2>
        <div className="space-y-4">
          <div className="">
            <img src="/home/kurikulum/berita-1.png" alt="" />
          </div>
          <div className="w-full">
            <img src="/home/kurikulum/berita-2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-blue-600 p-4 rounded-lg">
        <h2 className="text-white font-semibold mb-4">
          Follow Sosial Media Kami
        </h2>
        <div className="flex gap-4 text-white">
          <a href="#" className="hover:text-blue-200">
            <InstagramIcon />
          </a>
          <a href="#" className="hover:text-blue-200">
          <Facebook />
          </a>
          <a href="#" className="hover:text-blue-200">
          <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
}
