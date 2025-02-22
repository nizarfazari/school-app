import { Calendar } from "lucide-react";

export default function NewsSection() {
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
  ];

  return (
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
                  <Calendar className="w-4"/>
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/berita" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
}
