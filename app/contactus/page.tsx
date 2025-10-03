"use client";
import React, { useState } from "react";
import PageWrapper from "@/components/layout/Pagewrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { ShinyButton } from "@/components/ui/shiny-button";

// --- FAQ Data ---
const FAQ_DATA = [
  {
    question: "What types of fertilizers do you manufacture?",
    answer:
      "We specialize in a wide range of fertilizers including NPK mixtures, micronutrient fertilizers, and custom blends tailored to specific soil and crop needs across India.",
  },
  {
    question: "How can I purchase Indoshyama products?",
    answer:
      "Our products are available through a wide network of authorized dealers and distributors. Use the 'Dealer Locator' or contact us directly.",
  },
  {
    question: "Are your fertilizers suitable for organic farming?",
    answer:
      "We are developing a line of organic-compliant products. Subscribe to our newsletter for updates on our organic range.",
  },
  {
    question: "Do you provide soil testing and crop advisory services?",
    answer:
      "Yes, we offer soil testing services and free crop advisory through our team of agronomists.",
  },
  {
    question: "How do I become a dealer or distributor for Indoshyama?",
    answer:
      "Fill out the contact form with your business details, and our sales team will contact you.",
  },
];

// --- Main Contact Page ---
const ContactPage = () => {
  return (
    <PageWrapper>
      <section className=" dark:bg-[#0b1727] text-zinc-900 dark:text-white -mb-30 md:px-10 lg:px-20 py-20">
        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <section className="relative w-full py-16 md:py-24">
          <div className="relative mx-auto max-w-7xl">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-top sm:bg-top lg:bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')",
                  minHeight: "500px",
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

              {/* Foreground Content */}
              <div className="relative flex flex-col lg:flex-row w-full p-6 sm:p-10 lg:p-14 gap-8 lg:gap-12">
                {/* Left Side - Info */}
                <div className="flex flex-col gap-6 text-white justify-center lg:w-1/2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    Get in Touch
                  </h1>
                  <p className="text-base sm:text-lg text-gray-200">
                    We're here to support India's farmers. Whether you have questions,
                    need guidance, or want to become a dealer, our team is ready to help
                    you grow.
                  </p>
                  <ContactInfo />
                </div>

                {/* Right Side - Form */}
                <div className="bg-white dark:bg-[#162231] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg lg:w-1/2">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

// --- Contact Info ---
const ContactInfo = () => (
  <div className="space-y-4">
    <InfoItem
      icon={faMapMarkerAlt}
      title="Our Location"
      text="Manufacturing Unit: Jhariya, Kanpur Dehat, Near Pama Railway Station, Uttar Pradesh"
    />
    <InfoItem icon={faPhone} title="Phone Number" text="+91-987-654-3210" />
    <InfoItem icon={faEnvelope} title="Email Address" text="contact@indoshyama.com" />
  </div>
);

const InfoItem = ({ icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="flex items-start gap-4">
    <FontAwesomeIcon icon={icon} className="text-xl sm:text-2xl text-[#4BAF47] mt-1" />
    <div>
      <h3 className="font-bold text-base sm:text-lg">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{text}</p>
    </div>
  </div>
);

// --- Contact Form ---
const ContactForm = () => (
  <form noValidate className="space-y-5">
    <div>
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 block capitalize">
        Full Name
      </label>
      <input
        type="text"
        className="min-h-[48px] leading-[48px] bg-gray-100 dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF47] w-full px-4 text-sm sm:text-base"
        placeholder="Your Name"
        required
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 block capitalize">
        Mobile Number
      </label>
      <input
        type="tel"
        className="min-h-[48px] leading-[48px] bg-gray-100 dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF47] w-full px-4 text-sm sm:text-base"
        placeholder="Your Mobile Number"
        required
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 block capitalize">
        Email Address
      </label>
      <input
        type="email"
        className="min-h-[48px] leading-[48px] bg-gray-100 dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF47] w-full px-4 text-sm sm:text-base"
        placeholder="you@example.com"
        required
      />
    </div>

    <div>
      <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 block">
        Message
      </label>
      <textarea
        id="message"
        className="leading-6 bg-gray-100 dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF47] w-full p-4 text-sm sm:text-base"
        placeholder="How can we assist you today?"
        rows={5}
        required
      ></textarea>
    </div>

    <ShinyButton className="w-full text-white bg-[#4BAF47] border-none">
      Submit Enquiry
    </ShinyButton>
  </form>
);

// --- FAQ Section ---
const FaqSection = () => (
  <div className="max-w-4xl mx-auto mb-20">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold ">Frequently Asked Questions</h2>
      <p className="text-lg text-[#4BAF47] font-semibold py-3 dark:text-gray-300 mt-3">
        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us directly.
      </p>
    </div>
    <div className="space-y-4">
      {FAQ_DATA.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </div>
);

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{question}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-4 text-[#4BAF47] dark:text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
