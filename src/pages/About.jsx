import { useEffect, useRef, useState } from "react";
import myimage from "../assets/vicky1.jpeg";
import img2 from "../assets/vicky2.jpeg";
import img3 from "../assets/vicky3.jpeg";

function About() {
  const [activeService, setActiveService] = useState("");
  const [showIntroSection, setShowIntroSection] = useState(false);
  const [showStatsSection, setShowStatsSection] = useState(false);
  const [showServicesSection, setShowServicesSection] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const [showGalleryStrip, setShowGalleryStrip] = useState(false);
  const [showValuesSection, setShowValuesSection] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  
  
  const valuesRef = useRef(null);
  const galleryStripRef = useRef(null);
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);

  const galleryStripImages = [myimage,
  img2,
  img3,
];

  const services = [
    {
      title: "Tattooing",
      description:
        "Professional tattooing with clean lines, smooth shading, and long-lasting ink using modern hygienic techniques.",
      image: myimage,
    },
    {
      title: "Design Work",
      description:
        "Custom tattoo designs tailored to your ideas, ensuring every tattoo is unique and meaningful.",
      image:
        myimage,
    },
    {
      title: "Piercing",
      description:
        "Safe and hygienic piercing services performed with proper care and professional equipment.",
      image:
        myimage,
    },
  ];


  const values = [
  {
    number: "01",
    title: "QUALITY",
    description:
      "We believe that a tattoo is a lifetime investment, and quality should never be compromised. From the first sketch to the final detail, we focus on precision, clean lines, and perfect execution. Every tattoo is crafted using professional tools, high-quality ink, and strict hygiene standards to ensure it not only looks great today but continues to stand strong for years to come.",
  },
  {
    number: "02",
    title: "PASSION",
    description:
      "Tattooing is not just a profession for us — it’s an art we live and breathe every day. Our passion drives us to constantly improve, explore new styles, and push creative boundaries. This passion reflects in every piece we create, ensuring that each tattoo carries a sense of dedication, emotion, and artistic expression.",
  },
  {
    number: "03",
    title: "CREATIVITY",
    description:
      "No two people are the same, and neither should their tattoos be. We specialize in creating unique, custom designs that are tailored to your personality, story, and vision. Whether it’s a minimal tattoo or a detailed artwork, we focus on originality and creativity to make sure your tattoo truly stands out.",
  },
  {
    number: "04",
    title: "INNOVATION",
    description:
      "The tattoo industry is constantly evolving, and we believe in staying ahead. We adopt modern techniques, advanced equipment, and new design trends to deliver better results and a smoother experience. Innovation allows us to provide tattoos that are not only visually stunning but also technically superior.",
  },
  {
    number: "05",
    title: "TRUST",
    description:
      "Getting a tattoo is a personal decision, and trust plays a huge role in that journey. We ensure complete transparency, proper consultation, and a safe environment where you feel comfortable at every step. Our goal is to build long-term relationships with our clients based on honesty, professionalism, and reliability.",
  },
  {
    number: "06",
    title: "COMMITMENT",
    description:
      "From the moment you share your idea to the final result, we stay committed to delivering the best experience possible. We take the time to understand your vision, guide you through the process, and ensure that you leave with a tattoo you are proud of. Your satisfaction is not just our goal — it’s our responsibility.",
  },
];


const faqs = [
  {
    question: "How long does it take to make a tattoo on my arm?",
    answer:
      "Most tattoos take between 1 to 4 hours depending on size and design complexity.",
  },
  {
    question: "I have an ugly tattoo on my back, can it be covered up?",
    answer:
      "Yes, old tattoos can be covered with creative designs depending on size, color, and condition.",
  },
  {
    question: "Is it possible to complete a hole tattoo in one day/session?",
    answer:
      "Small tattoos can be completed in one session, while larger designs may require multiple sessions.",
  },
  {
    question: "Can i use a creditcard to pay for my tattoos?",
    answer:
      "Yes, we accept online payments including UPI, cards, and cash.",
  },
];



useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === introRef.current && entry.isIntersecting) {
          setShowIntroSection(true);
        }

        if (entry.target === statsRef.current && entry.isIntersecting) {
          setShowStatsSection(true);
        }

        if (entry.target === servicesRef.current && entry.isIntersecting) {
          setShowServicesSection(true);
        }

        if (entry.target === galleryStripRef.current && entry.isIntersecting) {
          setShowGalleryStrip(true);
        }

        if (entry.target === valuesRef.current && entry.isIntersecting) {
          setShowValuesSection(true);
        }
      });
    },
    { threshold: 0.12 }
  );

  if (introRef.current) observer.observe(introRef.current);
  if (statsRef.current) observer.observe(statsRef.current);
  if (servicesRef.current) observer.observe(servicesRef.current);
  if (galleryStripRef.current) observer.observe(galleryStripRef.current);
  if (valuesRef.current) observer.observe(valuesRef.current);

  return () => observer.disconnect();
}, []);


