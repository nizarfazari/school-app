export default function Hero() {
    return (
      <div className="relative h-screen bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/home/banner.jpg')`,
            opacity: 0.7,
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl ">
            <h1 className="text-5xl font-bold">Selamat Datang di Website Resmi SMA N 2 Purworejo</h1>
            <p className="text-lg md:text-xl mt-2">Mewujudkan pendidikan berkualitas untuk masa depan yang lebih baik</p>
          </div>
        </div>
      </div>
    )
  }
  
  