export default function HeroSection() {
  return (
    <div className="relative h-[300px] bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=300&width=1200")',
          opacity: 0.6,
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Struktur dan Muatan Kurikulum
        </h1>
        <div className="text-sm">
          Halaman Utama {">>>"} Struktur dan Muatan Kurikulum
        </div>
      </div>
    </div>
  );
}
