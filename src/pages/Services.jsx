import myimage from "../assets/vicky1.jpeg";
import { PencilRuler, ScanLine, Ear, SprayCan } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import img2 from "../assets/vicky2.jpeg";
import img3 from "../assets/vicky3.jpeg";
import { Link } from "react-router-dom";

function Services() {
  const [showServiceCards, setShowServiceCards] = useState(false);
  const serviceCardsRef = useRef(null);
  const [showMarqueeSection, setShowMarqueeSection] = useState(false);
  const marqueeRef = useRef(null);

  const [showTestimonialSection, setShowTestimonialSection] = useState(false);
const testimonialRef = useRef(null);

const testimonials = [
  {
    name: "Sabrina Lecompte",
    role: "Influencer",
    text: "Amazing experience! The design was exactly what I wanted and the detailing was perfect. Highly recommended tattoo studio.",
    image: img2,
  },
  {
    name: "Emily Watson",
    role: "Designer",
    text: "Very professional and clean work. The artist understood my idea and turned it into an amazing tattoo.",
    image: myimage,
  },
  {
    name: "John Carter",
    role: "Entrepreneur",
    text: "Best tattoo studio in the city. Friendly environment, great designs, and top-quality work.",
    image: img3,
  },
];

const [testimonialIndex, setTestimonialIndex] = useState(0);

const nextTestimonial = () => {
  setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
};

const prevTestimonial = () => {
  setTestimonialIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === serviceCardsRef.current && entry.isIntersecting) {
          setShowServiceCards(true);
        }

        if (entry.target === marqueeRef.current && entry.isIntersecting) {
          setShowMarqueeSection(true);
        }

        if (entry.target === testimonialRef.current && entry.isIntersecting) {
          setShowTestimonialSection(true);
        }
      });
    },
    { threshold: 0.12 }
  );

  if (serviceCardsRef.current) observer.observe(serviceCardsRef.current);
  if (marqueeRef.current) observer.observe(marqueeRef.current);
  if (testimonialRef.current) observer.observe(testimonialRef.current);

  return () => observer.disconnect();
}, []);

  return (
    <>
      <style>{`

        @keyframes serviceTextLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes serviceTextRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-serviceTextLeft {
  animation: serviceTextLeft 22s linear infinite;
}

.animate-serviceTextRight {
  animation: serviceTextRight 22s linear infinite;
}

.service-stroke-text {
  color: transparent;
  -webkit-text-stroke: 1px rgba(245, 165, 6, 0.89);
}

@media (min-width: 768px) {
  .service-stroke-text {
    -webkit-text-stroke: 1px rgba(245, 165, 6, 0.89);
  }
}

.reveal-marquee-up {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1s ease, transform 1s ease;
}

.reveal-marquee-up.show {
  opacity: 1;
  transform: translateY(0);
}

        .services-link {
          position: relative;
          display: inline-block;
        }

        .services-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.35);
          transition: background 0.35s ease, transform 0.35s ease;
        }

        .services-link:hover::after {
          background: rgba(255,255,255,1);
        }

        .reveal-card-up {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .reveal-card-up.show {
          opacity: 1;
          transform: translateY(0);
        }

.testimonial-reveal-right {
  opacity: 0;
  transform: translateX(80px);
  transition: opacity 1s ease, transform 1s ease;
}

.testimonial-reveal-right.show {
  opacity: 1;
  transform: translateX(0);
}

.appointment-link {
  position: relative;
  display: inline-block;
}

.appointment-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.35);
  transform: scaleX(0.28);
  transform-origin: left;
  transition: transform 0.4s ease, background 0.4s ease;
}

.appointment-link:hover::after {
  transform: scaleX(1);
  background: rgba(255,255,255,1);
}

.testimonial-arrow {
  width: 46px;
  height: 46px;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border: none;
  cursor: pointer;
}  
      `}</style>

      <div className="bg-black text-white  px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          <div>
            <img
              src={myimage}
              alt="Tattoo service"
              className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] object-cover"
            />
          </div>
        
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-1xl lg:text-[54px] font-extrabold uppercase leading-[0.95] tracking-tight max-w-[780px]">
              Professional <span className="text-[#d4a64a]">Tattoo</span> Services in bhopal  
      
            </h1>
        
            <p className="mt-8 text-gray-400 text-base md:text-lg leading-8 max-w-xl">
              At Fox Tattoo Studio, we offer professional tattoo services in [Your City], specializing in custom tattoo designs, detailed artwork, and modern 
              styles. Our focus is on precision, hygiene, and creating tattoos that truly represent your personality.
            </p>

            <Link
              to="/contact"
              className="services-link inline-block mt-12 uppercase font-bold text-lg tracking-wide"
            >
