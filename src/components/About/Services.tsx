import React from "react";

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
      "Our web development services help you build a professional website that is both attractive and easy to use.",
    imageUrl: "https://admin.hecolab.id/uploads/frontend_icon_1987a458bd.png",
    link: "/en/web-service",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "We help increase customer engagement and promote your product or service through various social media platforms.",
    imageUrl:
      "https://admin.hecolab.id/uploads/customer_service_icon_5ada3c3bfb.png",
    link: "/en/web-service",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "Our mobile application development services help you build innovative and attractive mobile applications for iOS and Android platforms.",
    imageUrl: "https://admin.hecolab.id/uploads/mobile_icon_eab0dfd8c9.png",
    link: "/en/web-service",
  },
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
        <img src={imageUrl} alt={title} className="" />
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
        <h2 className="font-bold text-3xl lg:text-4xl mb-2">Our Services</h2>
        <p className="leading-9">
          Managing your business with our best service
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
