import React from "react";

// Data anggota tim
const teamMembers = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
    linkedinUrl: "#",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/img/azza.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Dries Vincent",
    role: "Manager, Business Relations",
    imageUrl: "/img/gojid.jpg",
    linkedinUrl: "#",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-white dark:bg-trueGray-900 py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our Team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Innovarex was built by great colleagues
        </p>
      </div>

      <ul
        role="list"
        className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3"
      >
        {teamMembers.map((member, index) => (
          <li key={index} className="text-center">
            <img
              className="mx-auto h-40 w-40 rounded-full grayscale hover:grayscale-0"
              src={member.imageUrl}
              alt={member.name}
              loading="lazy"
            />
            <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm leading-6 text-blue-800">{member.role}</p>
            <a
              href={member.linkedinUrl}
              className="inline-flex items-center justify-center mt-4 h-10 w-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.271c-.966 0-1.75-.78-1.75-1.729s.784-1.729 1.75-1.729 1.75.78 1.75 1.729-.784 1.729-1.75 1.729zm13.5 12.271h-3v-5.603c0-1.338-.027-3.063-1.865-3.063-1.865 0-2.151 1.455-2.151 2.96v5.706h-3v-11h2.886v1.51h.041c.402-.761 1.384-1.562 2.849-1.562 3.047 0 3.612 2.007 3.612 4.619v6.433z" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurTeam;
