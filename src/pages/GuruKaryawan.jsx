import Breadcrumb from "../components/BreadCrumb";
import CardHover from "../components/card/card-hover";

const GuruKaryawan = () => {
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

      <div className="container mx-auto my-20">
        <div className="grid grid-cols-4 gap-5">
          <CardHover
            name={"Sasongko Wibowo, S.Pd"}
            title={"Matematika"}
            imageUrl={"/card/image-1.png"}
          />
          <CardHover
            name={"Sasongko Wibowo, S.Pd"}
            title={"Matematika"}
            imageUrl={"/card/image-1.png"}
          />
          <CardHover
            name={"Sasongko Wibowo, S.Pd"}
            title={"Matematika"}
            imageUrl={"/card/image-1.png"}
          />
          <CardHover
            name={"Sasongko Wibowo, S.Pd"}
            title={"Matematika"}
            imageUrl={"/card/image-1.png"}
          />
          <CardHover
            name={"Sasongko Wibowo, S.Pd"}
            title={"Matematika"}
            imageUrl={"/card/image-1.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default GuruKaryawan;
