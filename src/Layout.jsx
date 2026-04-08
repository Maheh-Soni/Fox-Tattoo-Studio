import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuMounted, setMenuMounted] = useState(false);
  const [menuPanelOpen, setMenuPanelOpen] = useState(false);
  const [menuTextOpen, setMenuTextOpen] = useState(false);

  const [showIntro, setShowIntro] = useState(true);
  const [introSlideUp, setIntroSlideUp] = useState(false);
  const [foxActive, setFoxActive] = useState(false);
  const [textActive, setTextActive] = useState(false);

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    playIntro();
  }, []);

const playIntro = (nextPath = null) => {
  setShowIntro(true);
  setIntroSlideUp(false);
  setFoxActive(false);
  setTextActive(false);

  setTimeout(() => setFoxActive(true), 400);
  setTimeout(() => setTextActive(true), 900);
  setTimeout(() => setIntroSlideUp(true), 1800);

  setTimeout(() => {
    if (nextPath) {
      navigate(nextPath);
    }
    setShowIntro(false);
    setIsNavigating(false);
  }, 2600);
};

  const openMenu = () => {
    setMenuMounted(true);

    setTimeout(() => {
      setMenuPanelOpen(true);
    }, 20);

    setTimeout(() => {
      setMenuTextOpen(true);
    }, 750);
  };

const closeMenu = () => {
  setMenuTextOpen(false);

  setTimeout(() => {
    setMenuPanelOpen(false);
  }, 900);

  setTimeout(() => {
    setMenuMounted(false);
  }, 1650);
};

  const handleMenuToggle = () => {
    if (menuMounted) {
      closeMenu();
    } else {
      openMenu();
    }
  };

const handlePageChange = (path) => {
  if (isNavigating) return;

  setIsNavigating(true);

  // instantly hide menu
  setMenuTextOpen(false);
  setMenuPanelOpen(false);
  setMenuMounted(false);

  // if already on same page, play intro and reopen same page feel
  if (location.pathname === path) {
    playIntro();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 2600);

    return;
  }

  // if different page
  playIntro(path);
};

  const menuItems = [
    { name: "ABOUT ME", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFOLIO", path: "/" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes introSlideUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .intro-slide-up {
          animation: introSlideUp 0.8s ease-in-out forwards;
        }
      `}</style>

      {showIntro && (
        <div
          className={`fixed inset-0 z-[100] bg-black flex items-center justify-center ${
            introSlideUp ? "intro-slide-up" : ""
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            <div
              className="transition-all duration-700"
              style={{
                color: foxActive ? "#d4a017" : "#6b7280",
                transform: foxActive ? "scale(1.04)" : "scale(1)",
              }}
            >
              <svg
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50 12L62 30L84 20L74 42L90 56L68 58L70 82L50 70L30 82L32 58L10 56L26 42L16 20L38 30L50 12Z" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-[0.35em] uppercase text-center">
              <span
                className="transition-colors duration-700"
                style={{ color: foxActive ? "#d4a017" : "#6b7280" }}
              >
                FOX
              </span>
              <span className="inline-block w-4 md:w-6"></span>
              <span
                className="transition-colors duration-700"
                style={{ color: textActive ? "#ffffff" : "#6b7280" }}
              >
                TATTOO
              </span>
              <span className="inline-block w-4 md:w-6"></span>
              <span
                className="transition-colors duration-700"
                style={{ color: textActive ? "#ffffff" : "#6b7280" }}
              >
                STUDIO
              </span>
            </h1>
          </div>
        </div>
      )}

      <div className="bg-black min-h-screen text-white">
        {/* Navbar */}
        <div className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-5 md:py-6 bg-black">
          <button
            className="text-lg font-bold tracking-[0.3em] cursor-pointer"
            onClick={() => handlePageChange("/")}
          >
            FOX TATTOO
          </button>

          <div className="cursor-pointer space-y-1" onClick={handleMenuToggle}>
            <div className="w-6 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </div>
        </div>

        {/* Menu */}
        {menuMounted && (
          <div
            className={`fixed top-10 left-0 w-full h-[calc(100%)] bg-black z-40 flex flex-col justify-center items-center transition-transform duration-700 ease-in-out ${
              menuPanelOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-widest">
              {menuItems.map((item, index, arr) => {
  const delay = menuTextOpen
    ? index * 180
    : (arr.length - 1 - index) * 180;

  return (
    <p key={index} className="overflow-hidden">
      <button
        onClick={() => handlePageChange(item.path)}
        className={`inline-block cursor-pointer transition-all duration-700 ease-in-out ${
          menuTextOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {item.name}
      </button>
    </p>
  );
})}
            </div>
          </div>
        )}

        {/* Page content */}
        <Outlet />

        {/* Footer */}
        <footer
          id="contact"
          className="bg-black text-white border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-[32%_68%]">
            <div className="border-b md:border-b-0 md:border-r border-white/20 px-5 sm:px-8 md:px-16 pt-10 pb-8 md:py-16">
              <div className="flex items-center gap-3">
                <span className="text-[#d4a64a] text-[34px] md:text-5xl font-bold leading-none">
                  Fox
                </span>
                <h2 className="text-[18px] md:text-3xl font-semibold tracking-[0.22em] uppercase">
                  Tattoo
                </h2>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-[14px] md:text-lg text-white">
                  foxtattoostudio@gmail.com
                </p>
                <p className="text-[14px] md:text-lg text-white/55">
                  +91 7999070307
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[28px] md:text-3xl"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[28px] md:text-3xl"
                >
                  <i className="ri-facebook-box-line"></i>
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="border-b border-white/20 px-4 md:px-16 py-5 md:py-16">
                <div className="flex items-center justify-between text-[10px] md:text-[15px] font-bold uppercase tracking-[0.14em] md:tracking-[0.18em] whitespace-nowrap">
                  <button onClick={() => handlePageChange("/about")}>About</button>
                  <button onClick={() => handlePageChange("/services")}>Services</button>
                  <button onClick={() => handlePageChange("/")}>Portfolio</button>
                  <button onClick={() => handlePageChange("/contact")}>Contact</button>
                </div>
              </div>

              <div className="px-4 md:px-16 py-5 md:py-16">
                <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[10px] md:text-sm text-white/70 leading-5">
                  <span>
                    © 2026 Fox Tattoo Studio.  <span className="text-white">All Rights Reserved.</span>
                  </span>
                  <span className="text-white/35">•</span>
                  <span>
                    Open Hours: <span className="text-white">Mon – Sun: 11:00 AM – 9:00 PM</span>
                  
                  </span>
                  <span className="text-white/35">•</span>
                  <span>Licenses</span>
                  <span className="text-white/35">•</span>
                  <span>Styleguide</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;