import { Calendar } from "lucide-react";
import { useState } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";

function News() {
  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/" },
    {
      label: "Sambutan Kepala Sekolah",
      href: "/kurikulum/struktur-dan-muatan",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 68

  const news = [
    {
      id: 1,
      title: "Upacara Peringatan Hari Pahlawan SMA N 2 Purworejo",
      image: "/home/galleries/gallery-1.png",
      date: "10 Nov 2023",
    },
    {
      id: 2,
      title: "OSIS dan MPK SMA N 2 Purworejo menggalang rangkaian...",
      image: "/home/galleries/gallery-2.png",
      date: "5 Nov 2023",
    },
    {
      id: 3,
      title: "Kegiatan lustrum SMA N 2 Purworejo dihadiri Bupati Purw...",
      image: "/home/galleries/gallery-3.png",
      date: "1 Nov 2023",
    },
    {
      id: 1,
      title: "Upacara Peringatan Hari Pahlawan SMA N 2 Purworejo",
      image: "/home/galleries/gallery-1.png",
      date: "10 Nov 2023",
    },
    {
      id: 2,
      title: "OSIS dan MPK SMA N 2 Purworejo menggalang rangkaian...",
      image: "/home/galleries/gallery-2.png",
      date: "5 Nov 2023",
    },
    {
      id: 3,
      title: "Kegiatan lustrum SMA N 2 Purworejo dihadiri Bupati Purw...",
      image: "/home/galleries/gallery-3.png",
      date: "1 Nov 2023",
    },
    {
      id: 1,
      title: "Upacara Peringatan Hari Pahlawan SMA N 2 Purworejo",
      image: "/home/galleries/gallery-1.png",
      date: "10 Nov 2023",
    },
    {
      id: 2,
      title: "OSIS dan MPK SMA N 2 Purworejo menggalang rangkaian...",
      image: "/home/galleries/gallery-2.png",
      date: "5 Nov 2023",
    },
    {
      id: 3,
      title: "Kegiatan lustrum SMA N 2 Purworejo dihadiri Bupati Purw...",
      image: "/home/galleries/gallery-3.png",
      date: "1 Nov 2023",
    },
    {
      id: 1,
      title: "Upacara Peringatan Hari Pahlawan SMA N 2 Purworejo",
      image: "/home/galleries/gallery-1.png",
      date: "10 Nov 2023",
    },
    {
      id: 2,
      title: "OSIS dan MPK SMA N 2 Purworejo menggalang rangkaian...",
      image: "/home/galleries/gallery-2.png",
      date: "5 Nov 2023",
    },
    {
      id: 3,
      title: "Kegiatan lustrum SMA N 2 Purworejo dihadiri Bupati Purw...",
      image: "/home/galleries/gallery-3.png",
      date: "1 Nov 2023",
    },
  ];

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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-12 text-royal-blue text-5xl">
            Berita Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-5">
                <div>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-[370px] h-[280px] object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className=" text-blue-light text-2xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-4">
                    <Calendar className="w-4" />
                    {item.date}
                  </p>
                </div>
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

export default News;
