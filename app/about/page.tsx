"use client";
import React from "react";
import PageWrapper from "@/components/layout/Pagewrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faFlask,
  faTractor,
  faWarehouse,
  faVial,
  faGlobe,
  faUsers,
  faLightbulb,
  faShieldAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

// ============================================================================
// 1. DATA
// ============================================================================
const PAGE_DATA = {
  timelineEvents: [
    {
      title: "A Visionary Beginning",
      description:
        "Founded by the visionary Late Shri Ram Kishan Gupta, Indoshyama was born from a deep understanding of farmers' challenges and the desire to uplift Indian agriculture through quality nutrition.",
      type: "text" as "text",
    },
    {
      title: "A New Generation of Leadership",
      description:
        "The legacy continues through the passionate leadership of his sons, Shri Sanjay Gupta and Shri Vinay Kumar Gupta, who have carried his dream forward with unwavering commitment. Under their stewardship, Indoshyama Fertilizers has grown from a local vision into a trusted agricultural brand. With decades of combined experience, they have introduced modern manufacturing practices, invested in research-driven innovations, and built a strong dealer–farmer network across multiple states. Their leadership emphasizes quality, integrity, and farmer empowerment, ensuring that the company not only produces superior fertilizers but also contributes to the sustainable growth of Indian agriculture.",
      type: "directors" as "directors",
      images: [
        { src: "/assets/Director-1.png", name: "Shri Sanjay Gupta" },
        { src: "/assets/Director-2.png", name: "Shri Vinay Kumar Gupta" },
      ],
    },
  ],
  features: [
    { icon: faWarehouse, title: "In-House Manufacturing", text: "Total control over quality, consistency, and cost." },
    { icon: faVial, title: "Lab-Tested Fertilizers", text: "Each batch is tested for nutrient accuracy and purity." },
    { icon: faGlobe, title: "PAN India Supply", text: "On-time, reliable distribution across states and districts." },
    { icon: faUsers, title: "Farmer-First Approach", text: "Formulated specifically for Indian soils and crop cycles." },
    { icon: faTractor, title: "Experienced Leadership", text: "Founded on values, built with decades of agri-knowledge." },
    { icon: faShieldAlt, title: "Premium Packaging", text: "Moisture-proof, clearly labeled, and farmer-friendly bags." },
    { icon: faLightbulb, title: "Continuous Innovation", text: "Development of coated and custom micronutrient products." },
    { icon: faHandshake, title: "Dealer Support Network", text: "Schemes, training, and marketing material for our partners." },
  ],
  certifications: [
    "GST Registration",
    "MSME Registration",
    "FCO Compliance",
    "Lab-Tested Products",
  ],
};

// ============================================================================
// 2. MAIN PAGE
// ============================================================================
const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col space-y-24">
        <HeroSection />
        <TimelineSection />
        <ManufacturingExcellenceSection />
        <WhyChooseUsSection />
        <CertificationsSection />
      </div>
    </PageWrapper>
  );
};

export default AboutPage;

// ============================================================================
// 3. SECTIONS
// ============================================================================
const HeroSection = () => (
  <section
    className="relative min-h-[70vh] flex items-center justify-center text-center bg-fixed bg-cover bg-center text-white mt-23 rounded-lg "
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 rounded-lg"></div>
    <div className="relative z-10 px-6 max-w-4xl animate-fadeInUp">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        At the Heart of India's Agricultural Soul
      </h1>
      <p className="text-lg sm:text-xl font-semibold mt-6 text-white animate-pulse-slow">
        "Har Fasal Ke Saath Muskurahat Ugayein"
      </p>
    </div>
  </section>
);

const TimelineSection = () => (
  <section className="py-16 md:py-24 dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold">Our Journey</h2>
        <p className="text-xl text-[#4BAF47] dark:text-gray-300 mt-5">
          From a Visionary Idea to a Trusted Brand in Indian Agriculture.
        </p>
      </div>

      <div className="space-y-16">
        {PAGE_DATA.timelineEvents.map((event, index) => (
          <TimelineItem key={event.title} event={event} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const ManufacturingExcellenceSection = () => (
  <section className=" py-10 bg-gray-50 dark:bg-[#111f33] lg:-mt-15 -mt-5">
    <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
      <div className="bg-[#4BAF47] dark:bg-green-700 text-white p-10 rounded-2xl animate-fadeInUp">
        <h2 className="text-4xl font-extrabold mb-4">
          Manufacturing Excellence
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our state-of-the-art manufacturing unit in Jhariya, Kanpur Dehat, is
          equipped with modern processing systems and quality control labs to
          produce premium-grade fertilizers for Indian soils and crops.
        </p>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-16 md:py-24 -mt-10 bg-gray-50 dark:bg-[#111f33]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold">Why Choose Indoshyama?</h2>
        <p className="text-lg text-[#4BAF47] dark:text-gray-300 mt-5 max-w-3xl mx-auto">
          We don't just manufacture fertilizers — we deliver trust, growth, and
          results crafted for the diverse needs of every Indian farmer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PAGE_DATA.features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.text}
          />
        ))}
      </div>
    </div>
  </section>
);

const CertificationsSection = () => (
  <section className="py-16 md:py-24 lg:-mt-35 -mt-25 dark:bg-[#0b1727]">
    <div className="max-w-5xl mx-auto px-2 lg:px-12 text-center">
      <h2 className="text-4xl font-extrabold mb-5 lg:mb-3">Certified & Compliant</h2>
      <p className="text-lg text-[#4BAF47] dark:text-gray-300 mt-3 mb-10 ">
        We operate with complete transparency. Our commitment to quality,
        compliance, and ethical business practices is reflected in our
        certifications.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
        {PAGE_DATA.certifications.map((title) => (
          <CertificationItem key={title} title={title} />
        ))}
      </div>
    </div>
  </section>
);

// ============================================================================
// 4. REUSABLE SUB-COMPONENTS
// ============================================================================
type TimelineEvent = {
  title: string;
  description: string;
  type: "text" | "directors";
  images?: { src: string; name: string }[];
};
type TimelineItemProps = { event: TimelineEvent; index: number };
type FeatureCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};
type CertificationItemProps = { title: string };

const TimelineItem = ({ event }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-[#0b1727] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500"
  >
    {event.type === "directors" && event.images ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {event.images.map((img) => (
          <div key={img.src} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-80 object-cover object-[50%_30%] rounded-2xl shadow-xl transform transition duration-500 hover:scale-102 hover:shadow-xl"
            />
            <p className="mt-3 font-semibold">{img.name}</p>
          </div>
        ))}
      </div>
    ) : null}

    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="group p-6 bg-white dark:bg-[#0b1727] rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-[#4BAF47]">
    <FontAwesomeIcon
      icon={icon}
      className="text-3xl text-[#4BAF47] mb-4 group-hover:scale-110 transition-transform duration-300"
    />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const CertificationItem = ({ title }: CertificationItemProps) => (
  <div className="flex items-center justify-center flex-col gap-2 transform transition duration-500 hover:scale-110">
    <FontAwesomeIcon
      icon={faCheckCircle}
      className="text-4xl text-[#4BAF47] animate-bounce-slow"
    />
    <p className="font-semibold text-gray-700 dark:text-gray-200">{title}</p>
  </div>
);
