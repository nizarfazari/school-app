import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20"
              />
              <span className="font-semibold text-xl leading-[20px] max-w-[100px]">SMA N 2 PURWOREJO</span>
            </div>
            <p className="text-sm">
              Mewujudkan pendidikan berkualitas untuk masa depan yang lebih baik
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Jl. Jend Ahmad Yani, Purworejo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(0275) 321066</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@sman2purworejo.sch.id</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Lokasi Sekolah</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016.8596381370942!2d109.91657814636163!3d-7.714724237588535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac1bd89e485eb%3A0x6f5630fa60412d39!2sSMA%20Negeri%202%20Purworejo!5e0!3m2!1sid!2sid!4v1739112275896!5m2!1sid!2sid"
              className="w-full"
              height="200"
              allowfullscreen=""
              loading="lazy"
           
            ></iframe>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 SMA N 2 Purworejo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
