import { useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import Pagination from "../components/Pagination";

function Gallery() {
  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/" },
    {
      label: "Sambutan Kepala Sekolah",
      href: "/kurikulum/struktur-dan-muatan",
    },
  ];

   const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 68

  const images = Array(12).fill("/home/activities/activity-");

  return (
    <div>
      <div className="relative h-screen bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/home/banner.jpg')`,
            opacity: 0.7,
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white max-w-2xl ">
            <h1 className="text-5xl font-bold">Sambutan Kepala Sekolah</h1>
            <div className="flex justify-center mt-4">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-royal-blue font-bold text-center mb-12">
            Galeri Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="aspect-video">
                <img
                  src={`${src}${index + 1}.png`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
