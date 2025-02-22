import Sidebar from "../components/kurikulum/sidebar";
import Breadcrumb from "../components/BreadCrumb";
export default function DetailNews() {

  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/" },
    {
      label: "Sambutan Kepala Sekolah",
      href: "/kurikulum/struktur-dan-muatan",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
    
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

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Struktur dan Muatan Kurikulum</h1>
            <div className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              </p>
            </div>
          </div>

          <aside>
            <Sidebar />
          </aside>
        </div>
      </main>


    </div>
  )
}

