import { useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import CardHover from "../components/card/card-hover";
import ContentCard from "../components/card/content-card";
import Pagination from "../components/Pagination";

const SaranaPrasarana = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 68;
  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/" },
    {
      label: "Sambutan Kepala Sekolah",
      href: "/kurikulum/struktur-dan-muatan",
    },
  ];

  const contentData = [
    {
      title: "Lapangan Besar",
      description:
        "Lapangan besar digunakan untuk berbagai kegiatan olahraga dan upacara sekolah.",
      imageUrl: "/content/content-1.png",
    },
    {
      title: "Perpustakaan",
      description:
        "Perpustakaan menyediakan berbagai koleksi buku dan tempat yang nyaman untuk belajar.",
      imageUrl: "/content/content-2.png",
    },
    {
      title: "Laboratorium Komputer",
      description:
        "Laboratorium komputer dilengkapi dengan perangkat modern untuk pembelajaran teknologi.",
      imageUrl: "/content/content-3.png",
    },
  ];

  return (
    <div>
      <div className="relative h-screen bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/home/banner.jpg')`, opacity: 0.7 }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-5xl font-bold">Sambutan Kepala Sekolah</h1>
            <div className="flex justify-center mt-4">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 flex flex-col space-y-8">
        {contentData.map((item, index) => (
          <ContentCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>

      <div className="text-center my-8">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default SaranaPrasarana;
