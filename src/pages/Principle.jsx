import Breadcrumb from "../components/BreadCrumb";

const Principle = () => {
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src="/home/kepala-sekolah.png"
                alt="Kepala Sekolah"
                className="rounded-lg shadow-lg w-full max-w-[300px] mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="text-royal-blue max-w-[540px]">
                <h2 className="text-2xl font-semibold mb-2">
                  Mardyanto, M.Pd.
                </h2>
                <h3 className="  text-5xl mb-4 font-bold">
                  Sambutan Kepala Sekolah
                </h3>
              </div>
              <p className="max-w-[600px] mb-6 text-royal-blue font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principle;
