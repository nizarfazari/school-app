// src/pages/Layout.jsx
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import NavBar from "@/components/navbar";
// import Footer from "@/components/footer";

export default function DefaultLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
