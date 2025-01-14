import React from "react";
import Image from "next/image";

// Define a type for service items
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Service data array
const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Kami menyediakan layanan web development yang komprehensif untuk membantu bisnis Anda mencapai tujuan online. Dengan pengalaman dan keahlian kami, kami dapat membantu Anda menciptakan website yang efektif, efisien, dan mudah digunakan.",
    imageUrl: "/services/web.png",
    link: "/en/web-service",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Kami menyediakan layanan digital marketing yang komprehensif untuk membantu bisnis Anda mencapai tujuan online. Dengan pengalaman dan keahlian kami, kami dapat membantu Anda meningkatkan kesadaran merek, meningkatkan trafik website, dan meningkatkan konversi.",
    imageUrl:
      "/services/digital.png",
    link: "/en/web-service",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "Kami menyediakan layanan pengembangan aplikasi mobile yang komprehensif untuk membantu bisnis Anda mencapai tujuan online. Dengan pengalaman dan keahlian kami, kami dapat membantu Anda membuat aplikasi mobile yang efektif, efisien, dan mudah digunakan.",
    imageUrl: "/services/mobile.png",
    link: "/en/web-service",
  },
  {
    id: 4,
    title: "Desain Grafis",
    description:
      "Kami menyediakan layanan desain grafis yang komprehensif untuk membantu bisnis Anda mencapai tujuan visual. Dengan pengalaman dan keahlian kami, kami dapat membantu Anda membuat desain grafis yang efektif, efisien, dan menarik.",
    imageUrl: "/services/design.png",
    link: "/en/web-service",
  },
  {
    id: 5,
    title: "KOL Management",
    description:
      "Kami menyediakan layanan KOL Management yang komprehensif untuk membantu bisnis Anda meningkatkan kesadaran merek dan mencapai target audiens. Dengan pengalaman dan keahlian kami, kami dapat membantu Anda mengelola KOL yang efektif dan efisien.",
    imageUrl: "/services/influencer.png",
    link: "/en/web-service",
  }
];

// ServiceCard Component
const ServiceCard: React.FC<ServiceItem> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="p-8 border text-center border-gray-100 shadow-sm rounded-lg hover:scale-105 cursor-pointer duration-100">
      <div className="text-center p-5 bg-indigo-50 rounded-lg inline-block">
        <img src={imageUrl} alt={title} className="w-12" />
        {/* <Image
          src={imageUrl}
          width={12}
          height={12}
          alt={title}
          className="max-w-full h-auto" // Agar logo responsif
        /> */}
      </div>
      <h3 className="text-xl mt-3 font-medium mb-4">
        <a href={link}>{title}</a>
      </h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

// ServicesSection Component
const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-4 sm:px-6 mb-12"
    >
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl lg:text-4xl mb-2">LAYANAN KAMI</h2>
        <p className="leading-9">
          Kelola bisnis Anda dengan layanan terbaik kami
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 lg:px-8 mb-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
