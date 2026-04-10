import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/vicky1.jpeg";
import img2 from "../assets/vicky2.jpeg";
import img3 from "../assets/vicky3.jpeg";
import img4 from "../assets/vicky4.jpeg";
import img5 from "../assets/vicky5.jpeg";
import img6 from "../assets/vicky6.jpeg";


function App() {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [menuMounted, setMenuMounted] = useState(false);
  const [menuPanelOpen, setMenuPanelOpen] = useState(false);
  const [menuTextOpen, setMenuTextOpen] = useState(false);


  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showMarqueeSection, setShowMarqueeSection] = useState(false);
  const [showGallerySection, setShowGallerySection] = useState(false);
  const [showCtaSection, setShowCtaSection] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [showInstaSection, setShowInstaSection] = useState(false);

  const marqueeRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);
  const instaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === marqueeRef.current && entry.isIntersecting) {
            setShowMarqueeSection(true);
          }

          if (entry.target === galleryRef.current && entry.isIntersecting) {
            setShowGallerySection(true);
          }

          if (entry.target === ctaRef.current && entry.isIntersecting) {
            setShowCtaSection(true);
          }

          if (entry.target === instaRef.current && entry.isIntersecting) {
            setShowInstaSection(true);
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    if (marqueeRef.current) observer.observe(marqueeRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (instaRef.current) observer.observe(instaRef.current);

    return () => observer.disconnect();
  }, []);


