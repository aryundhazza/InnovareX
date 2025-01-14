import React from "react";

const expertiseData = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML 5", imgSrc: "/img/skills/html5-icon.webp" },
      { name: "CSS 3", imgSrc: "/img/skills/css3-icon.webp" },
      { name: "JavaScript", imgSrc: "/img/skills/javascript-icon.webp" },
      { name: "React JS", imgSrc: "/img/skills/reactjs-icon.webp" },
      { name: "Vue JS", imgSrc: "/img/skills/vuejs.png" },
      { name: "Next JS", imgSrc: "/img/skills/nextjs.png" }
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", imgSrc: "/img/skills/php-icon.webp" },
      { name: "Node JS", imgSrc: "/img/skills/nodejs-icon.webp" },
      // { name: "Python", imgSrc: "/img/skills/python-icon.webp" },
      { name: "Laravel", imgSrc: "/img/skills/laravel-icon.webp" },
    ],
  },
  {
    title: "Design Grafis",
    skills: [
      { name: "Adobe Creative Cloud", imgSrc: "/img/skills/flutter-icon.webp" },
      { name: "Sketch", imgSrc: "/img/skills/sketch.png" },
      { name: "Figma", imgSrc: "/img/skills/figma.png" },
      { name: "Canva", imgSrc: "/img/skills/canva.png" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", imgSrc: "/img/skills/reactnative.png" }
    ],
  }
];

const OurExpertise = () => {
  return (
    <div className="bg-white dark:bg-trueGray-900">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 lg:py-12 mb-16">
        <div className="space-y-6">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ext-gray-800 dark:text-white">
              Keahlian Kami
            </h2>
            <p className="leading-3">
              Teknologi yang kami gunakan selalu menjadi yang terdepan dan paling populer
            </p>
          </div>
          <div className="grid sm:grid-cols-3 mx-auto gap-6">
            {expertiseData.map((category, index) => (
              <div
                key={index}
                className="mx-auto mt-6 w-3/4 text-center text-xl text-gray-500 p-5 border border-none shadow-sm rounded-lg"
              >
                <b>{category.title}</b>
                <div className="grid grid-cols-2 mx-auto gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <img
                        alt={skill.name}
                        loading="lazy"
                        width="48"
                        height="48"
                        decoding="async"
                        className="pt-10 mx-auto hover:scale-125 cursor-pointer duration-700"
                        src={skill.imgSrc}
                      />
                      <p className="pt-3">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
