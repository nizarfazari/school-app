export default function GallerySection() {
    const images = Array(6).fill("/home/activities/activity-")
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-royal-blue font-bold text-center mb-12">Galeri Kegiatan</h2>
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
            <a href="/galeri" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Lihat Selengkapnya</a>
          </div>
        </div>
      </section>
    )
  }
  
  