useEffect(() => {
  const localData = [
    { id: 1, image: img1, title: "Tattoo 1" },
    { id: 2, image: img2, title: "Tattoo 2" },
    { id: 3, image: img3, title: "Tattoo 3" },
    { id: 4, image: img4, title: "Tattoo 4" },
    { id: 5, image: img5, title: "Tattoo 5" },
    { id: 6, image: img6, title: "Tattoo 6" },
  ];

  setData(localData);
}, []);

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

  const scrollToSection = (id) => {
    closeMenu();

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

const menuItems = [
  { name: "ABOUT ME", path: "about" },
  { name: "SERVICES", path: "services" },
  { name: "PORTFOLIO", path: "/" },
  { name: "CONTACT", path: "contact" },
];

  const galleryImages = data.slice(0, 6);
  const instaImages = data.slice(0, 6);
  const instagramUrl = "https://www.instagram.com/your_username/";

  const openSlider = (index) => {
    setCurrentIndex(index);
    setSliderOpen(true);
  };

  const closeSlider = () => {
    setSliderOpen(false);
  };

  const showNext = () => {
    if (galleryImages.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPrev = () => {
    if (galleryImages.length === 0) return;
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marqueeLeft {
          animation: marqueeLeft 20s linear infinite;
        }

        .animate-marqueeRight {
          animation: marqueeRight 20s linear infinite;
        }

        @keyframes textLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes textRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-textLeft {
          animation: textLeft 15s linear infinite;
        }

        .animate-textRight {
          animation: textRight 15s linear infinite;
        }

        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(245, 165, 6, 0.89);
        }

        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 1px rgba(245, 165, 6, 0.89);
          }
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(70px);
          transition: opacity 1s ease, transform 1s ease;
          will-change: opacity, transform;
        }

        .reveal-item.show {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-line {
          opacity: 1;
          transform: translateY(60px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .cta-line.show {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-bg-text {
          transition: color 0.45s ease, transform 0.45s ease, opacity 0.45s ease;
        }

        .cta-bg-text.idle {
          color: rgba(168, 145, 79, 0.12);
        }

        .cta-bg-text.active {
          color: rgba(214, 184, 99, 0.3);
        }

        .cta-link {
          position: relative;
          display: inline-block;
        }

        .cta-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.35);
          transform: translateX(-50%) scaleX(0.28);
          transform-origin: center;
          transition: transform 0.45s ease, background 0.45s ease;
        }

        .cta-link:hover::after {
          transform: translateX(-50%) scaleX(1);
          background: rgba(255, 255, 255, 1);
        }

.insta-card {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}

.insta-card.show {
  opacity: 1;
  transform: translateY(0);
}

        .insta-overlay {
          background: rgba(0, 0, 0, 0.38);
          transition: opacity 0.35s ease;
        }

        .reveal-up {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .reveal-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      
      <div className="bg-black min-h-screen text-white">

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
      <Link
        to={item.path}
        onClick={closeMenu}
        className={`inline-block cursor-pointer transition-all duration-700 ease-in-out ${
          menuTextOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {item.name}
      </Link>
    </p>
  );
})}
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div id="home" className="pt-28 px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-10 min-h-[60vh]">
            <div className="w-full lg:w-1/2 space-y-6 mt-12">
              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Custom Tattoo Artist in Bhopal – Fox Tattoo Studio
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                Premium Tattoos | Unique Designs | Professional Ink Work
              </h1>

              <p className="text-gray-400 text-base md:text-lg max-w-xl leading-7">
                We specialize in custom tattoos, realistic designs, black & grey work, and modern tattoo styles. Our goal is to deliver clean, safe, and high-quality tattoos that last a lifetime.
              </p>

              <Link
                to="/contact"
                className="inline-block border border-white px-6 py-3 rounded-full text-sm tracking-wide uppercase hover:bg-white hover:text-black transition duration-300"
              >
              Book your appointment today             
            </Link>
            </div>

            <div className="w-full lg:w-1/2 overflow-hidden space-y-4">
              <div className="overflow-hidden">
                <div className="flex gap-2 w-max animate-marqueeLeft">
                  {data.length > 0 &&
                    data.concat(data).map((item, index) => (
                      <img
                        key={`top-${index}`}
                        src={item.image}
                        alt={item.title}
                        className="w-[180px] h-[220px] sm:w-[220px] sm:h-[260px] md:w-[260px] md:h-[300px] object-cover flex-shrink-0"
                        draggable="false"
                      />
                    ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="flex gap-2 w-max animate-marqueeRight">
                  {data.length > 0 &&
                    data.concat(data).map((item, index) => (
                      <img
                        key={`bottom-${index}`}
                        src={item.image}
                        alt={item.title}
                        className="w-[180px] h-[220px] sm:w-[220px] sm:h-[260px] md:w-[260px] md:h-[300px] object-cover flex-shrink-0"
                        draggable="false"
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moving Text Section */}
        <div
          id="about"
          ref={marqueeRef}
          className={`overflow-hidden py-8 md:py-10 bg-black reveal-up ${
            showMarqueeSection ? "show" : ""
          }`}
        >
          <div className="whitespace-nowrap overflow-hidden">
            <div className="inline-block animate-textRight text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold tracking-[0.1em] sm:tracking-[0.15em] stroke-text">
CUSTOM TATTOOS — BEST TATTOO STUDIO — UNIQUE INK — FOX TATTOO STUDIO —            </div>
          </div>

          <div className="whitespace-nowrap overflow-hidden mt-4 md:mt-6">
            <div className="inline-block animate-textLeft text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold tracking-[0.1em] sm:tracking-[0.15em] stroke-text">
REALISTIC TATTOOS — MINIMAL TATTOOS — PROFESSIONAL ARTIST — BOOK NOW —            </div>
          </div>
        </div>

        {/* Work Gallery Section */}
        <div
          id="portfolio"
          ref={galleryRef}
          className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-black reveal-up ${
            showGallerySection ? "show" : ""
          }`}
        >
          <div className="text-center mb-10 md:mb-14">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gray-400 mb-3">
Tattoo Portfolio – Real Client Work            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
Explore our latest tattoo designs created for real clients. Every tattoo reflects creativity, precision, and professional artistry.            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {galleryImages.map((item, index) => (
  <div
    key={item.id}
    className={`relative group overflow-hidden rounded-2xl cursor-pointer reveal-item ${
      showGallerySection ? "show" : ""
    }`}
    style={{
      transitionDelay: `${index * 400}ms`,
    }}
    onClick={() => openSlider(index)}
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-[90%] mx-auto h-[220px] sm:h-[240px] md:h-[280px] lg:h-[300px] object-cover transition duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span className="bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]">
        View
      </span>
    </div>
  </div>
))}
          </div>
        </div>

        {/* Slider Modal */}
        {sliderOpen && galleryImages.length > 0 && (
  <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center px-4">
    <button
      onClick={closeSlider}
      className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl leading-none z-10"
    >
      ×
    </button>

    <button
      onClick={showPrev}
      className="absolute left-2 sm:left-6 text-white text-3xl sm:text-5xl px-3 py-2 z-10"
    >
      ‹
    </button>

    <div className="w-full max-w-5xl flex flex-col items-center">
      <img
        src={galleryImages[currentIndex].image}
        alt={galleryImages[currentIndex].title}
        className="w-full max-h-[80vh] object-contain rounded-xl"
      />

      <h3 className="mt-4 text-lg sm:text-2xl font-semibold text-center">
        {galleryImages[currentIndex].title}
      </h3>
    </div>

    <button
      onClick={showNext}
      className="absolute right-2 sm:right-6 text-white text-3xl sm:text-5xl px-3 py-2 z-10"
    >
      ›
    </button>
  </div>
)}


        {/* CTA Section */}
        <div
          id="services"
          ref={ctaRef}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          className="relative min-h-[24vh] sm:min-h-[38vh] md:min-h-[40vh] bg-black flex items-center justify-center overflow-hidden px-4 sm:px-6 py-6 sm:py-10 md:py-0"
        >
          <div
            className={`cta-bg-text absolute inset-0 flex items-center justify-center font-extrabold uppercase pointer-events-none select-none leading-none ${
              ctaHovered ? "active" : "idle"
            }`}
          >
            <h1 className="text-[46px] sm:text-[70px] md:text-[180px] lg:text-[280px] tracking-[-0.04em] translate-y-4 sm:translate-y-5 md:translate-y-0">
              LET&apos;S GO
            </h1>
          </div>

          <div className="relative z-20 text-center flex flex-col items-center">
            <h2
              className={`cta-line ${
                showCtaSection ? "show" : ""
              } text-white font-extrabold uppercase text-[16px] sm:text-[22px] md:text-[48px] lg:text-[72px] leading-none`}
              style={{ transitionDelay: "0ms" }}
            >
Get Your Custom Tattoo Today            </h2>

            <p
              className={`cta-line ${
                showCtaSection ? "show" : ""
              } mt-2 sm:mt-2.5 md:mt-4 text-[#e5c76b] font-extrabold uppercase text-[10px] sm:text-[16px] md:text-[38px] lg:text-[50px] leading-none`}
              style={{ transitionDelay: "300ms" }}
            >
Professional. Safe. Unique Designs.            </p>

            <Link
              to="/contact"
              className={`cta-line ${
                showCtaSection ? "show" : ""
              } cta-link mt-4 sm:mt-5 md:mt-10 text-white font-bold uppercase text-[10px] sm:text-[12px] md:text-[24px]`}
              style={{ transitionDelay: "600ms" }}
            >
Book Your Tattoo Now            </Link>
          </div>
        </div>

{/* Instagram Strip Section */}
<div ref={instaRef} className="w-full bg-black overflow-hidden">
  <div className="grid grid-cols-3 lg:grid-cols-6 gap-0">
    {instaImages.slice(0, 6).map((item, index) => (
      <a
        key={item.id}
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`insta-card ${
          showInstaSection ? "show" : ""
        } relative group block overflow-hidden`}
        style={{ transitionDelay: `${index * 180}ms` }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="block w-full h-[116px] sm:h-[150px] md:h-[220px] lg:h-[320px] object-cover"
        />

        <div className="insta-overlay absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <span className="text-white text-[9px] sm:text-xs md:text-base font-semibold uppercase tracking-[0.08em] md:tracking-[0.12em] text-center px-2">
            View on Insta
          </span>
        </div>
      </a>
    ))}
  </div>
</div>
      </div>
    </>
  );
}

export default App;