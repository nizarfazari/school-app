export default function PrincipalMessage() {
  return (
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
              <h2 className="text-2xl font-semibold mb-2">Mardyanto, M.Pd.</h2>
              <h3 className="  text-5xl mb-4 font-bold">
                Sambutan Kepala Sekolah
              </h3>
            </div>
            <p className="max-w-[600px] mb-6 text-royal-blue font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
