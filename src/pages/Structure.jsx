import Breadcrumb from "../components/BreadCrumb";
import CardStructure from "../components/card/card-structure";

const Structure = () => {
  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/" },
    { label: "Sambutan Kepala Sekolah", href: "/kurikulum/struktur-dan-muatan" },
  ];

  const leadershipTeam = [
    { imageUrl: "/card/image-1.png", name: "Mardyanto, M.Pd", title: "Kepala Sekolah" },
    { imageUrl: "/card/image-1.png", name: "Heri Wirawan, S.Pd", title: "Wakil Kepala Sekolah Bidang Kesiswaan" },
    { imageUrl: "/card/image-2.png", name: "Karyono, S.Pd", title: "Wakil Kepala Sekolah Bidang Kurikulum" },
    { imageUrl: "/card/image-1.png", name: "Sri Maryatun, S.Pd", title: "Wakil Kepala Sekolah Bidang Sarana Prasarana" },
    { imageUrl: "/card/image-1.png", name: "Sasongko Wibowo, S.Pd", title: "Wakil Kepala Sekolah Bidang Hubungan Masyarakat" },
  ];

  return (
    <div>
      {/* Hero Section */}
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

      {/* Structure Section */}
      <div className="container mx-auto my-20">
        <section>
          <div className="flex justify-center">
            <CardStructure {...leadershipTeam[0]} />
          </div>
          <div className="flex flex-wrap gap-10 mt-10 justify-center">
            {leadershipTeam.slice(1).map((member, index) => (
              <CardStructure key={index} {...member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Structure;