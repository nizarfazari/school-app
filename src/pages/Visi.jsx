import { ArrowUp } from "lucide-react";
import Breadcrumb from "../components/BreadCrumb";

function Visi() {
  
    const breadcrumbItems = [
      { label: "Halaman Utama", href: "/" },
      {
        label: "Sambutan Kepala Sekolah",
        href: "/kurikulum/struktur-dan-muatan",
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
      <div className=" bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12">
            VISI DAN MISI SMA N 2 PURWOREJO
          </h1>

          <div className="space-y-8">
            {/* Vision Section */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Visi:</h2>
              <p className="text-gray-700 leading-relaxed">
                Terwujudnya insan yang bertaqwa, berbudi pekerti luhur, cerdas,
                terampil, berdaya saing tinggi, peduli dan berbudaya lingkungan.
              </p>
            </section>

            {/* Mission Section */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Misi:</h2>
              <ol className="list-decimal list-outside ml-4 space-y-2 text-gray-700">
                <li>Mengintegrasikan aspek religi pada setiap pembelajaran;</li>
                <li>Menumbuhkembangkan kehidupan sekolah yang religius;</li>
                <li>Menumbuhkembangkan budaya budi pekerti luhur;</li>
                <li>Menumbuhkembangkan budaya disiplin dan jujur;</li>
                <li>
                  Melaksanakan pembelajaran untuk menguasai ilmu pengetahuan dan
                  teknologi;
                </li>
                <li>
                  Meningkatkan prestasi akademik dengan parameter hasil ujian
                  nasional tahun sebelumnya;
                </li>
                <li>
                  Memberikan layanan pendidikan dan bimbingan yang berkualitas;
                </li>
                <li>
                  Meningkatkan prestasi non akademik dalam bidang olah raga,
                  seni, dan teknologi kreatif;
                </li>
                <li>
                  Meningkatkan prestasi akademik, keterampilan, dan kreativitas
                  warga sekolah sesuai dengan bakat dan minatnya untuk
                  meningkatkan daya saing antar sekolah, perguruan tinggi, dan
                  dunia kerja;
                </li>
                <li>
                  Meningkatkan pemahaman dan pelaksanaan hemat energy dan air
                  untuk lingkungan yang lebih baik, dan
                </li>
                <li>
                  Mengendalikan pencemaran dan kerusakan lingkungan serta
                  melestarikan lingkungan
                </li>
              </ol>
            </section>
          </div>
        </div>

        {/* Scroll to Top Button */}
       
      </div>
    </div>
  );
}

export default Visi;
