import { useState } from "react";
import myimage from "../assets/vicky1.jpeg";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "7999070307"; // replace with your number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = (e) => {
  e.preventDefault();

  const text = `New Tattoo Inquiry

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

  const whatsappUrl = `https://wa.me/917999070307?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank");
};

  return (
    <>
      <style>{`
        .contact-input,
        .contact-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          color: white;
          outline: none;
          font-size: 16px;
          padding: 14px 0;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: rgba(255,255,255,0.65);
        }

        .contact-textarea {
          resize: none;
          min-height: 44px;
        }

        .contact-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  align-items: start;
}

.contact-card-offset {
  margin-top: 29px;
}

@media (min-width: 1024px) {
  .contact-cards {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px;
  }

  .contact-card-offset {
    margin-top: 32px;
  }
}

      `}</style>

      <div className="bg-black text-white px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-12 items-start">
          {/* Left Side */}
          <div>
            <h1 className="text-[52px] sm:text-[60px] md:text-[40px] lg:text-[70px] font-extrabold uppercase leading-[0.92] tracking-tight max-w-[560px]">
              Book Your Tattoo Appointment in
              <span className="text-[#d4a64a]"> Bhopal</span>
            </h1>

            <p className="mt-8 text-gray-400 text-base md:text-lg leading-8 max-w-[560px]">
              Looking for the best tattoo artist in Bhopal? At Fox Tattoo Studio, we specialize in custom tattoo designs, professional tattooing, 
              and hygienic services. Fill out the form below or contact us directly to book your tattoo appointment today.
            </p>

            <div className="mt-10">
              <img
                src={myimage}
                alt="Tattoo artist"
                className="w-full max-w-[680px] h-[330px] md:h-[470px] object-cover"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="border border-white/70 px-8 md:px-10 lg:px-12 py-10 md:py-14 mt-2">
            <h2 className="text-[36px] md:text-[44px] font-extrabold uppercase leading-none mb-8">
Book Appointment on WhatsApp
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full border border-white text-white py-4 uppercase font-bold tracking-[0.14em] hover:bg-white hover:text-black transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

{/* Contact Info Cards Section */}
<section className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-14 md:py-8">
  <div className="max-w-6xl mx-auto">
    <div className="contact-cards">
      <div className="border border-white/80 h-[156px] sm:h-[170px] md:h-[340px] flex flex-col items-center justify-center text-center px-3">
        <h3 className="text-[18px] sm:text-2xl md:text-4xl font-extrabold uppercase leading-none">
          Address
        </h3>
        <p className="mt-3 text-gray-400 text-[10px] sm:text-sm md:text-xl font-bold uppercase leading-tight">
          20 Cooper Square,
          <br />
          New York
        </p>
      </div>

      <div className="contact-card-offset border border-white/80 h-[156px] sm:h-[170px] md:h-[340px] flex flex-col items-center justify-center text-center px-3">
        <h3 className="text-[18px] sm:text-2xl md:text-4xl font-extrabold uppercase leading-none">
          Phone
        </h3>
        <p className="mt-3 text-gray-400 text-[10px] sm:text-sm md:text-xl font-bold uppercase leading-tight">
          +91 7999070307
        </p>
      </div>

      <div className="border border-white/80 h-[156px] sm:h-[170px] md:h-[340px] flex flex-col items-center justify-center text-center px-3">
        <h3 className="text-[18px] sm:text-2xl md:text-4xl font-extrabold uppercase leading-none">
          Email
        </h3>
        <p className="mt-3 text-gray-400 text-[10px] sm:text-sm md:text-xl font-bold uppercase leading-tight">
          info@tattoon.com
        </p>
      </div>

      <div className="contact-card-offset border border-white/80 h-[156px] sm:h-[170px] md:h-[340px] flex flex-col items-center justify-center text-center px-3">
        <h3 className="text-[18px] sm:text-2xl md:text-4xl font-extrabold uppercase leading-none">
          Socials
        </h3>
        <p className="mt-3 text-gray-400 text-[10px] sm:text-sm md:text-xl font-bold uppercase leading-tight">
          @tattoonshop
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Contact;