const currentImage = activeService
  ? services.find((item) => item.title === activeService)?.image
  : null;

const handleServiceClick = (title) => {
  const isSame = activeService === title;

  setImageVisible(false);

  setTimeout(() => {
    setActiveService(isSame ? "" : title);
    setImageVisible(true);
  }, 180);
};

  return (
    <>
      <style>{`
        .award-spin {
  animation: spin 12s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

        .reveal-left {
          opacity: 0;
          transform: translateX(-70px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .reveal-left.show {
          opacity: 1;
          transform: translateX(0);
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

        .service-content {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(8px);
          transition: max-height 0.45s ease, opacity 0.35s ease, transform 0.35s ease;
        }

        .service-content.open {
          max-height: 220px;
          opacity: 1;
          transform: translateY(0);
        }

        .service-image {
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .service-image.hide {
          opacity: 0;
          transform: scale(0.98);
        }

        .service-image.show {
          opacity: 1;
          transform: scale(1);
        }

        .reveal-card-up {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1s ease, transform 1s ease;
}

.reveal-card-up.show {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-70px);
  transition: opacity 1s ease, transform 1s ease;
}

.reveal-left.show {
  opacity: 1;
  transform: translateX(0);
}

.reveal-card-up {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1s ease, transform 1s ease;
}

.reveal-card-up.show {
  opacity: 1;
  transform: translateY(0);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-6px);
  transition: max-height 0.45s ease, opacity 0.35s ease, transform 0.35s ease;
}

.faq-answer.open {
  max-height: 220px;
  opacity: 1;
  transform: translateY(0);
}

.faq-line {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}

.faq-line.show {
  opacity: 1;
  transform: translateY(0);
}

      `}</style>

      <div className="bg-black text-white min-h-screen">
        {/* First Section */}
        <section
          ref={introRef}
          className="px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-16"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              className={`w-full reveal-up ${
                showIntroSection ? "show" : ""
              }`}
            >
              <img
                src={currentImage || myimage}
                alt="Tattoo artist"
                className="w-[90%] h-[500px] md:h-[600px] object-cover"
              />
            </div>

            <div className="w-full">
              <h1
                className={`reveal-left ${
                  showIntroSection ? "show" : ""
                } text-4xl sm:text-5xl md:text-3xl lg:text-[52px] font-extrabold uppercase leading-[0.95] tracking-tight`}
                style={{ transitionDelay: "0ms" }}
              >
                Hi, I'm a <span className="text-[#d4a64a]">Vicky,</span>
                <br />
                Specialized in 
                <br />
                Custom Tattoos,
                <br />
                Blackwork & Modern Designs
              </h1>

              <p
                className={`reveal-left ${
                  showIntroSection ? "show" : ""
                } mt-8 text-gray-400 text-base md:text-xl leading-8 max-w-xl`}
                style={{ transitionDelay: "220ms" }}
              >
                At Fox Tattoo Studio, We create custom tattoos that reflect your personality and story.
                With years of experience in tattoo design and professional tattooing, We focus on precision,
                hygiene, and delivering high-quality artwork that lasts a lifetime.
              </p>

              <a
                href="/contact"
                className={`reveal-left ${
                  showIntroSection ? "show" : ""
                } inline-block mt-10 uppercase font-bold text-lg tracking-wide border-b border-white/30 pb-3 hover:border-white transition`}
                style={{ transitionDelay: "420ms" }}
              >
                Book Your Tattoo Session
              </a>

              <div
  className={`reveal-left ${
    showIntroSection ? "show" : ""
  } mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6`}
  style={{ transitionDelay: "620ms" }}
>
  <div className="relative w-[110px] h-[110px] flex items-center justify-center">
    <div className="absolute inset-0 award-spin">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="awardCircle"
            d="M 60,60
               m -40,0
               a 40,40 0 1,1 80,0
               a 40,40 0 1,1 -80,0"
          />
        </defs>

        <text
          fill="white"
          fontSize="10"
          fontWeight="600"
          letterSpacing="4"
          textTransform="uppercase"
        >
          <textPath href="#awardCircle" startOffset="0%">
            Client Rating • Client Rating •
          </textPath>
        </text>
      </svg>
    </div>

    <div className="absolute inset-0 flex items-center justify-center text-white text-[24px]">
      5★
    </div>
  </div>

  <div>
    <h3 className="text-xl md:text-2xl font-bold uppercase">
      Trusted Tattoo Artist
    </h3>
    <p className="mt-2 text-gray-400 text-lg">
      1000+ Happy Clients | Expert in Custom & Cover-Up Tattoos
    </p>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="bg-black text-white px-6 md:px-40 lg:px-20 pt-6 md:pt-20 pb-16 md:pb-24"
        >
          <div className="mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 items-start">
              <div
                className={`border border-white/80 h-[123px] sm:h-[180px] md:h-[340px] flex flex-col items-center justify-center text-center reveal-up ${
                  showStatsSection ? "show" : ""
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                  500+
                </h2>
                <p className="mt-2 md:mt-3 text-[11px] sm:text-sm md:text-2xl text-gray-400 font-bold uppercase leading-tight">
                  Made Tattoes
                </p>
              </div>

              <div
                className={`border border-white/80 h-[135px] sm:h-[180px] md:h-[340px] flex flex-col items-center justify-center text-center md:mt-10 reveal-up ${
                  showStatsSection ? "show" : ""
                }`}
                style={{ transitionDelay: "180ms" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                  500+
                </h2>
                <p className="mt-2 md:mt-3 text-[11px] sm:text-sm md:text-2xl text-gray-400 font-bold uppercase leading-tight">
                  Happy Clients
                </p>
              </div>

              <div
                className={`border border-white/80 h-[135px] sm:h-[180px] md:h-[340px] flex flex-col items-center justify-center text-center reveal-up ${
                  showStatsSection ? "show" : ""
                }`}
                style={{ transitionDelay: "360ms" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                    5+
                </h2>
                <p className="mt-2 md:mt-3 text-[11px] sm:text-sm md:text-2xl text-gray-400 font-bold uppercase leading-tight">
                  Years Experience
                </p>
              </div>

              <div
                className={`border border-white/80 h-[135px] sm:h-[180px] md:h-[340px] flex flex-col items-center justify-center text-center md:mt-10 reveal-up ${
                  showStatsSection ? "show" : ""
                }`}
                style={{ transitionDelay: "540ms" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                  5★
                </h2>
                <p className="mt-2 md:mt-3 text-[11px] sm:text-sm md:text-2xl text-gray-400 font-bold uppercase leading-tight">
                  Client Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Skills Section */}
        <section
          ref={servicesRef}
          className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 md:py-28"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                className={`reveal-left ${
                  showServicesSection ? "show" : ""
                } text-4xl sm:text-5xl md:text-6xl lg:text-[40px] font-extrabold uppercase leading-[0.95] tracking-tight`}
                style={{ transitionDelay: "0ms" }}
              >
                Tattoo <span className="text-[#d4a64a]">Expertise </span> & Services 
              </h2>

              <p
                className={`reveal-left ${
                  showServicesSection ? "show" : ""
                } mt-8 text-gray-400 text-base md:text-xl leading-8 max-w-xl`}
                style={{ transitionDelay: "180ms" }}
              >
                We specialize in custom tattoo designs, professional tattooing, and creative cover-ups. 
                Every tattoo is designed with precision, creativity, and attention to detail.
              </p>

              <div className="mt-12 space-y-8">
                {services.map((service, index) => {
                  const isActive = activeService === service.title;

                  return (
                    <div
                      key={service.title}
                      className={`reveal-left ${
                        showServicesSection ? "show" : ""
                      }`}
                      style={{ transitionDelay: `${300 + index * 180}ms` }}
                    >
                      <button
                        onClick={() => handleServiceClick(service.title)}
                        className="flex items-start gap-5 text-left w-full"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 border border-[#8f7a3f] flex items-center justify-center text-[#d4a64a] text-3xl leading-none flex-shrink-0">
                          {isActive ? "×" : "+"}
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-2xl font-bold">
                            {service.title}
                          </h3>

                          <div
                            className={`service-content ${
                              isActive ? "open" : ""
                            }`}
                          >
                            <p className="mt-5 text-gray-400 text-base md:text-xl leading-8 max-w-xl">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div
                className={`reveal-left ${
                  showServicesSection ? "show" : ""
                } mt-14`}
                style={{ transitionDelay: "860ms" }}
              >
                <a
                  href="/services"
                  className="inline-block uppercase font-bold text-lg tracking-wide border-b border-white/30 pb-3 hover:border-white transition"
                >
                  My Services
                </a>
              </div>
            </div>

            <div
              className={`reveal-up ${
                showServicesSection ? "show" : ""
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <img
                src={currentImage || myimage}
                alt={activeService || "Service"}
                className={`w-full h-[320px] sm:h-[560px] md:h-[760px] object-cover service-image ${
                    imageVisible ? "show" : "hide"
                }`}
              />
            </div>
          </div>
        </section>

{/* Three Image Strip Section */}
<section
  ref={galleryStripRef}
  className="bg-black text-white py-6 w-full"
>
  <div className="grid grid-cols-3 gap-0 w-full">
    {galleryStripImages.map((img, index) => (
      <div
        key={index}
        className={`reveal-card-up ${
          showGalleryStrip ? "show" : ""
        } w-full overflow-hidden`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <img
          src={img}
          alt={`Gallery ${index + 1}`}
          className="block w-full aspect-square object-cover"
        />
      </div>
    ))}
  </div>
</section>


{/* Values Section */}
<section
  ref={valuesRef}
  className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 md:py-28"
>
  <div className="max-w-7xl mx-auto">
    {/* Top row */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
        <div
        className={`reveal-left max-w-[520px] ${showValuesSection ? "show" : ""}`}
        style={{ transitionDelay: "0ms" }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold uppercase leading-[0.95] tracking-tight">
          Our Core <span className="text-[#d4a64a]">Values </span> &
          <br />
          Tattoo Philosophy
           
        </h2>
      </div>

      <div
        className={`reveal-left ${showValuesSection ? "show" : ""}`}
        style={{ transitionDelay: "180ms" }}
      >
        <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl">
          At Fox Tattoo Studio, every tattoo is more than just ink — it’s a story, an emotion, and a lifelong commitment. 
          We believe that great tattoos come from a combination of passion, precision, and trust. Our approach is not just about creating designs, 
          but about delivering an experience that feels personal, comfortable, and meaningful for every client who walks into our studio.
        </p>
      </div>
    </div>

{/* Cards */}
<div className="space-y-6 md:space-y-8">
    {/* First Row */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {values.slice(0, 3).map((item, index) => {
      let staggerClass = "";

      if (index === 0) staggerClass = "lg:mt-0";
      if (index === 1) staggerClass = "lg:mt-16";
      if (index === 2) staggerClass = "lg:mt-32";

      return (
        <div
          key={item.number}
          className={`border border-white/80 
px-8 md:px-10 
py-10 md:py-35 
h-[420px] md:h-[620px] 
w-full 
reveal-card-up 
${showValuesSection ? "show" : ""} 
${staggerClass}`}
          style={{ transitionDelay: `${index * 140}ms` }}
        >
          <div className="text-[40px] md:text-[50px] font-extrabold text-white/10 leading-none">
            {item.number}
          </div>

          <h3 className="mt-6 text-[20px] md:text-[28px] font-extrabold uppercase leading-none">
            {item.title}
          </h3>

          <p className="mt-6 text-gray-400 text-[15px] md:text-lg leading-8">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>

  {/* Second Row */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {values.slice(3, 6).map((item, index) => {
      let staggerClass = "";

      if (index === 0) staggerClass = "lg:mt-0";
      if (index === 1) staggerClass = "lg:mt-16";
      if (index === 2) staggerClass = "lg:mt-32";

      return (
        <div
          key={item.number}
          className={`border border-white/80 
px-8 md:px-10 
py-10 md:py-35
h-[420px] md:h-[620px] 
w-full 
reveal-card-up 
${showValuesSection ? "show" : ""} 
${staggerClass}`}
          style={{ transitionDelay: `${(index + 3) * 140}ms` }}
        >
          <div className="text-[40px] md:text-[50px] font-extrabold text-white/10 leading-none">
            {item.number}
          </div>

          <h3 className="mt-6 text-[20px] md:text-[28px] font-extrabold uppercase leading-none">
            {item.title}
          </h3>

          <p className="mt-6 text-gray-400 text-[15px] md:text-lg leading-8">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>
</div>  </div>
</section>


{/* FAQ Section */}
<section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 md:py-28">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold uppercase leading-[0.95] tracking-tight">
        Find The <span className="text-[#d4a64a]">Answers</span> On Frequently Asked
        <br />
        Questions
      </h2>
    </div>

    <div className="space-y-7 md:space-y-8">
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={index}
            className={`faq-line ${showValuesSection ? "show" : ""}`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <button
              onClick={() => setOpenFaq(isOpen ? -1 : index)}
              className="w-full border border-white/70 px-5 md:px-6 py-6 md:py-8 flex items-center justify-between text-left"
            >
              <span className="text-xl md:text-[22px] font-extrabold leading-snug">
                {faq.question}
              </span>

              <span className="text-[#d4a64a] text-4xl md:text-5xl leading-none ml-6 flex-shrink-0">
                {isOpen ? "×" : "+"}
              </span>
            </button>

            <div className={`faq-answer ${isOpen ? "open" : ""}`}>
              <p className="pt-6 px-2 md:px-6 text-gray-300 text-base md:text-lg leading-9 max-w-5xl">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


</div>

    </>
  );
}

export default About;