Book Your Tattoo Appointment            </Link>
          </div>
        </div>
      </div>

      <section
        ref={serviceCardsRef}
        className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-20 md:pt-36 pb-10 md:pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-none">
              Tattoo Services <span className="text-[#d4a64a]">We Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-10 items-start max-w-3xl mx-auto">
            <div
              className={`border border-white/80 h-[190px] sm:h-[220px] md:h-[340px] w-full max-w-[330px] mx-auto lg:max-w-none lg:mx-0 flex flex-col justify-start px-5 sm:px-7 md:px-8 pt-6 sm:pt-7 md:pt-8 reveal-card-up ${
                showServiceCards ? "show" : ""
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <PencilRuler className="w-8 h-8 md:w-10 md:h-10 mb-7 text-white" strokeWidth={1.8} />
              <h3 className="text-[18px] sm:text-[20px] md:text-2xl font-extrabold">
                Tattoo design
              </h3>
              <p className="mt-5 text-gray-400 text-[12px] sm:text-[14px] md:text-lg leading-7 max-w-[240px]">
                Get unique custom tattoo designs created just for you. We turn your ideas into meaningful artwork with professional detailing.              </p>
            </div>

            <div
              className={`border border-white/80 h-[190px] sm:h-[220px] md:h-[340px] w-full max-w-[330px] mx-auto lg:max-w-none lg:mx-0 flex flex-col justify-start px-5 sm:px-7 md:px-8 pt-6 sm:pt-7 md:pt-8 lg:mt-10 reveal-card-up ${
                showServiceCards ? "show" : ""
              }`}
              style={{ transitionDelay: "180ms" }}
            >
              <ScanLine className="w-8 h-8 md:w-10 md:h-10 mb-7 text-white" strokeWidth={1.8} />
              <h3 className="text-[18px] sm:text-[20px] md:text-2xl font-extrabold">
                Tattooing
              </h3>
              <p className="mt-5 text-gray-400 text-[12px] sm:text-[14px] md:text-lg leading-7 max-w-[240px]">
              High-quality tattooing using modern equipment and hygienic practices. Clean lines, smooth shading, and long-lasting results.              </p>
            </div>

            <div
              className={`border border-white/80 h-[190px] sm:h-[220px] md:h-[340px] w-full max-w-[330px] mx-auto lg:max-w-none lg:mx-0 flex flex-col justify-start px-5 sm:px-7 md:px-8 pt-6 sm:pt-7 md:pt-8 reveal-card-up ${
                showServiceCards ? "show" : ""
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              <Ear className="w-8 h-8 md:w-10 md:h-10 mb-7 text-white" strokeWidth={1.8} />
              <h3 className="text-[18px] sm:text-[20px] md:text-2xl font-extrabold">
                Piercing
              </h3>
              <p className="mt-5 text-gray-400 text-[12px] sm:text-[14px] md:text-lg leading-7 max-w-[240px]">
              Safe and professional body piercing services with sterile equipment and expert care for a comfortable experience.              </p>
            </div>

            <div
              className={`border border-white/80 h-[190px] sm:h-[220px] md:h-[340px] w-full max-w-[330px] mx-auto lg:max-w-none lg:mx-0 flex flex-col justify-start px-5 sm:px-7 md:px-8 pt-6 sm:pt-7 md:pt-8 lg:mt-10 reveal-card-up ${
                showServiceCards ? "show" : ""
              }`}
              style={{ transitionDelay: "540ms" }}
            >
              <SprayCan className="w-8 h-8 md:w-10 md:h-10 mb-7 text-white" strokeWidth={1.8} />
              <h3 className="text-[18px] sm:text-[20px] md:text-2xl font-extrabold">
                Cover ups
              </h3>
              <p className="mt-5 text-gray-400 text-[12px] sm:text-[14px] md:text-lg leading-7 max-w-[240px]">
              Transform or hide old tattoos with creative cover-up designs that give your skin a completely new look.              </p>
            </div>
          </div>
        </div>
      </section>


{/* Running Text Section */}
<section
  ref={marqueeRef}
  className={`overflow-hidden bg-black py-2 md:py-20  reveal-marquee-up ${
    showMarqueeSection ? "show" : ""
  }`}
>
  <div className="whitespace-nowrap overflow-hidden">
    <div className="inline-flex animate-serviceTextRight text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-extrabold uppercase tracking-[0.04em] service-stroke-text leading-none">
      <span className="pr-10">
      REALISTIC TATTOOS — COVER UP TATTOOS — HYGIENIC STUDIO — BOOK NOW —      </span>
      <span className="pr-10">
      REALISTIC TATTOOS — COVER UP TATTOOS — HYGIENIC STUDIO — BOOK NOW —      </span>
    </div>
  </div>

  <div className="whitespace-nowrap overflow-hidden mt-3 md:mt-5">
    <div className="inline-flex animate-serviceTextLeft text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-extrabold uppercase tracking-[0.04em] service-stroke-text leading-none">
      <span className="pr-10">
      REALISTIC TATTOOS — COVER UP TATTOOS — HYGIENIC STUDIO — BOOK NOW —      </span>
      <span className="pr-10">
      REALISTIC TATTOOS — COVER UP TATTOOS — HYGIENIC STUDIO — BOOK NOW —      </span>
    </div>
  </div>

  <div className="whitespace-nowrap overflow-hidden mt-3 md:mt-5">
    <div className="inline-flex animate-serviceTextRight text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-extrabold uppercase tracking-[0.04em] service-stroke-text leading-none">
      <span className="pr-10">
      REALISTIC TATTOOS — COVER UP TATTOOS — HYGIENIC STUDIO — BOOK NOW —      </span>
      <span className="pr-10">
      REALISTIC TATTOOS — COVER UP TATTOOS — HYGIENIC STUDIO — BOOK NOW —      </span>
    </div>
  </div>
</section>

<section
  ref={testimonialRef}
  className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden"
>
  <div
    className={`max-w-6xl mx-auto testimonial-reveal-right ${
      showTestimonialSection ? "show" : ""
    }`}
  >
    {/* Top Row */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 md:gap-8 items-start mb-8 md:mb-12">
      <h2 className="text-[36px] sm:text-5xl md:text-4xl lg:text-[50px] font-extrabold uppercase leading-[0.92] tracking-tight max-w-[760px]">
        Read What <span className="text-[#d4a64a]">Our Clients Say</span> About
        <br />
        Tattoo Work
      </h2>

      <div className="lg:pl-2 lg:pt-2">
        <Link
          href="/contact"
          className="appointment-link inline-block uppercase font-bold text-[14px] md:text-lg tracking-wide"
        >
          Make an Appointment
        </Link>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="block lg:hidden relative">
      <div className="w-[84%] ml-3 mb-[-28px] relative z-20">
        <img
          src={testimonials[testimonialIndex].image}
          alt={testimonials[testimonialIndex].name}
          className="w-full h-[230px] object-cover"
        />
      </div>

      <div className="border border-white/70 px-4 pt-20 pb-6 min-h-[360px] relative z-10">
        <p className="text-gray-400 text-[16px] leading-10">
          {testimonials[testimonialIndex].text}
        </p>

        <div className="mt-8 border-t border-white/15 pt-6">
          <h4 className="text-white text-[20px] font-bold leading-none">
            {testimonials[testimonialIndex].name}
          </h4>
          <p className="mt-3 text-gray-400 text-[16px]">
            {testimonials[testimonialIndex].role}
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          <button onClick={prevTestimonial} className="testimonial-arrow">
            ‹
          </button>
          <button onClick={nextTestimonial} className="testimonial-arrow">
            ›
          </button>
        </div>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden lg:grid relative grid-cols-[1fr_360px] items-start">
      <div className="border border-white/70 px-8 md:px-12 pt-10 md:pt-16 pb-8 md:pb-10 min-h-[360px] md:min-h-[460px] flex flex-col justify-between">
        <div>
          <p className="text-gray-400 text-lg md:text-[20px] leading-10 max-w-[540px]">
            {testimonials[testimonialIndex].text}
          </p>

          <div className="mt-10 border-t border-white/15 pt-8 max-w-[360px]">
            <h4 className="text-white text-2xl md:text-[30px] font-bold leading-none">
              {testimonials[testimonialIndex].name}
            </h4>
            <p className="mt-3 text-gray-400 text-lg md:text-xl">
              {testimonials[testimonialIndex].role}
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8 md:mt-10">
          <button onClick={prevTestimonial} className="testimonial-arrow">
            ‹
          </button>
          <button onClick={nextTestimonial} className="testimonial-arrow">
            ›
          </button>
        </div>
      </div>

      <div className="relative lg:-ml-16 lg:mt-[-8px]">
        <img
          src={testimonials[testimonialIndex].image}
          alt={testimonials[testimonialIndex].name}
          className="w-full h-[520px] object-cover"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Services;